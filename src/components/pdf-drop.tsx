"use client";

import { useState, type DragEvent, type FormEvent } from "react";
import { serviceLinks } from "@/lib/site";

const maxBytes = 20 * 1024 * 1024;
// Brønnøysund annual accounts copies: open data, served with CORS for any origin.
const brreg = "https://data.brreg.no/regnskapsregisteret/regnskap/aarsregnskap/kopi";

function putFile(url: string, file: File, onProgress: (share: number) => void) {
  return new Promise<void>((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = (event) => event.lengthComputable && onProgress(event.loaded / event.total);
    xhr.onload = () => (xhr.status >= 200 && xhr.status < 300 ? resolve() : reject(new Error()));
    xhr.onerror = () => reject(new Error());
    xhr.open("PUT", url);
    xhr.setRequestHeader("Content-Type", file.type);
    xhr.send(file);
  });
}

export function PdfDrop() {
  const [dragging, setDragging] = useState(false);
  const [progress, setProgress] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [fetching, setFetching] = useState(false);

  async function upload(file?: File) {
    if (!file || progress !== null) return;
    setError("");
    if (file.type !== "application/pdf" || !file.name.toLowerCase().endsWith(".pdf"))
      return setError("Choose a PDF file.");
    if (file.size > maxBytes) return setError("The PDF must be under 20 MB.");
    setProgress(0);
    try {
      const response = await fetch(serviceLinks.pdfUpload, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fileName: file.name.replace(/[^a-zA-Z0-9._-]/g, "_"),
          fileSize: file.size,
          contentType: file.type,
        }),
      });
      const { sessionId, uploadUrl } = await response.json();
      if (!response.ok || !sessionId || !uploadUrl) throw new Error();
      await putFile(uploadUrl, file, setProgress);
      const next = new URL(serviceLinks.pdfRegistration);
      next.searchParams.set("uploadSession", sessionId);
      window.location.href = next.toString();
    } catch {
      setProgress(null);
      setError("The upload failed. Try again.");
    }
  }

  async function fetchNorwegian(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (fetching || progress !== null) return;
    const orgnr = String(new FormData(event.currentTarget).get("orgnr") || "").replace(/\s/g, "");
    if (!/^\d{9}$/.test(orgnr)) return setError("Enter the nine-digit organisation number.");
    setError("");
    setFetching(true);
    try {
      const yearsResponse = await fetch(`${brreg}/${orgnr}/aar`);
      const years: string[] = yearsResponse.ok ? await yearsResponse.json() : [];
      const year = years.map(Number).filter(Number.isInteger).sort((a, b) => b - a)[0];
      if (!year) return setError("No published accounts found for this organisation number.");
      const pdf = await fetch(`${brreg}/${orgnr}/${year}`);
      if (!pdf.ok) throw new Error();
      await upload(new File([await pdf.blob()], `${orgnr}-${year}.pdf`, { type: "application/pdf" }));
    } catch {
      setError("The Norwegian register did not respond. Try again.");
    } finally {
      setFetching(false);
    }
  }

  function drop(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    setDragging(false);
    upload(event.dataTransfer.files[0]);
  }

  return (
    <>
    <label
      className={`pdf-drop${dragging ? " dragging" : ""}`}
      onDragOver={(event) => {
        event.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={drop}
    >
      <input
        type="file"
        accept=".pdf,application/pdf"
        disabled={progress !== null}
        onChange={(event) => {
          upload(event.target.files?.[0]);
          event.target.value = "";
        }}
      />
      {progress === null ? (
        <>
          <strong>Drop a financial statement PDF</strong>
          <span>or choose a file. The first report is free.</span>
        </>
      ) : (
        <>
          <strong>Uploading… {Math.round(progress * 100)}%</strong>
          <span>Next, create an account to open your report.</span>
        </>
      )}
      {error && <span className="pdf-drop-error" role="alert">{error}</span>}
    </label>
    <form className="order-search brreg-fetch" onSubmit={fetchNorwegian}>
      <label className="form-field">
        Norwegian company? Enter its organisation number
        <input name="orgnr" inputMode="numeric" autoComplete="off" maxLength={11} disabled={fetching || progress !== null} />
      </label>
      <button className="button button-outline" type="submit" disabled={fetching || progress !== null}>
        {fetching ? "Getting accounts…" : "Get latest accounts"}
      </button>
    </form>
    </>
  );
}

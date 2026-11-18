"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Arrow } from "./icon";

export function ContactForm() {
  const [opened, setOpened] = useState(false);
  const searchParams = useSearchParams();
  const country = (searchParams.get("country") || "").slice(0, 100);
  const targetCompany = (searchParams.get("company") || "").slice(0, 200);
  const identifier = (searchParams.get("identifier") || "").slice(0, 100);
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `English valuation report request: ${form.get("targetCompany")} (${form.get("country")})`;
    const body = `Name: ${form.get("name")}\nEmail: ${form.get("email")}\nYour company: ${form.get("company") || "Not specified"}\nCompany to value: ${form.get("targetCompany")}\nCountry: ${form.get("country")}\nCompany identifier: ${form.get("identifier") || "Not specified"}\nReport language: English\n\nMessage:\n${form.get("message") || "No additional message"}`;
    window.location.href = `mailto:company-valuation@valuatum.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }
  return (
    <form className="contact-form" onSubmit={prepareEmail} key={`${country}:${targetCompany}`}>
      <h2>Request a valuation report</h2>
      <p>Tell us the company and country. We will confirm data availability, report scope and price before starting the work.</p>
      <p>
        This prepares an email in your email app. Review and send it there, or
        write directly to{" "}
        <a
          className="direct-email"
          href="mailto:company-valuation@valuatum.com"
        >
          company-valuation@valuatum.com
        </a>
        .
      </p>
      <div className="form-grid">
        <label className="form-field">
          Your name
          <input name="name" autoComplete="name" required maxLength={100} />
        </label>
        <label className="form-field">
          Your email
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={255}
          />
        </label>
        <label className="form-field">
          Your company (optional)
          <input name="company" autoComplete="organization" maxLength={200} />
        </label>
        <label className="form-field">
          Country
          <input name="country" defaultValue={country} required maxLength={100} />
        </label>
        <label className="form-field">
          Company to value
          <input name="targetCompany" defaultValue={targetCompany} required maxLength={200} />
        </label>
        <label className="form-field">
          Company identifier (optional)
          <input name="identifier" defaultValue={identifier} placeholder="CVR number, ticker or registration number" maxLength={100} />
        </label>
        <label className="form-field full">
          Message (optional)
          <textarea name="message" rows={4} maxLength={2000} />
        </label>
      </div>
      <button type="submit" className="button">
        Prepare email <Arrow diagonal />
      </button>
      {opened && (
        <p className="form-status" role="status">
          Your email app should open with the enquiry. The message has not been
          sent by this website. If no app opens, use the email address above.
        </p>
      )}
    </form>
  );
}

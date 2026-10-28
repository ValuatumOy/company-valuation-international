import Image from "next/image";
import { Arrow } from "./icon";

export const reportExamples = [
  {
    name: "NVIDIA Corporation",
    country: "United States · English",
    href: "/reports/nvidia-english-example.pdf",
    cover: "/reports/covers/nvidia-english-example.webp",
    language: "en",
  },
  {
    name: "JYSK A/S",
    country: "Denmark · English",
    href: "/reports/jysk-as-english-example.pdf",
    cover: "/reports/covers/jysk-as-english-example.webp",
    language: "en",
  },
  {
    name: "Harvia Oyj",
    country: "Finland · Finnish",
    href: "https://arvonmaaritys.fi/samples/harvia-oyj.pdf",
    cover: "/reports/covers/harvia-oyj.webp",
    language: "fi",
  },
  {
    name: "Gofore Oyj",
    country: "Finland · Finnish",
    href: "https://arvonmaaritys.fi/samples/gofore-oyj.pdf",
    cover: "/reports/covers/gofore-oyj.webp",
    language: "fi",
  },
  {
    name: "Fiskars Oyj Abp",
    country: "Finland · Finnish",
    href: "https://arvonmaaritys.fi/samples/fiskars-oyj-abp.pdf",
    cover: "/reports/covers/fiskars-oyj-abp.webp",
    language: "fi",
  },
];

export function ReportExamples() {
  return (
    <div className="company-examples">
      {reportExamples.map((example) => (
        <a
          className="company-example"
          key={example.name}
          href={example.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={example.cover}
            alt=""
            width={827}
            height={1170}
            sizes="(max-width: 600px) 45vw, 260px"
          />
          <span className="example-name">
            {example.name}
            <Arrow diagonal />
          </span>
          <span className="example-country">{example.country}</span>
        </a>
      ))}
    </div>
  );
}

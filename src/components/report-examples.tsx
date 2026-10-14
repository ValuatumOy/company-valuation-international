import Link from "next/link";
import { serviceLinks } from "@/lib/site";
import { Arrow } from "./icon";

const examples = [
  {
    name: "Harvia Oyj",
    country: "Finland · Finnish PDF",
    description: "A Finnish report for Harvia’s consolidated group, prepared with the current report pipeline. Includes financial history through 2025, model forecasts, valuation methods, scenarios and limitations.",
    reportHref: serviceLinks.finlandSample,
    requestHref: null,
  },
  {
    name: "JYSK A/S",
    country: "Denmark · English PDF · DKK",
    description: "Report dated 14 October 2026 for the Danish legal entity JYSK A/S (CVR 13590400). The analysis uses stored model forecasts and assumptions; it is not a current market price.",
    reportHref: "/reports/jysk-as-english-example.pdf",
    requestHref: `${serviceLinks.reportRequest}?country=Denmark&company=JYSK%20A%2FS`,
  },
  {
    name: "NVIDIA Corporation",
    country: "United States · Manual DCF example · English · USD",
    description: "A 10-page worked DCF example using NVIDIA’s FY2026 accounts and manual forecast assumptions. It covers annual cash flows, the equity-value bridge and sensitivity analysis; its scope differs from the full valuation report.",
    reportHref: "/reports/nvidia-english-example.pdf",
    requestHref: `${serviceLinks.reportRequest}?country=United%20States&company=NVIDIA%20Corporation`,
  },
];

export function ReportExamples() {
  return (
    <div className="company-examples">
      {examples.map((example) => (
        <article className="company-example" key={example.name}>
          <div>
            <p className="example-country">{example.country}</p>
            <h3>{example.name}</h3>
            <p>{example.description}</p>
          </div>
          <div className="company-example-actions">
            {example.reportHref ? (
              <a className="text-link" href={example.reportHref} target="_blank" rel="noopener noreferrer">View report<Arrow diagonal /></a>
            ) : null}
            {example.requestHref ? (
              <Link className="text-link" href={example.requestHref}>Request report<Arrow /></Link>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}

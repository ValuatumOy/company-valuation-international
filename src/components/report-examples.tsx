import Link from "next/link";
import { serviceLinks } from "@/lib/site";
import { Arrow } from "./icon";

const examples = [
  {
    name: "Heeros Oyj",
    country: "Finland · Finnish PDF",
    description: "Read the public valuation report from arvonmaaritys.fi. Report dated 4 August 2026; it shows the financials, assumptions, scenarios and limitations.",
    href: serviceLinks.finlandSample,
    action: "View report",
  },
  {
    name: "JYSK A/S",
    country: "Denmark · English report by request",
    description: "Request a report on JYSK or another Danish company. We will confirm available financial data, the report scope and price before starting.",
    href: `${serviceLinks.reportRequest}?country=Denmark&company=JYSK%20A%2FS`,
    action: "Request report",
  },
  {
    name: "Amazon.com, Inc.",
    country: "United States · English report by request",
    description: "Ask about a report for Amazon or another US company. We confirm the source data and assumptions with you before preparing the analysis.",
    href: `${serviceLinks.reportRequest}?country=United%20States&company=Amazon.com%2C%20Inc.`,
    action: "Request report",
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
          {example.href.startsWith("https:") ? (
            <a className="text-link" href={example.href} target="_blank" rel="noopener noreferrer">{example.action}<Arrow diagonal /></a>
          ) : (
            <Link className="text-link" href={example.href}>{example.action}<Arrow /></Link>
          )}
        </article>
      ))}
    </div>
  );
}

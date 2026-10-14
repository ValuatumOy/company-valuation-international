import type { ContentSection } from "@/content/pages";
import { Arrow } from "./icon";

const historyMethods = [
  "Book value of equity",
  "EBIT-% vs. P/Sales",
  "ROE-% vs. P/BV",
  "Other valuation multiples",
];

const branches = [
  {
    condition: "Positive net earnings",
    className: "positive",
    methods: ["ROE-% vs. P/BV", "P/E and EV/EBITDA multiples", "Discounted cash flow"],
  },
  {
    condition: "Negative net earnings, positive EBITDA",
    className: "mixed",
    methods: ["ROE-% vs. P/BV", "Valuation multiples", "EBIT-% vs. P/Sales", "Discounted cash flow, if DCF > 0"],
  },
  {
    condition: "Negative net earnings and EBITDA",
    className: "negative",
    methods: ["EBIT-% vs. P/Sales", "Book value of equity", "Discounted cash flow, if DCF > 0"],
  },
];

const pdfSteps = [
  { title: "Upload PDF", description: "Drop a financial statement PDF into the tool." },
  { title: "Valuation report with forecasts", description: "The system generates forecasts and a valuation report automatically." },
  { title: "Adjust numbers", description: "Review the extracted figures and modify assumptions to fit your scenario." },
  { title: "Download modified report", description: "Download the updated report with your adjusted numbers." },
];

export function ValuationDiagram({ kind }: { kind: NonNullable<ContentSection["diagram"]> }) {
  if (kind === "pdf-process") {
    return (
      <figure className="valuation-diagram" data-diagram={kind}>
        <figcaption>From a financial statement to a valuation report</figcaption>
        <ol className="pdf-process-diagram">
          {pdfSteps.map((step, i) => (
            <li key={step.title}>
              <span className="diagram-step" aria-hidden="true">{i + 1}</span>
              <div><h3>{step.title}</h3><p>{step.description}</p></div>
            </li>
          ))}
        </ol>
      </figure>
    );
  }

  if (kind === "methods") {
    return (
      <figure className="valuation-diagram" data-diagram={kind}>
        <figcaption>Historical data and future estimates inform company value</figcaption>
        <div className="methods-diagram">
          <div>
            <h3>Based on history</h3>
            <ul className="diagram-nodes">{historyMethods.map((method) => <li key={method}>{method}</li>)}</ul>
          </div>
          <div className="forecast-connector"><Arrow /><span>Automatically generated future estimates</span></div>
          <div>
            <h3>Based on future estimates</h3>
            <ul className="diagram-nodes"><li>Discounted cash flow</li></ul>
          </div>
        </div>
        <div className="diagram-result">Value of the company</div>
      </figure>
    );
  }

  return (
    <figure className="valuation-diagram" data-diagram={kind}>
      <figcaption>Choosing valuation methods from the company’s financial profile</figcaption>
      <div className="diagram-origin">Company</div>
      <div className="selection-diagram">
        {branches.map((branch) => (
          <div className={`selection-branch ${branch.className}`} key={branch.condition}>
            <h3>{branch.condition}</h3>
            <Arrow />
            <ul className="diagram-nodes">{branch.methods.map((method) => <li key={method}>{method}</li>)}</ul>
          </div>
        ))}
      </div>
    </figure>
  );
}

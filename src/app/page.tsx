import Link from "next/link";
import { Arrow, Mark } from "@/components/icon";
import { ReportPreview } from "@/components/report-preview";
import { Faq, homeFaqs } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { pageMetadata, serviceLinks } from "@/lib/site";
import { ReportExamples } from "@/components/report-examples";

export const metadata = pageMetadata(
  "Company Valuation | Understand Your Business Value",
  "Understand what your business is worth. Upload a PDF statement, enter financials or use Finnish and Danish company data to create a valuation report.",
  "/",
);

const solutions = [
  {
    name: "Upload a financial statement",
    description:
      "Turn a PDF statement into financial analysis, forecasts and a valuation report. Review the figures and make the assumptions your own.",
    href: "/solutions/pdf-based-company-valuation",
    action: "Explore PDF valuation",
    type: "pdf",
    meta: "Use your own financials",
  },
  {
    name: "Value a Finnish company",
    description:
      "Search for a Finnish company and order its valuation report at arvonmaaritys.fi, our Finnish service.",
    href: serviceLinks.finland,
    action: "Visit arvonmaaritys.fi",
    type: "finland",
    meta: "Online ordering",
  },
  {
    name: "Value a Danish company",
    description:
      "Request an English valuation report for a Danish company. We confirm the source data, scope and price with you before starting.",
    href: `${serviceLinks.reportRequest}?country=Denmark`,
    action: "Request report",
    type: "denmark",
    meta: "By request",
  },
];

function SolutionArt({ type }: { type: string }) {
  if (type === "pdf")
    return (
      <div className="solution-art pdf-art" aria-hidden="true">
        <div className="art-document">
          <span>Annual report</span>
          <strong>
            Financial
            <br />
            statements
          </strong>
          <div className="art-lines">
            <i />
            <i />
            <i />
          </div>
          <small>PDF</small>
        </div>
        <div className="art-arrow">
          <Arrow />
        </div>
        <div className="art-report">
          <Mark />
          <span>Valuation</span>
          <div className="art-sparkline">
            <svg viewBox="0 0 120 50">
              <path d="M0 45 20 36 40 39 60 22 80 26 100 9 120 1" />
            </svg>
          </div>
        </div>
      </div>
    );
  return (
    <div className={`solution-art ${type}-art`} aria-hidden="true">
      <div className="country-lines" />
      <div className="country-disc">
        <div className={`flag flag-${type}`} />
      </div>
      <div className="country-data">
        <span>Company data</span>
        <div>
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
      <span className="country-label">
        {type === "finland" ? "Finland" : "Denmark"}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <main id="main">
      <section className="hero">
        <div className="hero-copy">
          <div className="hero-intro">
            <span className="status-dot" /> Financial expertise since 2000
          </div>
          <h1>
            Understand what
            <br />
            your business
            <br />
            is worth.
          </h1>
          <p>
            A clearer view of company value. Start with your financial
            statements, explore the assumptions, and turn the numbers into your
            next decision.
          </p>
          <div className="actions" data-ui-actions>
            <a className="button" href="#solutions">
              Find your valuation <Arrow />
            </a>
            <Link className="button button-outline" href="/sample-report">
              Explore a sample report <Arrow diagonal />
            </Link>
          </div>
          <div className="hero-footnote">
            <span className="tiny-check" aria-hidden="true">
              ✓
            </span>{" "}
            PDF upload · Manual input · Finland & Denmark
          </div>
        </div>
        <ReportPreview />
      </section>
      <section className="expertise-strip" aria-label="Valuatum expertise">
        <p>
          Built by financial analysts.
          <br />
          <strong>Used to make real business decisions.</strong>
        </p>
        <div>
          <span>Established</span>
          <strong>2000</strong>
        </div>
        <div>
          <span>Approach</span>
          <strong>Multiple methods</strong>
        </div>
        <div>
          <span>Your analysis</span>
          <strong>Editable assumptions</strong>
        </div>
      </section>
      <section className="solutions section" id="solutions">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A starting point for every business</p>
            <h2>
              Your numbers.
              <br />
              Your way in.
            </h2>
          </div>
          <p>
            Choose the route that fits the data you have. Each service brings
            you closer to a valuation you can understand.
          </p>
        </div>
        <div className="solution-grid">
          {solutions.map((solution) => (
            <article className="solution-card" key={solution.type}>
              <SolutionArt type={solution.type} />
              <div className="solution-card-copy">
                <span className="solution-meta">
                  <i />
                  {solution.meta}
                </span>
                <h3>{solution.name}</h3>
                <p>{solution.description}</p>
                {solution.href.startsWith("https:") ? (
                  <a className="text-link" href={solution.href} target="_blank" rel="noopener noreferrer">
                    {solution.action}<Arrow diagonal />
                  </a>
                ) : <Link className="text-link" href={solution.href}>
                  {solution.action}
                  <Arrow diagonal />
                </Link>}
              </div>
            </article>
          ))}
        </div>
        <div className="manual-route">
          <div>
            <span className="manual-symbol" aria-hidden="true">
              +
            </span>
            <p>
              <strong>Prefer to enter your figures?</strong>
              <span>Build the analysis yourself with manual data input.</span>
            </p>
          </div>
          <Link
            className="text-link"
            href="/solutions/manual-data-input-company-valuation"
          >
            Explore manual input <Arrow diagonal />
          </Link>
        </div>
        <div className="coverage-note">
          <span>Looking beyond Finland and Denmark?</span>
          <Link href="/solutions/international-company-valuation">
            Explore international options <Arrow />
          </Link>
        </div>
      </section>
      <section className="clarity-section">
        <div className="clarity-copy">
          <p className="eyebrow">See the reasoning behind the result</p>
          <h2>
            Value is a range.
            <br />
            Clarity is knowing why.
          </h2>
          <p>
            A company’s value depends on its future, not just its past. Compare
            methods, review the forecasts and see how a different assumption
            changes the picture.
          </p>
          <Link
            className="button button-light"
            href="/resources/company-valuation/methods"
          >
            Understand the methods <Arrow />
          </Link>
        </div>
        <div className="clarity-visual">
          <div className="value-range-card">
            <div>
              <span>Different methods. One clearer picture.</span>
              <span className="illustration-label">Illustration</span>
            </div>
            <div className="range-row">
              <span>Discounted cash flow</span>
              <div>
                <i />
              </div>
            </div>
            <div className="range-row">
              <span>Earnings multiples</span>
              <div>
                <i />
              </div>
            </div>
            <div className="range-row">
              <span>Asset-based value</span>
              <div>
                <i />
              </div>
            </div>
            <p>Compare the result. Understand the assumptions.</p>
          </div>
          <div className="clarity-points">
            <span>Financial analysis</span>
            <span>Forecast scenarios</span>
            <span>PDF reports</span>
          </div>
        </div>
      </section>
      <section className="process-section section" id="how-it-works">
        <div className="section-heading">
          <div>
            <p className="eyebrow">From statements to perspective</p>
            <h2>
              Make sense of
              <br />
              the whole picture.
            </h2>
          </div>
          <p>
            Financial data is the starting point. The real value comes from
            understanding what drives the result.
          </p>
        </div>
        <div className="process-grid">
          <article>
            <span className="step-number">01</span>
            <h3>Bring the financials</h3>
            <p>
              Upload a PDF, enter figures or search for available company data.
              Review the source numbers before moving on.
            </p>
          </article>
          <article>
            <span className="step-number">02</span>
            <h3>Explore the assumptions</h3>
            <p>
              Review the forecasts and valuation methods. Adjust inputs in the
              valuation tool and compare scenarios.
            </p>
          </article>
          <article>
            <span className="step-number">03</span>
            <h3>Put the value to work</h3>
            <p>
              Create your report to support a sale, acquisition, investment
              discussion or your next business decision.
            </p>
          </article>
        </div>
        <a className="text-link" href={serviceLinks.pdf} target="_blank" rel="noopener noreferrer">
          Open the PDF valuation service <Arrow diagonal />
        </a>
      </section>
      <section className="report-section section">
        <div className="report-editorial-art" aria-hidden="true">
          <div className="editorial-report">
            <div>
              <Mark />
              <span>Valuatum</span>
            </div>
            <small>Illustrative report outline</small>
            <strong>
              A business.
              <br />A clearer picture.
            </strong>
            <div className="editorial-report-bars">
              {[40, 53, 49, 68, 79, 94].map((height, i) => (
                <i key={i} style={{ height: `${height}%` }} />
              ))}
            </div>
            <span>Financials / Forecasts / Valuation</span>
          </div>
          <div className="report-page-tag">
            Your analysis, ready to share <Arrow diagonal />
          </div>
        </div>
        <div className="report-editorial-copy">
          <p className="eyebrow">A report with the reasoning included</p>
          <h2>
            More useful than
            <br />a single number.
          </h2>
          <p>
            Follow the financials, forecasts and valuation methods in one place.
            See the assumptions that drive value and share an analysis others
            can follow.
          </p>
          <ul>
            <li>
              <span aria-hidden="true">✓</span> Financial history and key
              metrics
            </li>
            <li>
              <span aria-hidden="true">✓</span> Forecasts and scenario
              assumptions
            </li>
            <li>
              <span aria-hidden="true">✓</span> Valuation methods and
              comparisons
            </li>
            <li>
              <span aria-hidden="true">✓</span> A PDF report from your chosen
              service
            </li>
          </ul>
          <Link className="text-link" href="/sample-report">
            Explore the illustrative report <Arrow diagonal />
          </Link>
        </div>
      </section>
      <section className="section examples-section" id="company-examples">
        <div className="section-heading">
          <div><h2>See the report.<br />Find your next step.</h2></div>
          <p>Read real Finnish and English Danish reports. Ask our team about an English report for a Danish or US company; we confirm source data, scope and price before starting.</p>
        </div>
        <ReportExamples />
      </section>
      <section className="resources-section section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Know what goes into the number</p>
            <h2>
              A little understanding.
              <br />A better decision.
            </h2>
          </div>
          <Link className="text-link" href="/resources">
            All valuation guides <Arrow />
          </Link>
        </div>
        <div className="resource-grid">
          <Link
            className="resource-tile"
            href="/resources/company-valuation/what-is-company-valuation"
          >
            <span className="guide-art guide-art-value" aria-hidden="true">
              <span>value</span>
              <i />
            </span>
            <span className="resource-type">The fundamentals</span>
            <h3>What is company valuation?</h3>
            <p>
              Understand business value and the difference between a valuation
              and a sale price.
            </p>
            <span className="text-link">
              Read the guide <Arrow diagonal />
            </span>
          </Link>
          <Link
            className="resource-tile"
            href="/resources/company-valuation/methods"
          >
            <span className="guide-art guide-art-methods" aria-hidden="true">
              <i />
              <i />
              <i />
              <span>DCF</span>
            </span>
            <span className="resource-type">The methodology</span>
            <h3>How company valuation works</h3>
            <p>
              Explore discounted cash flow, multiples and asset-based
              approaches.
            </p>
            <span className="text-link">
              Compare the methods <Arrow diagonal />
            </span>
          </Link>
          <Link
            className="resource-tile"
            href="/solutions/why-do-you-need-company-valuation"
          >
            <span className="guide-art guide-art-decision" aria-hidden="true">
              <svg viewBox="0 0 120 100">
                <path d="M10 80 40 50 68 62 110 16M86 16h24v24" />
              </svg>
            </span>
            <span className="resource-type">The next step</span>
            <h3>When to value your company</h3>
            <p>From ownership changes to investment and strategic planning.</p>
            <span className="text-link">
              Explore the use cases <Arrow diagonal />
            </span>
          </Link>
        </div>
      </section>
      <section className="faq-section">
        <div className="faq-heading">
          <p className="eyebrow">Good questions, clear answers</p>
          <h2>
            Before you
            <br />
            take the next step.
          </h2>
          <p>Start here, or ask our team about your company and your market.</p>
          <Link className="text-link" href="/support/faq">
            All frequently asked questions <Arrow />
          </Link>
        </div>
        <Faq items={homeFaqs} />
      </section>
      <section className="closing-cta">
        <div>
          <p className="eyebrow">Your next decision starts here</p>
          <h2>
            Get a clearer
            <br />
            view of your business.
          </h2>
        </div>
        <div>
          <a className="button" href="#solutions">
            Find your valuation <Arrow />
          </a>
          <Link className="text-link" href="/contact-international">
            Talk to our team <Arrow diagonal />
          </Link>
        </div>
      </section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: homeFaqs.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }}
      />
    </main>
  );
}

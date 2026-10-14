import Link from "next/link";
import { Arrow, Mark } from "@/components/icon";
import { JsonLd } from "@/components/json-ld";
import { pageMetadata, siteUrl } from "@/lib/site";
import { ReportExamples } from "@/components/report-examples";

export const metadata = pageMetadata(
  "Sample Company Valuation Report",
  "Read a real Finnish company valuation sample, request English reports for Danish and US companies, and explore an illustrative valuation calculation.",
  "/sample-report",
);

export default function SampleReport() {
  return (
    <main id="main">
      <div className="page-hero">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <Arrow />
          <span>Sample report</span>
        </nav>
        <p className="eyebrow">Company valuation reports</p>
        <h1>
          The reasoning
          <br />
          behind the value.
        </h1>
        <p className="intro">
          Read a real Finnish report and ask our team about an English report
          for a Danish or US company. The walkthrough below explains a simple
          calculation with fictional financials.
        </p>
      </div>
      <div className="content-shell">
        <aside className="page-toc">
          <h2>Explore the report</h2>
          <nav aria-label="Report contents">
            <a href="#company-examples">Company reports</a>
            <a href="#financials">Financial inputs</a>
            <a href="#valuation">Valuation calculation</a>
            <a href="#scenarios">Compare scenarios</a>
            <a href="#your-report">Your real report</a>
            <a href="#historical-examples">Historical examples</a>
          </nav>
        </aside>
        <article className="article-content">
          <section className="article-section" id="company-examples">
            <h2>Company reports</h2>
            <ReportExamples />
          </section>
          <div className="sample-notice">
            <span aria-hidden="true">↗</span>
            <p>
              <strong>Fictional company. Illustrative calculation.</strong>
              <br />
              All figures below are synthetic. This example does not show
              current data for a real company or promise a specific report
              format.
            </p>
          </div>
          <div className="sample-report">
            <div className="sample-report-header">
              <span className="brand">
                <Mark />
                Valuatum
              </span>
              <span>Illustrative company valuation</span>
            </div>
            <h2>Example Company Ltd</h2>
            <p>
              A straightforward EBITDA multiple example. All figures in euros.
            </p>
            <section className="article-section" id="financials">
              <h2>Financial inputs</h2>
              <table className="sample-data">
                <caption className="sr-only">
                  Fictional forecast inputs for 2027
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Financial metric</th>
                    <th scope="col">2027 forecast</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Revenue</td>
                    <td>€3,000,000</td>
                  </tr>
                  <tr>
                    <td>EBITDA</td>
                    <td>€450,000</td>
                  </tr>
                  <tr>
                    <td>EBITDA margin</td>
                    <td>15.0%</td>
                  </tr>
                  <tr>
                    <td>Net debt</td>
                    <td>€200,000</td>
                  </tr>
                </tbody>
              </table>
              <p>
                The EBITDA margin is €450,000 ÷ €3,000,000 = 15%. Net debt is
                financial debt less cash. Actual analysis must review the items
                included in each input.
              </p>
            </section>
            <section className="article-section" id="valuation">
              <h2>From enterprise value to equity value</h2>
              <p>
                With an illustrative 6× EBITDA multiple, the enterprise value is
                €2,700,000. Subtracting €200,000 of net debt gives an equity
                value of €2,500,000.
              </p>
              <div className="sample-formula">
                <code>€450,000 × 6 − €200,000 = €2,500,000</code>
              </div>
              <div className="sample-value">
                <span>Illustrative equity value</span>
                <strong>€2.50 million</strong>
                <p>Under the 6× EBITDA assumption</p>
              </div>
              <p>
                The multiple here is an example assumption. It is not a
                recommended multiple for a particular industry or company.
              </p>
            </section>
            <section className="article-section" id="scenarios">
              <h2>One assumption changes the picture</h2>
              <p>
                Keep EBITDA and net debt the same, and compare three multiples.
                This demonstrates why understanding the assumptions matters.
              </p>
              <table className="sample-data">
                <caption className="sr-only">
                  Equity value at three illustrative EBITDA multiples
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Multiple</th>
                    <th scope="col">Enterprise value</th>
                    <th scope="col">Equity value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>5× EBITDA</td>
                    <td>€2,250,000</td>
                    <td>€2,050,000</td>
                  </tr>
                  <tr>
                    <td>6× EBITDA</td>
                    <td>€2,700,000</td>
                    <td>€2,500,000</td>
                  </tr>
                  <tr>
                    <td>7× EBITDA</td>
                    <td>€3,150,000</td>
                    <td>€2,950,000</td>
                  </tr>
                </tbody>
              </table>
              <p>
                A complete valuation also considers other methods,
                business-specific risks, the purpose of the valuation and the
                quality of financial information.
              </p>
              <Link
                className="text-link"
                href="/resources/company-valuation/methods"
              >
                Explore all valuation methods <Arrow />
              </Link>
            </section>
          </div>
          <section className="article-section" id="your-report">
            <h2>Start with your own company</h2>
            <p>
              The existing services can create reports from your financial
              statements or available company data. Check the current report
              options and pricing in the service you choose.
            </p>
            <div className="actions">
              <Link
                className="button"
                href="/solutions/pdf-based-company-valuation"
              >
                Explore PDF valuation <Arrow />
              </Link>
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- Native anchors also scroll when the destination hash is already current. */}
              <a className="button button-outline" href="/#solutions">
                See all solutions <Arrow />
              </a>
            </div>
          </section>
          <section className="article-section" id="historical-examples">
            <h2>Historical report examples</h2>
            <p>
              These reports were linked from the previous website. They contain
              earlier data and report formats; they are retained for reference
              and are not current valuations.
            </p>
            <div className="article-links">
              <a href="https://www.valuatum.com/democompanyvaluationreport/">
                Demo company report <Arrow diagonal />
              </a>
              <a href="https://www.valuatum.com/jysk_companyvaluation/">
                Jysk report <Arrow diagonal />
              </a>
              <a href="https://www.valuatum.com/amazonvaluationreport/">
                Amazon report <Arrow diagonal />
              </a>
              <a href="https://www.valuatum.com/wp-content/uploads/sites/10/2025/11/DemoCompanyValuationReport.pdf">
                Manual valuation sample PDF <Arrow diagonal />
              </a>
            </div>
          </section>
        </article>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
            {
              "@type": "ListItem",
              position: 2,
              name: "Sample report",
              item: `${siteUrl}/sample-report`,
            },
          ],
        }}
      />
    </main>
  );
}

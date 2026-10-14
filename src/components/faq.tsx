export const homeFaqs = [
  {
    q: "How do I value my company?",
    a: "Start with the financial data you have. Upload a PDF financial statement, enter the figures yourself, or use available company data in Finland and Denmark. Review the forecasts and assumptions, compare valuation methods, then create your report.",
  },
  {
    q: "Can I upload a PDF financial statement?",
    a: "Yes. The PDF valuation service extracts financial figures from your statement and builds a baseline analysis. Review the extracted data and adjust the assumptions before using the report.",
  },
  {
    q: "Which countries are supported?",
    a: "Finnish reports can be ordered at arvonmaaritys.fi. For an English report on a Danish, US or other international company, request it from our team; we confirm data availability and scope before starting. PDF upload and manual input remain available through the existing tools.",
  },
  {
    q: "Which valuation methods do you use?",
    a: "The tools support discounted cash flow (DCF), earnings and revenue multiples, peer comparisons and asset-based approaches where applicable. Different methods give different perspectives on value. The methods guide explains when each is useful.",
  },
  {
    q: "Can I change the forecasts and assumptions?",
    a: "Yes. In the valuation tools, you can review and edit forecasts, growth assumptions, discount rates and multiples. Comparing scenarios helps you see which assumptions have the greatest effect on the result.",
  },
  {
    q: "What does a valuation cost?",
    a: "See arvonmaaritys.fi for Finnish report pricing. For an English international report, we confirm the scope and quote the price before starting. The separate PDF and manual tools have their own access terms.",
  },
  {
    q: "What information do I need?",
    a: "An income statement and balance sheet are the starting point. A cash flow statement and several years of financial history improve the analysis. For Finland and Denmark, available company data can reduce manual input.",
  },
  {
    q: "Can I download and share a report?",
    a: "Yes. The sample page includes a Finnish valuation report for Harvia and English reports for JYSK and NVIDIA. NVIDIA uses the full report template with manually prepared forecast assumptions. You can read and share the PDFs. For your own international company report, send our team a request.",
  },
  {
    q: "How reliable is an automated company valuation?",
    a: "The result depends on the quality of financial data and the assumptions used. A valuation is an estimate, not a guaranteed transaction price. Review the source figures and test the assumptions against the purpose of your valuation.",
  },
  {
    q: "Where can I read about data security?",
    a: "Our security and privacy pages describe the data practices documented for the valuation services. Contact our team for specific questions about your data or the service you plan to use.",
  },
];

export function Faq({
  items = homeFaqs.slice(0, 6),
}: {
  items?: { q: string; a: string }[];
}) {
  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <details key={item.q} name="home-faq" open={i === 0}>
          <summary>
            <span>{item.q}</span>
            <i aria-hidden="true">
              <span />
              <span />
            </i>
          </summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export type ContentSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  links?: { label: string; href: string }[];
  image?: { src: string; alt: string };
  video?: { id: string; title: string };
  diagram?: "methods" | "selection" | "pdf-process";
};

export type ContentPage = {
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  sections: ContentSection[];
  related?: string[];
  kind?: "guide" | "solution" | "company" | "support";
};

export const contentPages: ContentPage[] = [
  {
    path: "/support",
    title: "Support",
    description:
      "Help using Valuatum Tools: choose the right workflow, upload or enter data, edit assumptions, and export valuation reports.",
    eyebrow: "Support",
    intro:
      "Get help with entering financial data, reviewing assumptions and creating reports in Valuatum Tools. If your question is not answered here, email support with a description of the issue.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        links: [
          {
            label: "FAQ (Start here)",
            href: "/support/faq",
          },
          {
            label: "Learn valuation basics",
            href: "/resources",
          },
          {
            label: "International coverage",
            href: "/contact-international",
          },
          {
            label: "Email support",
            href: "mailto:estimator@valuatum.com",
          },
        ],
        paragraphs: [
          "The FAQ covers inputs, PDF uploads, assumptions, valuation methods, reports and pricing.",
          "The valuation guides explain business value and the methods used to estimate it.",
          "For an international report, tell us the company and country you want to value.",
          "When emailing support, include the service you used and what you were trying to do.",
        ],
      },
      {
        id: "common-topics",
        title: "Common topics",
        links: [
          {
            label: "Manual input valuation",
            href: "/solutions/manual-data-input-company-valuation",
          },
          {
            label: "PDF-statement valuation",
            href: "/solutions/pdf-based-company-valuation",
          },
          {
            label: "Danish company report requests",
            href: "/solutions/danish-company-valuation",
          },
          {
            label: "Finnish company valuation",
            href: "https://arvonmaaritys.fi/",
          },
          {
            label: "What is company valuation?",
            href: "/resources/company-valuation/what-is-company-valuation",
          },
          {
            label: "Company valuation methods",
            href: "/resources/company-valuation/methods",
          },
          {
            label: "Privacy",
            href: "/privacy-policy",
          },
        ],
      },
      {
        id: "before-you-contact-support",
        title: "Before you contact support",
        paragraphs: [
          "If a valuation result looks wrong, check the inputs and assumptions:",
        ],
        bullets: [
          "confirm the input figures (especially if importing from a PDF),",
          "review growth, margin, and discount-rate assumptions,",
          "compare results across methods (DCF vs benchmarking).",
        ],
      },
      {
        id: "contact",
        title: "Contact",
        paragraphs: ["Email: estimator@valuatum.com", "Please include:"],
        links: [
          {
            label: "estimator@valuatum.com",
            href: "mailto:estimator@valuatum.com",
          },
        ],
        bullets: [
          "which workflow you used (Manual / PDF / Denmark / Finland),",
          'what you uploaded/entered (e.g., "2023 annual report PDF"),',
          "what you expected vs what happened,",
          "screenshots if relevant.",
        ],
      },
    ],
    kind: "support",
    related: [
      "/support/faq",
      "/resources",
      "/contact-international",
      "/solutions/manual-data-input-company-valuation",
      "/solutions/pdf-based-company-valuation",
      "/solutions/danish-company-valuation",
    ],
  },
  {
    path: "/support/faq",
    title: "Company valuation tool FAQ",
    description:
      "Answers about inputs, PDF uploads, DCF vs multiples, editable assumptions, valuation reports, and pricing for Valuatum Tools.",
    eyebrow: "Support",
    intro:
      "Answers about manual data entry, PDF financial statements, valuation assumptions and reports.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        paragraphs: [
          "Valuatum Tools estimates business value from manually entered figures, PDF financial statements or available company data. In the valuation tools, you can review assumptions, compare DCF and benchmarking results, and create a report.",
        ],
      },
      {
        id: "what-information-do-i-need-to-value-a-company",
        title: "What information do I need to value a company?",
        paragraphs: [
          "Enter the key financial figures manually or upload a PDF financial statement. Review the source data and forecast assumptions before interpreting the valuation.",
        ],
        links: [
          {
            label: "Manual input workflow",
            href: "/solutions/manual-data-input-company-valuation",
          },
          {
            label: "PDF workflow",
            href: "/solutions/pdf-based-company-valuation",
          },
        ],
      },
      {
        id: "which-valuation-workflow-should-i-choose",
        title: "Which valuation workflow should I choose?",
        bullets: [
          "Choose Manual Input if you already have key figures and want a fast estimate.",
          "Choose PDF Statement if you have statements in a PDF and want to reduce manual data entry.",
          "For Finland, order a report through arvonmaaritys.fi. For Denmark and other countries, request a report and confirm scope and price with us before generation.",
        ],
                links: [
          {
            label: "Denmark",
            href: "/solutions/danish-company-valuation",
          },
          {
            label: "Finland",
            href: "https://arvonmaaritys.fi/",
          },
        ],
      },
      {
        id: "can-i-calculate-company-value-from-a-pdf-financial-statement",
        title: "Can I calculate company value from a PDF financial statement?",
        paragraphs: [
          "Yes. The PDF service extracts financial figures from a statement. Review those figures before using them in a valuation report.",
        ],
        links: [
          {
            label: "PDF workflow",
            href: "/solutions/pdf-based-company-valuation",
          },
        ],
      },
      {
        id: "my-pdf-results-look-wrong-what-should-i-check-first",
        title: "What should I check if my PDF results look wrong?",
        paragraphs: [
          "Check revenue, operating profit and the balance sheet figures against the source statement. Scanned PDFs may need more manual review.",
        ],
      },
      {
        id: "do-i-need-all-three-statements-income-statement-balance-sheet-cash-flow",
        title:
          "Do I need all three statements (income statement, balance sheet, cash flow)?",
        paragraphs: [
          "You can start with partial inputs and add information later. Missing figures can limit the methods you can use and the conclusions you can draw.",
        ],
      },
      {
        id: "what-valuation-methods-does-the-tool-support",
        title: "What valuation methods does the tool support?",
        paragraphs: [
          "The valuation tools use discounted cash flow (DCF) and benchmarking methods, including valuation multiples. The methods used depend on profitability and the available data.",
        ],
        links: [
          {
            label: "Valuation methods",
            href: "/resources/company-valuation/methods",
          },
        ],
      },
      {
        id: "what-s-the-difference-between-dcf-and-multiples-valuation",
        title: "What's the difference between DCF and multiples valuation?",
        bullets: [
          "DCF estimates value from expected future cash flows, discounted to today.",
          "Multiples estimate value by comparing a company's metrics (like earnings or revenue) to market references.",
        ],
        paragraphs: [
          "Comparing DCF and multiples can help you check whether the forecast assumptions agree with market benchmarks.",
        ],
      },
      {
        id: "can-i-edit-assumptions-like-growth-rates-margins-and-discount-rates",
        title:
          "Can I edit assumptions like growth rates, margins, and discount rates?",
        paragraphs: [
          "Yes. You can review and adjust key assumptions and re-run the valuation to test scenarios (e.g., conservative vs optimistic).",
        ],
      },
      {
        id: "why-did-the-valuation-change-a-lot-after-adjusting-one-input",
        title: "Why did the valuation change a lot after adjusting one input?",
        paragraphs: [
          "Growth and discount-rate assumptions can have a large effect on value. A small change may affect several forecast years and the terminal value.",
        ],
      },
      {
        id: "what-do-i-get-at-the-end-just-a-number-or-a-valuation-report",
        title: "What does the valuation report include?",
        paragraphs: [
          "You get a valuation report that documents the inputs and assumptions behind the estimate. This helps you explain the result to stakeholders.",
        ],
      },
      {
        id: "can-i-run-multiple-scenarios-and-generate-updated-reports",
        title: "Can I run multiple scenarios and generate updated reports?",
        paragraphs: [
          "In the valuation tools, change growth, margin or discount-rate assumptions to compare upside and downside cases.",
        ],
      },
      {
        id: "what-is-free-vs-paid-on-valuatum-tools",
        title: "What is free vs paid on Valuatum Tools?",
        bullets: [
          "Manual data input: the basic Estimator has a free option; check current service terms",
          "PDF-based valuation: free and paid credit options; see the service for current allowances",
          "Finnish company valuation: search for a company and order a report through arvonmaaritys.fi; review the assumptions and report there. Current terms are shown by the service.",
          "Denmark and other international markets: request a report by country and company; we will confirm data scope and price before generation.",
        ],
      },
      {
        id: "how-does-danish-company-valuation-work-if-i-don-t-have-financial-statements",
        title:
          "How does Danish company valuation work if I don't have financial statements?",
        paragraphs: [
          "For a Danish company, send us its name or CVR number. We will check the available company data and confirm the report scope and price.",
        ],
        links: [
          {
            label: "Danish company valuation",
            href: "/solutions/danish-company-valuation",
          },
        ],
      },
      {
        id: "what-s-included-in-finnish-company-valuation",
        title: "What's included in Finnish company valuation?",
        paragraphs: [
          "Search for a Finnish company on arvonmaaritys.fi, order its report, then review the assumptions and report in the service.",
        ],
        links: [
          {
            label: "Finnish company valuation",
            href: "https://arvonmaaritys.fi/",
          },
        ],
      },
      {
        id: "how-do-i-request-an-international-company-valuation",
        title: "How do I request an international company valuation?",
        paragraphs: [
          "For Denmark and other international markets, request a report by country and company. We confirm scope and price before generation.",
        ],
        links: [
          {
            label: "International contact",
            href: "/contact-international",
          },
        ],
      },
      {
        id: "the-tool-won-t-open-i-m-stuck-on-login-what-should-i-try",
        title: "What should I do if I cannot open the tool or sign in?",
        paragraphs: [
          "Try a hard refresh, disable browser extensions that block pop-ups/scripts, and test in another browser. If the issue persists, email support with your workflow, browser, and screenshots.",
        ],
        links: [
          {
            label: "estimator@valuatum.com",
            href: "mailto:estimator@valuatum.com",
          },
        ],
      },
      {
        id: "is-an-online-company-valuation-accurate",
        title: "Is an online company valuation accurate?",
        paragraphs: [
          "An online valuation estimates value from the inputs and assumptions used. Its usefulness depends on how well those reflect the business. The final transaction price may differ.",
        ],
      },
      {
        id: "how-is-my-data-handled",
        title: "How is my data handled?",
        paragraphs: [
          "Read the privacy policy for data handling details. If you need to know what a particular service stores, email support and name that service.",
        ],
        links: [
          {
            label: "Privacy Policy",
            href: "/privacy-policy",
          },
        ],
      },
    ],
    kind: "support",
    related: [
      "/solutions/manual-data-input-company-valuation",
      "/solutions/pdf-based-company-valuation",
      "/solutions/danish-company-valuation",
      "/solutions/finnish-company-valuation",
      "/resources/company-valuation/methods",
      "/contact-international",
    ],
  },
  {
    path: "/about-us",
    title: "About us",
    description:
      "Valuatum is a financial software company founded in 2000, building valuation, credit risk, and equity research solutions for customers worldwide.",
    eyebrow: "Valuatum",
    intro:
      "Valuatum is a financial software company founded in 2000, specialising in valuation, credit risk, and equity research solutions. Valuatum Tools is our suite of company valuation applications built for analysts, advisors, and business owners worldwide.",
    sections: [
      {
        id: "what-we-do",
        title: "What we do",
        bullets: [
          "Company valuation software for manual input and PDF-based workflows",
          "Credit risk analysis and equity research platforms",
          "SaaS delivery with continuous development and maintenance",
          "Serving credit institutions, investment banks, and asset managers globally",
        ],
        paragraphs: [
          "Our customers include credit institutions, investment banks and asset managers.",
          "Former equity research and credit risk analysts founded Valuatum in 2000. We provide financial software as a service, including maintenance and continued development. Visit Valuatum.com for information about our other products.",
        ],
        links: [
          {
            label: "Valuatum.com",
            href: "https://www.valuatum.com/",
          },
        ],
      },
      {
        id: "other-solutions",
        title: "Other solutions",
        paragraphs: [
          "Valuatum also provides equity research and credit risk software. See Valuatum.com for details.",
          "Finnish customers can search for a company, order a valuation report, and review the assumptions and report through arvonmaaritys.fi.",
        ],
        links: [
          {
            label: "Valuatum home page",
            href: "https://www.valuatum.com/",
          },
          {
            label: "Finnish company valuation at arvonmaaritys.fi",
            href: "https://arvonmaaritys.fi/",
          },
        ],
      },
      {
        id: "references",
        title: "References",
        paragraphs: [
          "Valuatum has served financial-sector customers on five continents.",
          "Evli is among our historical reference customers.",
        ],
      },
      {
        id: "enlight-research-legacy-screenshot",
        title: "Enlight Research",
        image: {
          src: "/legacy-assets/legacy-enlight-research-logo.png",
          alt: "Enlight Research",
        },
      },
      {
        id: "p-rssis-ti-legacy-screenshot",
        title: "Pörssisäätiö",
        image: {
          src: "/legacy-assets/legacy-Vaaka2.png",
          alt: "Pörssisäätiö",
        },
      },
      {
        id: "company-information",
        title: "Company information",
        paragraphs: [
          "Valuatum Oy",
          "Established: 2000",
          "Headquarters: Finland",
          "Industry: Financial Software / SaaS",
          "Website: www.valuatum.com",
        ],
        links: [
          {
            label: "www.valuatum.com",
            href: "https://www.valuatum.com/",
          },
        ],
      },
      {
        id: "get-in-touch",
        title: "Get in touch",
        paragraphs: [
          "Contact us to discuss your valuation or financial software needs.",
        ],
        links: [
          {
            label: "Contact Support",
            href: "/support",
          },
        ],
      },
      {
        id: "reference-customers",
        title: "Reference customers",
        paragraphs: [
          "Historical reference customers include Evli, Enlight Research and Pörssisäätiö.",
        ],
        bullets: ["Evli", "Enlight Research", "Pörssisäätiö"],
      },
    ],
    kind: "company",
    related: ["/support"],
  },
  {
    path: "/privacy-policy",
    title: "Privacy and data handling",
    description:
      "How report enquiries and embedded videos work on this website, with separate information about account and financial data in Valuatum Estimator.",
    eyebrow: "Valuatum",
    intro:
      "This website prepares report enquiries in your email app. You review and send the message there; the form does not submit it to a website inbox. The account and financial-data information below describes the separate Valuatum Estimator service. Check the terms of the valuation service you use for its data handling details.",
    sections: [
      {
        id: "information-we-collect",
        title: "Information we collect",
        paragraphs: ["Valuatum Estimator may process the following information when you use that service:"],
        bullets: [
          "Account information: name, email address, optional phone number and company details when you register for Estimator.",
          "Financial data: statements and figures you enter for a valuation.",
          "Usage data: pages visited and features used within Estimator.",
          "Technical data: IP address, browser type, device details and service cookies.",
        ],
      },
      {
        id: "how-we-use-your-information",
        title: "How we use your information",
        paragraphs: ["In Valuatum Estimator, we use information to:"],
        bullets: [
          "Provide and maintain our valuation service",
          "Generate valuation reports based on your financial data",
          "Communicate with you about your account and our services",
          "Improve our service and develop new features",
          "Comply with legal obligations",
        ],
      },
      {
        id: "data-protection",
        title: "Data protection",
        paragraphs: [
          "For information about security measures, data processors or retention in a particular valuation service, contact Valuatum and name the service you use.",
          "We may email you about your enquiry, account or service issues.",
        ],
      },
      {
        id: "cookies",
        title: "Website cookies and embeds",
        paragraphs: [
          "This website does not run its own analytics or advertising trackers. Resource pages include YouTube videos, which connect to an external provider when the player loads or the video is played.",
        ],
      },
      {
        id: "necessary-cookies",
        title: "Cookies in the valuation tools",
        paragraphs: [
          "The valuation tools are separate services. Read the cookie and privacy information shown in the service you use.",
        ],
      },
      {
        id: "non-necessary-cookies",
        title: "Embedded YouTube videos",
        paragraphs: [
          "We use YouTube's privacy-enhanced player at youtube-nocookie.com. YouTube still provides the player, and Google's privacy policy applies to its processing. See YouTube's documentation for how privacy-enhanced mode works.",
        ],
        links: [
          {
            label: "YouTube privacy-enhanced player documentation",
            href: "https://support.google.com/youtube/answer/171780?hl=en",
          },
          {
            label: "Google privacy policy",
            href: "https://policies.google.com/privacy",
          },
        ],
      },
      {
        id: "your-rights",
        title: "Your rights",
        paragraphs: ["Contact Valuatum about requests to:"],
        bullets: [
          "Access your personal data",
          "Correct inaccurate data",
          "Request deletion of your data",
          "Object to processing of your data",
          "Request data portability",
        ],
      },
      {
        id: "contact-us",
        title: "Contact us",
        paragraphs: [
          "For a question or request about your data, email us and specify the website or valuation service you used.",
          "company-valuation@valuatum.com",
        ],
        links: [
          {
            label: "company-valuation@valuatum.com",
            href: "mailto:company-valuation@valuatum.com",
          },
        ],
      },
    ],
    kind: "company",
    related: [],
  },
  {
    path: "/security",
    title: "Security & data handling",
    description:
      "How Valuatum Tools handles data in valuation workflows, including PDF statement uploads. See privacy policy and support contact.",
    eyebrow: "Valuatum",
    intro:
      "This website provides guides, sample reports and an email enquiry form. Valuation calculations, accounts and PDF uploads take place in separate services. Read the data handling information for the service you use, or contact us with a specific question.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        links: [
          {
            label: "Privacy Policy",
            href: "/privacy-policy",
          },
          {
            label: "contact support",
            href: "/support",
          },
        ],
      },
      {
        id: "data-processed-in-valuation-workflows",
        title: "Data used in the separate valuation services",
        bullets: [
          "Account email address used for registration",
          "Manually entered financial figures (income statement, balance sheet, cash flow)",
          "PDF financial statements, if uploaded for automated analysis",
          "Valuation assumptions such as growth rates, discount rates, and peer multiples",
        ],
        paragraphs: [
          "The information used depends on the service and valuation route. Ask us about security measures and data processing for your chosen service. Resource videos on this website use YouTube's privacy-enhanced player, an external service described on the privacy page.",
        ],
        links: [
          {
            label: "Privacy Policy",
            href: "/privacy-policy",
          },
        ],
      },
      {
        id: "questions",
        title: "Questions?",
        paragraphs: [
          "Contact us at estimator@valuatum.com or visit the Support page.",
        ],
        links: [
          {
            label: "estimator@valuatum.com",
            href: "mailto:estimator@valuatum.com",
          },
          {
            label: "Support",
            href: "/support",
          },
        ],
      },
    ],
    kind: "company",
    related: ["/privacy-policy", "/support"],
  },
  {
    path: "/contact-finland",
    title: "Finnish company valuation",
    description:
      "Search for a Finnish company, order a valuation report, and review its assumptions and results at arvonmaaritys.fi.",
    eyebrow: "Valuatum",
    intro:
      "Search for a Finnish company, order a valuation report, and review its assumptions and results at arvonmaaritys.fi.",
    sections: [
      {
        id: "request-a-report",
        title: "Order a Finnish valuation report",
        paragraphs: [
          "Use the Finnish service to search for a company and order its report. You can review the assumptions and report in the service.",
        ],
        links: [
          {
            label: "Open Finnish company valuation",
            href: "https://arvonmaaritys.fi/",
          },
        ],
        bullets: [
          "Search for the Finnish company by name",
          "Order the report through the service",
          "Review the assumptions and report",
        ],
      },
    ],
    kind: "company",
    related: [],
  },
  {
    path: "/contact-international",
    title: "International company valuation enquiries",
    description:
      "Request a company valuation report for Denmark or another international market. Confirm data scope and price before generation.",
    eyebrow: "Valuatum",
    intro:
      "Request a valuation report for a Danish or international company. Share the country and target company; we will confirm available data, scope, and price before generating the report.",
    sections: [
      {
        id: "request-a-report",
        title: "Request a company report",
        paragraphs: [
          "Send your name, email address, country, target company, and optional business ID. We will confirm the available data, report scope, and price before generation.",
        ],
        links: [
          {
            label: "Request a company report",
            href: "mailto:company-valuation@valuatum.com?subject=Company%20Valuation%20Report%20Request",
          },
          {
            label: "Upload a financial statement PDF",
            href: "https://valuation.valuatum.com/",
          },
        ],
        bullets: [
          "Your name and email address",
          "Country and target company",
          "Business ID (optional)",
          "Additional information or requirements (optional)",
        ],
      },
    ],
    kind: "company",
    related: [],
  },
  {
    path: "/resources",
    title: "Resources",
    description:
      "Read company valuation guides on business value, DCF, multiples and book value, with worked examples and explanations of the assumptions.",
    eyebrow: "Valuation resources",
    intro:
      "Read about business value, the difference between value and price, and the methods used to estimate a company’s worth.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        links: [
          {
            label:
              "What is company valuation?",
            href: "/resources/company-valuation/what-is-company-valuation",
          },
        ],
      },
      {
        id: "what-is-company-valuation",
        title: "What is company valuation?",
        paragraphs: [
          "Understand what company valuation means, why it matters, and how intrinsic value differs from market price. Includes examples and a video overview.",
        ],
        links: [
          {
            label:
              "Company valuation methods",
            href: "/resources/company-valuation/methods",
          },
        ],
      },
      {
        id: "company-valuation-methods",
        title: "Company valuation methods",
        paragraphs: [
          "Compare DCF, multiples and book value, with examples and explanations of when each method can be used.",
        ],
      },
    ],
    kind: "guide",
    related: [
      "/resources/company-valuation/what-is-company-valuation",
      "/resources/company-valuation/methods",
    ],
  },
  {
    path: "/resources/company-valuation/what-is-company-valuation",
    title: "What is company valuation?",
    description:
      "Learn what company valuation is, how to estimate business value using methods like DCF and multiples, and how to generate a valuation report from financial data.",
    eyebrow: "Valuation resources",
    intro:
      "Company valuation estimates what a business is worth using financial data, forecasts and methods such as discounted cash flow (DCF) and valuation multiples. Buyers, sellers and investors use it to assess an opportunity and prepare for negotiations.",
    sections: [
      {
        id: "key-takeaways",
        title: "Key takeaways",
        bullets: [
          "Company valuation estimates what a business is worth based on its financials and future prospects.",
          "Compare DCF, multiples and book value where they fit the company and available data.",
          "Value depends on the assumptions used; price is the amount paid in a transaction.",
          "Use a valuation to prepare for buying, selling, raising capital or planning an ownership change.",
        ],
        paragraphs: [
          "A valuation estimates business value for a sale, investment or planning decision. It documents the financial data and assumptions behind that estimate.",
          "Different investors may value the same company differently. One might estimate a technology company at €5 million from its cash flows, while another estimates €8 million because it could combine the business with an existing portfolio.",
          "Price is the amount paid in a transaction. Value is an estimate based on the business and the assumptions of a particular buyer or seller. Negotiation, timing and strategic fit can make the final price differ from the valuation.",
          "The video below explains business valuation. To work with your own figures, register for the manual input tool.",
        ],
        links: [
          {
            label: "register for free",
            href: "https://estimator.valuatum.com/AspAndUserCreation.action?templateAspQueryKey=PPVTemplate&userType=&popup=true",
          },
          {
            label: "How to Value a Company - Business Valuation Explained",
            href: "https://www.youtube.com/watch?v=3_R14_eFCOg",
          },
        ],
        video: {
          id: "3_R14_eFCOg",
          title: "How to value a company - business valuation explained",
        },
      },
      {
        id: "why-is-accurate-company-valuation-important",
        title: "Why is accurate company valuation important?",
        paragraphs: [
          "You may need a company valuation when:",
          "A valuation tool calculates the results while letting you adjust assumptions to reflect what you know about the business.",
        ],
        bullets: [
          "Buying or selling a business: assess offers and explain your proposed price",
          "Raising investment capital: explain your valuation to investors",
          "Strategic planning: track how business decisions affect estimated value",
          "Ownership transitions: estimate share value for buyouts, succession or divorce proceedings",
          "Financing: document your valuation for lenders and creditors",
        ],
      },
      {
        id: "selecting-the-right-valuation-approach",
        title: "Selecting the right valuation approach",
        diagram: "selection",
        paragraphs: [
          "Choose methods that fit the company’s profitability and available data. The diagram below shows the methods used for companies with positive or negative earnings and EBITDA. Comparing methods can help you assess a valuation range.",
        ],
        bullets: [
          "Positive net earnings: ROE-% vs. P/BV, P/E and EV/EBITDA multiples, and discounted cash flow.",
          "Negative net earnings with positive EBITDA: ROE-% vs. P/BV, valuation multiples, EBIT-% vs. P/Sales, and DCF when positive.",
          "Negative net earnings and EBITDA: EBIT-% vs. P/Sales and book value of equity, with DCF included when positive.",
        ],
      },
      {
        id: "company-valuation-methods",
        title: "Company valuation methods",
        paragraphs: [
          "The valuation tools use the following methods where the financial data supports them:",
          "To learn more about these methods and how they are applied in our company valuation software, visit our Company Valuation Methods page.",
        ],
        bullets: [
          "Discounted cash flow (DCF): discounts expected future cash flows to present value",
          "Valuation multiples (P/E, EV/EBITDA): compare the company with publicly traded peers",
          "Book value of equity: use the accounting value of net assets as a reference",
          "ROE vs. P/BV: compare return on equity with price-to-book ratios",
          "EBIT-% vs. P/Sales: compare revenue and operating margins for loss-making companies",
        ],
        links: [
          {
            label: "Company Valuation Methods",
            href: "/resources/company-valuation/methods",
          },
        ],
      },
      {
        id: "get-started-with-company-valuation",
        title: "Get started with company valuation",
        paragraphs: [
          "Enter your financial figures manually or upload a PDF statement to start a valuation.",
        ],
        links: [
          {
            label: "Try Free Valuation Tool",
            href: "/solutions/manual-data-input-company-valuation",
          },
          {
            label: "PDF-Based Valuation",
            href: "/solutions/pdf-based-company-valuation",
          },
        ],
      },
      {
        id: "what-does-company-valuation-mean",
        title: "What does company valuation mean?",
        paragraphs: [
          "Company valuation is the process of estimating the economic worth of a business using financial data, forecasts, and established methods such as DCF and multiples.",
        ],
      },
      {
        id: "why-is-company-valuation-important",
        title: "Why is company valuation important?",
        paragraphs: [
          "It helps buyers, sellers, investors, and business owners make informed decisions about transactions, fundraising, and strategic planning.",
        ],
      },
      {
        id: "what-is-the-difference-between-value-and-price",
        title: "What is the difference between value and price?",
        paragraphs: [
          "Value estimates what a business is worth based on financial data and assumptions. Price is the amount paid in a transaction and may differ because of negotiation, timing or strategic factors.",
        ],
      },
      {
        id: "how-do-i-calculate-company-value",
        title: "How do I calculate company value?",
        paragraphs: [
          "You can use a company valuation tool that applies methods like DCF, multiples, and comparable analysis to your financial data. The tool generates forecasts and a valuation range.",
        ],
      },
      {
        id: "can-i-value-a-company-for-free",
        title: "Can I value a company for free?",
        paragraphs: [
          "The manual data input service has a free option. PDF-based valuation has free and paid access options. Check the selected service for current limits and prices.",
        ],
      },
    ],
    kind: "guide",
    related: [
      "/resources/company-valuation/methods",
      "/solutions/manual-data-input-company-valuation",
      "/solutions/pdf-based-company-valuation",
    ],
  },
  {
    path: "/resources/company-valuation/methods",
    title: "Company valuation methods",
    description:
      "Detailed guide to company valuation methods including DCF, EBITDA multiples, comparable analysis, and book value. Learn when to use each method and how they are combined.",
    eyebrow: "Valuation resources",
    intro:
      "DCF estimates value from future cash flows. Multiples compare a company with market benchmarks, while asset-based methods examine its assets and liabilities. The combination you use depends on profitability, industry and the available data.",
    sections: [
      {
        id: "understanding",
        title: "Understanding business valuation approaches",
        diagram: "methods",
        paragraphs: [
          "Businesses need different valuation approaches. An established manufacturer with predictable cash flows may suit DCF, while a technology startup with negative earnings may need revenue-based comparisons and a closer review of its forecasts.",
          "Comparing methods helps you check the results and identify assumptions that need more review. How much weight you give each method depends on profitability, industry, available data and the purpose of the valuation.",
          "The valuation tool automatically selects and weights appropriate methods based on the company's financial state, using historical data and automatically generated forecasts. Users can review these assumptions and adjust them based on their specific knowledge of the business.",
        ],
        bullets: [
          "Based on history: book value of equity, EBIT-% vs. P/Sales, ROE-% vs. P/BV, and other multiples methods.",
          "Based on future estimates: discounted cash flow, using automatically generated forecasts.",
        ],
      },
      {
        id: "income-based-valuation-models",
        title: "Income-based valuation models",
        paragraphs: [
          "Income-based methods estimate value from the earnings or cash flows a business is expected to generate.",
        ],
      },
      {
        id: "dcf",
        title: "Discounted cash flow (DCF)",
        paragraphs: [
          "DCF estimates a company’s value by forecasting future free cash flows and discounting them to present value. The discount rate reflects the required return on capital.",
        ],
      },
      {
        id: "when-dcf-works-best",
        title: "When DCF works best",
        paragraphs: [
          "DCF is easier to apply when a business has predictable cash flows and stable operations, for example utilities or businesses with long-term contracts. The result still depends on the forecasts and discount rate.",
        ],
      },
      {
        id: "key-assumptions",
        title: "Key assumptions",
        paragraphs: [
          "Review the forecast inputs before using a DCF result. The manual input tool uses the following default assumptions, which users can adjust:",
          "The weighted average cost of capital (WACC) discounts future cash flows. The model estimates the required return on equity using the Capital Asset Pricing Model (CAPM) and includes the company’s borrowing costs in the cost of debt.",
          "Example:",
          "If next year’s free cash flow is €1 million, perpetual growth is 3% and WACC is 10%, the simplified perpetuity value is €1M ÷ (10% - 3%) = approximately €14.3 million. This illustration assumes constant growth and a constant discount rate.",
        ],
        bullets: [
          "Revenue growth settles to GDP growth rate (approximately 3%) in the long term",
          "Operating margins (EBIT %) remain at the weighted average of the past four years",
        ],
      },
      {
        id: "limitations",
        title: "Limitations",
        paragraphs: [
          "DCF valuations are highly sensitive to assumptions about growth rates, margins, and discount rates. Small changes in these inputs can lead to significantly different valuations. The method is less suitable for early-stage companies, turnaround situations, or businesses with highly volatile cash flows.",
        ],
      },
      {
        id: "market-based-valuation-methods",
        title: "Market-based valuation methods",
        paragraphs: [
          "Market-based approaches derive value by comparing a company to similar businesses that have been valued by the market. These methods are grounded in the principle that similar assets should trade at similar prices.",
        ],
      },
      {
        id: "multiples",
        title: "Multiples valuation",
        paragraphs: [
          "In multiples valuation, a company's value is estimated by comparing it to publicly traded peers in the same industry. A key financial metric—such as earnings, EBITDA, or revenue—is multiplied by the average ratio at which comparable companies trade.",
        ],
      },
      {
        id: "how-it-works",
        title: "How it works",
        paragraphs: [
          "Reference companies are typically publicly traded firms with available market prices. The target company's financial figure is multiplied by the average multiple from the peer group, and a private company discount may be applied to account for reduced liquidity.",
          "Example:",
          "Companies A and B operate in the same industry. Company A is publicly traded with a net profit of €10 and a market value of €200, giving it a P/E ratio of 20. Company B, a private firm, has a net profit of €5. If both companies are similar, the estimated value of B would be 20 × €5 = €100.",
        ],
      },
      {
        id: "when-multiples-work-best",
        title: "When multiples work best",
        paragraphs: [
          "Multiples are useful when there are comparable public companies and the target’s financial figures can be compared with theirs. They are often used as benchmarks in acquisition discussions.",
        ],
      },
      {
        id: "common-multiples",
        title: "Common multiples",
        bullets: [
          "P/E (price-to-earnings): compares market value with net income for profitable companies",
          "EV/EBITDA: compares enterprise value with operating earnings before depreciation and amortisation",
        ],
      },
      {
        id: "limitations-2",
        title: "Limitations",
        paragraphs: [
          "Multiples do not account for company-specific factors such as unique growth prospects, management quality, or competitive advantages. They reflect only the average market valuation of an industry at a given time.",
        ],
      },
      {
        id: "roe-pbv",
        title: "ROE vs. P/BV",
        paragraphs: [
          "This method establishes a statistical relationship between a company's return on equity (ROE) and its price-to-book ratio (P/BV). Companies generating higher returns on their equity capital typically command higher market valuations relative to their book value.",
        ],
      },
      {
        id: "when-this-method-works-best",
        title: "When this method works best",
        paragraphs: [
          "The ROE vs. P/BV approach is effective for companies with stable and predictable returns on equity, particularly in industries where book value is a meaningful measure of invested capital, such as financial services and manufacturing.",
        ],
      },
      {
        id: "how-it-is-applied",
        title: "How it is applied",
        paragraphs: [
          "If the difference between the current year's and last year's ROE is within 10 percentage points, a weighted average is used. Otherwise, the current year's ROE is applied. The relationship between ROE and P/BV is then estimated statistically from empirical market data.",
          "Example:",
          "A company has €500,000 in book value and generates a 15% return on equity. Statistical analysis of comparable companies shows that firms with 15% ROE typically trade at 1.8× book value. The estimated company value would be €500,000 × 1.8 = €900,000.",
        ],
      },
      {
        id: "limitations-3",
        title: "Limitations",
        paragraphs: [
          "This method is less reliable for companies with highly volatile profitability or those undergoing significant operational changes that affect ROE.",
        ],
      },
      {
        id: "ebit-psales",
        title: "EBIT-% vs. P/Sales",
        paragraphs: [
          "For companies that are not currently profitable, traditional earnings-based multiples cannot be applied. This method uses the statistical relationship between operating margin (EBIT-%) and price-to-sales ratio among publicly traded companies.",
        ],
      },
      {
        id: "when-this-method-works-best-2",
        title: "When this method works best",
        paragraphs: [
          "This approach is specifically designed for unprofitable companies that have revenue but negative earnings. It is commonly applied to growth-stage companies, startups, or businesses undergoing restructuring.",
        ],
      },
      {
        id: "key-assumption",
        title: "Key assumption",
        paragraphs: [
          "The method assumes that the company will eventually achieve the average operating margin of its industry. The current price-to-sales ratio reflects the market's expectation of future profitability.",
          "Example:",
          "A startup has €2 million in revenue but is currently unprofitable with a -5% EBIT margin. Statistical analysis shows that companies in its industry with similar margin profiles trade at 0.8× revenue. The estimated value would be €2M × 0.8 = €1.6 million, reflecting the market's expectation of future profitability.",
        ],
      },
      {
        id: "limitations-4",
        title: "Limitations",
        paragraphs: [
          "This method is only applicable to loss-making companies and relies heavily on the assumption that profitability will eventually be achieved.",
        ],
      },
      {
        id: "book-value",
        title: "Asset-based valuation",
        paragraphs: [
          "Asset-based methods value a company based on the worth of its underlying assets rather than its earnings potential. These approaches are most relevant when a company's assets have significant standalone value.",
        ],
      },
      {
        id: "book-value-of-equity",
        title: "Book value of equity",
        paragraphs: [
          "Book value of equity is an accounting reference: the carrying value of assets minus the carrying value of liabilities. It reflects items such as share capital, retained earnings, and reserves. It does not measure the proceeds shareholders would receive from selling the assets or liquidating the company.",
        ],
      },
      {
        id: "when-book-value-works-best",
        title: "When book value works best",
        paragraphs: [
          "Book value can provide an accounting reference for asset-intensive businesses, holding companies, and financial institutions. It is not a guaranteed minimum company value. An asset-sale or liquidation analysis must separately assess realizable asset values, the liabilities to settle, and disposal costs.",
          "Example:",
          "A real estate holding company records €10 million in assets and €6 million in liabilities. Its book value of equity is €10M - €6M = €4 million. Actual sale proceeds for shareholders could differ because property sale prices, liabilities, and disposal costs may differ from those accounting amounts.",
        ],
      },
      {
        id: "limitations-5",
        title: "Limitations",
        paragraphs: [
          "For most operating businesses, book value is not a meaningful indicator of market value. Companies with strong earnings, competitive advantages, or growth potential are typically worth far more than their book value. Conversely, distressed companies may have book values that overstate their actual worth due to impaired assets.",
        ],
      },
      {
        id: "selecting",
        title: "Selecting the right valuation approach",
        diagram: "selection",
        paragraphs: [
          "The appropriate combination of valuation methods depends on a company's financial situation. Three key financial indicators—net income, EBITDA, and DCF valuation—determine which methods are applicable.",
        ],
        bullets: [
          "Positive net earnings: ROE-% vs. P/BV, P/E and EV/EBITDA multiples, and discounted cash flow.",
          "Negative net earnings with positive EBITDA: ROE-% vs. P/BV, valuation multiples, EBIT-% vs. P/Sales, and DCF when positive.",
          "Negative net earnings and EBITDA: EBIT-% vs. P/Sales and book value of equity, with DCF included when positive.",
        ],
      },
      {
        id: "profitable-companies-green-path",
        title: "Profitable companies (green path)",
        paragraphs: [
          "When a company has positive net income, all major valuation methods are available. In practice, a common approach is to combine four methods: ROE vs. P/BV, Discounted Cash Flow, EV/EBITDA multiples, and P/E multiples. These methods are weighted to produce a final valuation.",
          "Compare the results from these methods and investigate differences before choosing the final weights.",
        ],
      },
      {
        id: "negative-earnings-positive-operating-profit-yellow-path",
        title: "Negative earnings, positive EBITDA (yellow path)",
        paragraphs: [
          "When net income is negative but EBITDA remains positive, valuation options become more limited. The P/E multiple cannot be used (as it would produce a negative value), but EV/EBITDA remains applicable because EBITDA is positive.",
          "If DCF valuation also produces a negative result, it is excluded from the final calculation, and the valuation relies primarily on EV/EBITDA.",
        ],
      },
      {
        id: "deeply-unprofitable-companies-purple-path",
        title: "Deeply unprofitable companies (purple path)",
        paragraphs: [
          "When both net income and EBITDA are negative, valuation options are highly constrained. Only two methods remain applicable: book value of equity and EBIT-% vs. P/Sales.",
          "If DCF produces a positive value despite current losses (reflecting expected future profitability), it can be included in the final valuation.",
        ],
      },
      {
        id: "the-challenge-of-valuing-loss-making-companies",
        title: "The challenge of valuing loss-making companies",
        paragraphs: [
          "Loss-making company valuations depend heavily on forecasts of recovery and future profitability. Review those assumptions closely; a change in the expected recovery can have a large effect on value.",
        ],
      },
      {
        id: "applying",
        title: "Applying multiple valuation methods",
        paragraphs: [
          "The manual input tool selects methods from the company’s financial profile, calculates a value for each applicable method, and combines the results using built-in weights.",
          "In the tool, users can review and adjust revenue growth, operating margins, discount rates and other assumptions. Compare scenarios to see which inputs have the greatest effect on value.",
        ],
      },
      {
        id: "faq-methods",
        title: "What is the best valuation method?",
        paragraphs: [
          "The choice depends on the company and available data. DCF uses expected cash flows, multiples use market comparisons, and asset-based approaches assess the assets and liabilities. Compare applicable methods before choosing the weights.",
        ],
      },
      {
        id: "when-should-i-use-dcf-valuation",
        title: "When should I use DCF valuation?",
        paragraphs: [
          "DCF works best for established companies with predictable cash flows. It is less suitable for early-stage companies or businesses with highly volatile earnings.",
        ],
      },
      {
        id: "what-are-valuation-multiples",
        title: "What are valuation multiples?",
        paragraphs: [
          "Multiples compare a company's financial metrics (such as earnings or EBITDA) to the market values of similar public companies, providing a relative benchmark.",
        ],
      },
      {
        id: "how-does-the-tool-select-which-methods-to-apply",
        title: "How does the tool select which methods to apply?",
        paragraphs: [
          "The manual input tool selects methods from the company's financial profile, including whether earnings and EBITDA are positive or negative.",
        ],
      },
      {
        id: "can-i-adjust-the-valuation-weights",
        title: "Can I adjust the valuation weights?",
        paragraphs: [
          "Yes. The tool applies built-in weighting logic by default, but users can review and adjust assumptions, forecasts, and method parameters.",
        ],
      },
    ],
    kind: "guide",
    related: [],
  },
  {
    path: "/solutions/manual-data-input-company-valuation",
    title: "Manual data input company valuation",
    description:
      "Enter financial figures manually to estimate business value. Review assumptions, run scenarios, and export a valuation report.",
    eyebrow: "Solutions",
    intro:
      "Enter financial figures in Valuatum Estimator to build a valuation, review the forecasts and create a report. Use this route if you already have the company’s financial data.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        links: [
          {
            label: "what company valuation means",
            href: "/resources/company-valuation/what-is-company-valuation",
          },
          {
            label: "valuation methods",
            href: "/resources/company-valuation/methods",
          },
          {
            label: "upload a PDF financial statement",
            href: "/solutions/pdf-based-company-valuation",
          },
          {
            label: "Register Free",
            href: "https://estimator.valuatum.com/AspAndUserCreation.action?templateAspQueryKey=PPVTemplate&userType=&popup=true",
          },
        ],
        paragraphs: [
          "In Valuatum Estimator, you can edit forecasts for sales, EBIT and investments, compare valuation methods including DCF, and create a report. You can also use the PDF service to extract figures from a financial statement.",
          "Valuatum Estimator includes:",
        ],
        bullets: [
          "Automatic company valuation using multiple methods including DCF, P/E, and EV/EBITDA",
          "Easy-to-use tools for analyzing and creating your own valuation scenarios",
          "Valuation reports with financial data and method explanations",
          "Industry comparisons using available peer data; earlier service documentation described up to 200,000 peer companies",
        ],
      },
      {
        id: "test-our-company-valuation-tool",
        title: "Test our company valuation tool",
        paragraphs: [
          "Open the demo to explore the tool, or view a report example.",
        ],
      },
      {
        id: "demo-environment",
        title: "Demo environment",
        links: [
          {
            label: "Open Demo",
            href: "https://estimator-demo.valuatum.com",
          },
        ],
        image: {
          src: "/legacy-assets/legacy-manual-input-demo-environment.png",
          alt: "Company valuation calculator demo environment (earlier interface)",
        },
        paragraphs: [
          "Use the demo to see the data entry, forecasts and valuation results.",
        ],
      },
      {
        id: "sample-report-pdf",
        title: "Sample report (PDF)",
        links: [
          {
            label: "Legacy example: View Sample Report",
            href: "https://www.valuatum.com/wp-content/uploads/sites/10/2025/11/DemoCompanyValuationReport.pdf",
          },
        ],
        image: {
          src: "/legacy-assets/legacy-manual-input-sample-report.png",
          alt: "Sample company valuation report (earlier interface)",
        },
        paragraphs: [
          "This screenshot shows the earlier report format. For current examples, visit the sample reports page.",
          "Download a sample company valuation report to see the structure, contents, and level of detail.",
        ],
      },
      {
        id: "estimator-premium",
        title: "Valuatum Estimator Premium",
        paragraphs: [
          "The basic Estimator has a free option. Estimator Premium adds company branding and lets you choose the report’s tables, figures and graphs. You can also create user accounts for colleagues or customers.",
          "Custom report templates are available for a one-time fee.",
          "Historical Premium pricing started at 50 EUR per month with an annual subscription. Contact us for current pricing.",
          "Ask about Premium at contact@valuatum.com.",
        ],
        links: [
          {
            label: "contact@valuatum.com",
            href: "mailto:contact@valuatum.com",
          },
        ],
      },
      {
        id: "premium-features-include",
        title: "Premium features include",
        bullets: [
          "Custom branding: add your company logo to valuation reports",
          "Report layout: choose which tables, figures and graphs appear",
          "User accounts: create credentials for colleagues or clients",
          "Client access: give your customers access to the valuation software",
          "Custom report templates: available for a one-time fee",
          "Priority support: ask us about the support included in your plan",
        ],
      },
      {
        id: "ready-to-upgrade",
        title: "Ready to upgrade?",
        paragraphs: [
          "Contact us to learn more about premium features for your business valuation needs.",
        ],
        links: [
          {
            label: "Contact Us",
            href: "/support",
          },
        ],
      },
      {
        id: "more-resources",
        title: "More resources",
        bullets: [
          "Key Features",
          "User Manual",
          "Company Valuation Methods",
          "Common Questions (FAQ)",
        ],
        links: [
          {
            label: "Key Features",
            href: "/solutions/manual-data-input-company-valuation/key-features",
          },
          {
            label: "User Manual",
            href: "/solutions/manual-data-input-company-valuation/user-manual",
          },
          {
            label: "Company Valuation Methods",
            href: "/resources/company-valuation/methods",
          },
          {
            label: "Common Questions (FAQ)",
            href: "/support/faq",
          },
        ],
      },
      {
        id: "premium-price-reference",
        title: "Premium subscription reference",
        paragraphs: [
          "Historical Estimator Premium prices are listed below. Confirm current plans with Valuatum before ordering.",
        ],
        links: [
          {
            label: "Ask about Premium plans",
            href: "mailto:contact@valuatum.com",
          },
        ],
        bullets: [
          "Monthly subscription: 100 EUR per month.",
          "Three-month subscription: 240 EUR total, equivalent to 80 EUR per month.",
          "Annual subscription: 600 EUR total, equivalent to 50 EUR per month.",
        ],
      },
      {
        id: "existing-service-links",
        title: "Open the manual input service",
        links: [
          {
            label: "Register for manual input valuation",
            href: "https://estimator.valuatum.com/AspAndUserCreation.action?templateAspQueryKey=PPVTemplate&userType=&popup=true",
          },
          {
            label: "Sign in to Valuatum Estimator",
            href: "https://estimator.valuatum.com/",
          },
          {
            label: "Open the demo environment",
            href: "https://estimator-demo.valuatum.com",
          },
        ],
      },
    ],
    kind: "solution",
    related: [
      "/resources/company-valuation/what-is-company-valuation",
      "/resources/company-valuation/methods",
      "/solutions/pdf-based-company-valuation",
      "/support",
      "/solutions/manual-data-input-company-valuation/key-features",
      "/solutions/manual-data-input-company-valuation/user-manual",
    ],
  },
  {
    path: "/solutions/manual-data-input-company-valuation/key-features",
    title: "Key features",
    description:
      "Explore key features like editable assumptions, scenarios, peer comparisons, and valuation report export.",
    eyebrow: "Solutions",
    intro:
      "Valuatum Estimator lets you enter company financials, generate forecasts, compare valuation methods and create reports. Watch the preview video below to see the interface.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        bullets: [
          "Create automatic valuation reports and estimates",
          "Peer comparisons; earlier service documentation described up to 200,000 companies",
          "Create and modify your own scenarios with easy-to-use tools",
          "Compare results from several valuation methods",
        ],
        links: [
          {
            label: "Valuatum Estimator Key Features",
            href: "https://www.youtube.com/watch?v=RCqo-1ph-Gs",
          },
          {
            label: "Register for manual input valuation",
            href: "https://estimator.valuatum.com/AspAndUserCreation.action?templateAspQueryKey=PPVTemplate&userType=&popup=true",
          },
        ],
        video: {
          id: "RCqo-1ph-Gs",
          title: "Valuatum Estimator key features",
        },
      },
      {
        id: "how-does-the-system-work",
        title: "How does the system work?",
        paragraphs: [
          "The business valuation and analysis system is designed for professional organizations and individual users. Enter financial figures, generate estimates, review assumptions, and create a report.",
          "The tool combines historical figures, industry data and forecasts. It selects methods and weights based on the company’s financial position and explains them in the report. Read the valuation methods guide for details.",
        ],
        bullets: [
          "Enter your company's financials through our online data form and save to Valuatum database",
          "Valuatum system creates a valuation estimate using several multiples valuation methods.",
          "View financial statements and key figures, generate forecasts, adjust them, and create a valuation report.",
        ],
        image: {
          src: "/legacy-assets/legacy-ProductFeatures_kuuva-1024x519.png",
          alt: "Business valuation tool workflow (earlier interface)",
        },
        links: [
          {
            label: "valuation methods",
            href: "/resources/company-valuation/methods",
          },
        ],
      },
      {
        id: "related-pages",
        title: "Related pages",
        bullets: [
          "Back to manual input valuation",
          "User Manual",
          "What is company valuation?",
          "Support FAQ",
        ],
        links: [
          {
            label: "Back to manual input valuation",
            href: "/solutions/manual-data-input-company-valuation",
          },
          {
            label: "User Manual",
            href: "/solutions/manual-data-input-company-valuation/user-manual",
          },
          {
            label: "What is company valuation?",
            href: "/resources/company-valuation/what-is-company-valuation",
          },
          {
            label: "Support FAQ",
            href: "/support/faq",
          },
        ],
      },
    ],
    kind: "solution",
    related: [
      "/resources/company-valuation/methods",
      "/solutions/manual-data-input-company-valuation",
      "/solutions/manual-data-input-company-valuation/user-manual",
      "/resources/company-valuation/what-is-company-valuation",
      "/support/faq",
    ],
  },
  {
    path: "/solutions/manual-data-input-company-valuation/user-manual",
    title: "User manual",
    description:
      "Step-by-step instructions for entering data, editing assumptions, and creating valuation reports in Valuatum Tools.",
    eyebrow: "Valuatum Estimator guide",
    intro:
      "Use this guide to enter data, generate and adjust forecasts, create reports, and review formulas in Valuatum Estimator. The screenshots show an earlier interface. Contact support during European business hours if your service looks different.",
    sections: [
      {
        id: "notice-that-the-data-can-be-entered-in-one-minute",
        title: "Start with summary figures",
        paragraphs: [
          "You can start with summary financial figures and add detail later. Review the results before using the report.",
          'See more in "Entering your own data" section.',
        ],
      },
      {
        id: "log-into-the-system",
        title: "Log into the system",
        paragraphs: [
          "Enter your username and password to sign in. If you have forgotten either, click 'I forgot my password' and follow the instructions.",
        ],
        image: {
          src: "/legacy-assets/legacy-kirjautuminen.png",
          alt: "Valuatum Estimator login screen (earlier interface)",
        },
      },
      {
        id: "personal-info",
        title: "Personal Info",
        paragraphs: [
          "Open 'Personal Info' to edit your account details. Keep your email address up to date so you can receive password reset instructions. A red asterisk marks required fields; phone number and address are optional. Read the service's privacy information for data handling details. We may email you about service issues.",
        ],
        image: {
          src: "/legacy-assets/legacy-basic-information.png",
          alt: "Personal information form in Valuatum Estimator (earlier interface)",
        },
      },
      {
        id: "changing-the-password",
        title: "Changing the password",
        paragraphs: [
          "Open 'Password' under 'Personal Info'. Enter your old password and the new password twice, then click update. Follow the password requirements shown in your service. If you have forgotten your password, click 'I forgot my password' on the login page.",
        ],
        image: {
          src: "/legacy-assets/legacy-password.png",
          alt: "Password change form in Valuatum Estimator (earlier interface)",
        },
      },
      {
        id: "entering-your-own-data",
        title: "Entering your own data",
        image: {
          src: "/legacy-assets/legacy-estimator_data_entry.png",
          alt: "Financial data entry form with income statement and balance sheet fields (earlier interface)",
        },
        paragraphs: [
          "Enter your financial figures on 'Data entry'. Instructions appear at the top of the page. Red cells contain invalid inputs that must be corrected before saving. Pink cells have an unexpected sign, such as negative net sales; the model can still be saved. Hover over a pink cell to read the warning. Check the figures before continuing.",
        ],
      },
      {
        id: "summary",
        title: "Summary",
        bullets: [
          "Fill in the company information.",
          "Fill in the latest fiscal year in column Y-1. Other columns can be empty.",
          "Make sure that the fiscal year dates do not overlap.",
          "Make sure that total assets are equal to total equity + liabilities.",
          "Save the model by pressing Save. This saves your financial figures into database; you can view them in the 'Company Views' page.",
        ],
      },
      {
        id: "the-data-can-be-entered-in-one-minute",
        title: "Add financial detail",
        paragraphs: [
          "For an initial estimate, you can enter a summary amount in one of its subitems. For example, enter total intangible assets under Other capitalised long-term expenditures. Review the results and add the full financial information when it is available.",
          "If you want the report to be even more accurate, you can always return to the 'Data entry' page and complete the rest of the financial information.",
        ],
        image: {
          src: "/legacy-assets/legacy-Screenshot-Estimaattorin-tutoriaaliin.jpg",
          alt: "Example of entering summary figures for a quick valuation (earlier interface)",
        },
      },
      {
        id: "company-views",
        title: "Company Views",
        paragraphs: [
          "Open 'Company Views' to see your financial figures and calculated ratios. You can also generate forecasts and valuation reports from this page.",
        ],
      },
      {
        id: "generate-estimates",
        title: "Generate estimates",
        image: {
          src: "/legacy-assets/legacy-CV-overview.png",
          alt: "Company Views page showing financial data, estimates, and report generation (earlier interface)",
        },
        paragraphs: [
          "Generate forecasts before creating the valuation report. The tool uses the figures on 'Data entry' and predefined rules to estimate future years. Forecast years have an 'e' next to them. The date below the year shows the fiscal year end: 2014/12 means December 2014. Use the arrows to move through the table.",
        ],
      },
      {
        id: "changing-the-estimates",
        title: "Changing the estimates",
        paragraphs: [
          "After generating the estimates, you can make changes to them by clicking 'Change estimates'. All the numbers displayed in blue font can be changed. Click the number, insert the new value and click the update button or press Enter. Some numbers are shown in black – these cannot be changed directly, as they are calculated from other values (e.g. net earnings, balance sheet total).",
          "It is possible to change the value of single income statement or balance sheet items, but using estimate parameters is usually much more efficient. Estimate parameters are in the section 'Estimate Parameters' on this page. Changing estimates is optional. Review the automatic forecasts to decide whether they fit the company before using the valuation.",
        ],
        image: {
          src: "/legacy-assets/legacy-change-estimates_1.png",
          alt: "Editing forecast estimates with editable blue-highlighted cells (earlier interface)",
        },
      },
      {
        id: "generate-valuation-report",
        title: "Generate valuation report",
        paragraphs: [
          "This screenshot shows the earlier report format. For current examples, visit the sample reports page.",
          "After generating forecasts, click 'Generate Valuation Report' to create a PDF using the historical financial data and estimates.",
        ],
        image: {
          src: "/legacy-assets/legacy-geenrate-valuation-report.png",
          alt: "Generate Valuation Report button in Valuatum Estimator (earlier interface)",
        },
      },
      {
        id: "formula-window",
        title: "Formula Window",
        paragraphs: [
          "The Company Views page displays many financial ratios and key figures that can be calculated in more than one way. In the Valuatum system, you can access the formulas easily: click the name of a variable to open a new window. In this window, the calculations are presented in detail. The name of the variable is in the top left corner.",
        ],
        image: {
          src: "/legacy-assets/legacy-formulas-for-variable.png",
          alt: "Formula detail window showing how a financial variable is calculated (earlier interface)",
        },
      },
      {
        id: "formulas-used-in-variables",
        title: "Formulas used in variables",
        paragraphs: [
          "Most of the variables are calculated using only basic arithmetic operators (+, -, /, *, ^). However, some variables require more complicated calculations. The table below explains the various functions used in the more complicated formulas.",
        ],
        bullets: [
          "Function: action",
          "abs(x): gives the absolute value of x",
          "ceil(x): rounds the number up to the closest integer",
          "exp(x), e^x: calculates e to the power of x",
          "floor(x): rounds the number down to the closest integer",
          "if(c,x,y): if c is true, returns x, otherwise returns y",
          "log(x), ln(x): calculates the natural logarithm of the number",
          "max(x,y): returns whichever of x and y is larger",
          "min(x,y): returns whichever of x and y is smaller",
          "round(x): rounds x to the closest integer using conventional rounding rules",
          "sqrt(x): calculates the square root of x",
        ],
      },
      {
        id: "estimate-parameters",
        title: "Estimate parameters",
        paragraphs: [
          "Single row items in the balance sheet and income statement can be changed directly, but often the easier way is to use the estimate parameters that can be found in the 'Financial Statements' tab below the income statement and balance sheet. Parameter values can be changed using the process outlined in section 'Company Views' under the headline 'Changing the Estimates'.",
        ],
        image: {
          src: "/legacy-assets/legacy-estimate-parameters.png",
          alt: "Estimate parameters table with growth, EBIT, depreciation, and tax rate fields (earlier interface)",
        },
      },
      {
        id: "income-statement-estimate-parameters",
        title: "Income statement estimate parameters",
        paragraphs: [
          "There are four estimate parameters that directly affect the income statement: net sales growth, EBIT %, Depreciation % and Tax rate %.",
        ],
        bullets: [
          "Net sales growth calculates net sales from the previous year's value.",
          "EBIT % is calculated as EBIT / net sales.",
          "Depreciation % has an effect on both balance sheet and income statement.",
          "Tax rate % affects paid income taxes.",
        ],
      },
      {
        id: "valuation-method-used-by-valuatum",
        title: "Valuation method used by valuatum",
        image: {
          src: "/legacy-assets/legacy-valuaatiopolku_valuatum_en1.png",
          alt: "Valuation method selection flow diagram showing paths for profitable and unprofitable companies (earlier interface)",
        },
        paragraphs: [
          "The picture above is a representation of the valuation paths used in the Valuatum system. Depending on the current and estimated financial situation of a company, different valuation methods are used.",
          "More information on the individual methods can be found on the valuation methods page. For a broader introduction, see what company valuation is.",
        ],
        links: [
          {
            label: "valuation methods",
            href: "/resources/company-valuation/methods",
          },
          {
            label: "what company valuation is",
            href: "/resources/company-valuation/what-is-company-valuation",
          },
        ],
      },
      {
        id: "balancing-assets-and-equity-liabilities",
        title: "Balancing assets and equity/liabilities",
        paragraphs: [
          "A company's balance sheet assets must always be equal to the sum of equity and liabilities. When balance sheet estimates are changed, there is a temporary difference between the two sides; however, the Valuatum system evens them out automatically.",
        ],
      },
      {
        id: "assets-liabilities",
        title: "Assets > liabilities",
        paragraphs: [
          "In case there are more assets on the balance sheet than there are equity and liabilities, the system generates additional liabilities to balance the sides of the balance sheet. The difference is added to current and non-current loans from credit institutions.",
        ],
      },
      {
        id: "equity-and-liabilities-assets",
        title: "Equity and liabilities > assets",
        paragraphs: [
          "When equity and liabilities exceed assets, the system adds the difference to 'Cash (generated)'.",
        ],
      },
      {
        id: "related-pages",
        title: "Related pages",
        bullets: [
          "Manual input valuation tool",
          "Key Features",
          "Support",
          "FAQ",
        ],
        links: [
          {
            label: "Manual input valuation tool",
            href: "/solutions/manual-data-input-company-valuation",
          },
          {
            label: "Key Features",
            href: "/solutions/manual-data-input-company-valuation/key-features",
          },
          {
            label: "Support",
            href: "/support",
          },
          {
            label: "FAQ",
            href: "/support/faq",
          },
        ],
      },
    ],
    kind: "solution",
    related: [
      "/resources/company-valuation/methods",
      "/resources/company-valuation/what-is-company-valuation",
      "/solutions/manual-data-input-company-valuation",
      "/solutions/manual-data-input-company-valuation/key-features",
      "/support",
      "/support/faq",
    ],
  },
  {
    path: "/solutions/pdf-based-company-valuation",
    title: "PDF-based company valuation",
    description:
      "Upload a PDF financial statement to extract key figures and estimate company value. Edit assumptions and generate a valuation report.",
    eyebrow: "Solutions",
    intro:
      "Upload a PDF financial statement to extract financial figures, build forecasts, and generate a business valuation report. Review the extracted data and adjust assumptions before sharing your report. You can also enter the figures manually.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        links: [
          {
            label: "manual data input option",
            href: "/solutions/manual-data-input-company-valuation",
          },
        ],
      },
      {
        id: "how-this-company-valuation-software-helps",
        title: "PDF extraction and editable assumptions",
        bullets: [
          "PDF extraction: import financial figures from a statement, then review them before using the forecasts and report.",
          "Editable assumptions: adjust forecasts and compare scenarios.",
          "Valuation methods: compare DCF, multiples and market-based approaches where applicable.",
        ],
      },
      {
        id: "key-benefits-of-our-company-value-calculator",
        title: "What the PDF service includes",
        bullets: [
          "Use a company’s PDF financial statements as the starting point, including companies outside Finland and Denmark; extraction depends on the file and available financial information",
          "Five valuation methods, applied where the financial data supports them",
          "Key financial metrics and credit risk analysis included",
          "Industry comparisons and peer benchmarking",
          "Credit-based access with free and paid options; check the service for current allowances and prices",
        ],
        links: [
          {
            label: "Open PDF valuation",
            href: "https://valuation.valuatum.com/",
          },
        ],
      },
      {
        id: "ai-powered-company-valuation-for-businesses-of-all-sizes",
        title: "From a PDF statement to a valuation report",
        diagram: "pdf-process",
        paragraphs: [
          "The PDF service extracts financial figures, creates forecasts and calculates valuation results. Review the figures against the statement and adjust assumptions to reflect the company’s situation.",
          "The solutions overview also includes manual data entry and country-specific services.",
        ],
        bullets: [
          "Upload a PDF financial statement.",
          "Review the extracted figures, forecasts and valuation report.",
          "Adjust the financial figures and assumptions for your scenario.",
          "Download a report using your adjusted figures.",
        ],
        links: [
          {
            label: "solutions overview",
            href: "/",
          },
        ],
      },
      {
        id: "how-our-company-valuation-calculator-works",
        title: "How our company valuation calculator works",
        paragraphs: [
          "Upload a PDF financial statement, from a short statement to a full annual report. Extraction depends on the file and its financial information.",
        ],
        image: {
          src: "/legacy-assets/legacy-pdf-import-upload.png",
          alt: "PDF upload for company valuation (earlier interface)",
        },
      },
      {
        id: "automated-extraction-of-financial-data-from-a-pdf-statement-legacy-screenshot",
        title:
          "Automated extraction of financial data from a PDF statement (earlier interface)",
        image: {
          src: "/legacy-assets/legacy-pdf-import-processing.png",
          alt: "Automated extraction of financial data from a PDF statement (earlier interface)",
        },
        paragraphs: [
          "The service uses AI to extract financial figures from the PDF.",
          "It then generates forecasts and calculates values using methods including DCF.",
        ],
      },
      {
        id: "company-value-calculation-results-legacy-screenshot",
        title: "Company value calculation results (earlier interface)",
        image: {
          src: "/legacy-assets/legacy-pdf-import-results.jpg",
          alt: "Company value calculation results (earlier interface)",
        },
      },
      {
        id: "professional-company-valuation-report-legacy-screenshot",
        title: "Professional company valuation report (earlier interface)",
        image: {
          src: "/legacy-assets/legacy-pdf-import-report.png",
          alt: "Professional company valuation report (earlier interface)",
        },
        paragraphs: [
          "This screenshot shows the earlier report format. For current examples, visit the sample reports page.",
          "Download your professional business valuation and credit risk report",
        ],
        links: [
          {
            label: "How PDF-based company valuation works",
            href: "https://www.youtube.com/watch?v=TkujkI6Riu4",
          },
        ],
        video: {
          id: "TkujkI6Riu4",
          title: "How PDF-based company valuation works",
        },
      },
      {
        id: "why-choose-our-company-valuation-tool",
        title: "Report features",
        bullets: [
          "PDF extraction: review financial figures imported from your statement",
          "Editable forecasts: adjust growth, margins and other assumptions",
          "Valuation methods: compare DCF, multiples and market-based approaches",
          "Credit risk assessment: Credit score and default probability included",
          "PDF reports: share the financial data, forecasts and valuation analysis",
        ],
        paragraphs: [
          "Learn more about the valuation approaches used in our company valuation software on our DCF and multiples methods page. You can also read our introduction to what company valuation is.",
        ],
        links: [
          {
            label: "DCF and multiples methods",
            href: "/resources/company-valuation/methods",
          },
          {
            label: "what company valuation is",
            href: "/resources/company-valuation/what-is-company-valuation",
          },
        ],
      },
      {
        id: "related-pages",
        title: "Related pages",
        bullets: [
          "Frequently Asked Questions",
          "Finnish Company Valuation",
          "Danish Company Valuation",
        ],
        links: [
          {
            label: "Frequently Asked Questions",
            href: "/support/faq",
          },
          {
            label: "Finnish Company Valuation",
            href: "https://arvonmaaritys.fi/",
          },
          {
            label: "Danish Company Valuation",
            href: "/solutions/danish-company-valuation",
          },
        ],
      },
      {
        id: "service-access",
        title: "Open PDF valuation",
        links: [
          {
            label: "Upload a financial statement PDF",
            href: "https://valuation.valuatum.com/",
          },
          {
            label: "Existing PDF analysis login",
            href: "https://pdfanalysis.valuatum.com/Login.action",
          },
        ],
      },
    ],
    kind: "solution",
    related: [
      "/solutions/manual-data-input-company-valuation",
      "/",
      "/resources/company-valuation/methods",
      "/resources/company-valuation/what-is-company-valuation",
      "/support/faq",
      "/solutions/finnish-company-valuation",
    ],
  },
  {
    path: "/solutions/danish-company-valuation",
    title: "Danish company valuation",
    description:
      "Request a Danish company valuation report. Confirm its data scope and price before generation.",
    eyebrow: "Solutions",
    intro:
      "Request a report for a Danish company by sharing its name or CVR number. We will confirm the available data, report scope, and price before generating it.",
    sections: [
      {
        id: "overview",
        title: "Request a Danish valuation report",
        paragraphs: [
          "Send the company name or CVR number through our international report request. We will confirm the data and price before work begins.",
        ],
        links: [
          {
            label: "Request a Danish company report",
            href: "/contact-international?country=Denmark",
          },
        ],
      },
      {
        id: "valuatum-tools-in-creditreports-dk",
        title: "Existing CreditReports.dk service",
        paragraphs: [
          "CreditReports.dk is a separate existing service with Danish company information and its own access terms. The details below describe that service, not the report request above.",
          "Its website describes data from over 400,000 Danish companies.",
          'For an example, open GN STORE NORD A/S below, click "Full version", then choose the Valuation page.',
          "You can search for any Danish company in Creditreports.dk's business directory using the search bar on the front page.",
        ],
        links: [
          {
            label: "Creditreports.dk",
            href: "https://creditreports.dk",
          },
          {
            label: "GN STORE NORD A/S financial data and valuation",
            href: "https://companies.creditreports.dk/en/companies/330011/gn-store-nord-as/",
          },
          {
            label: "CreditReports.dk company directory",
            href: "https://companies.creditreports.dk",
          },
        ],
      },
      {
        id: "features",
        title: "Features",
        bullets: [
          "Access data for 400,000+ Danish companies",
          "Company and financial information; access depends on CreditReports.dk's terms",
          "No financial data input required",
        ],
        paragraphs: [
          "Learn more about what company valuation is or explore the valuation methods used in our reports.",
        ],
        links: [
          {
            label: "what company valuation is",
            href: "/resources/company-valuation/what-is-company-valuation",
          },
          {
            label: "valuation methods",
            href: "/resources/company-valuation/methods",
          },
        ],
      },
      {
        id: "related-pages",
        title: "Related pages",
        bullets: [
          "Already have financial figures? Try manual input",
          "Support FAQ",
          "Need coverage outside Denmark and Finland?",
        ],
        links: [
          {
            label: "Already have financial figures? Try manual input",
            href: "/solutions/manual-data-input-company-valuation",
          },
          {
            label: "Support FAQ",
            href: "/support/faq",
          },
          {
            label: "Need coverage outside Denmark and Finland?",
            href: "/contact-international",
          },
        ],
      },
      {
        id: "access-and-pricing",
        title: "Access and pricing",
        paragraphs: [
          "For the separate CreditReports.dk service, consult its website for current features, access terms, and pricing.",
        ],
        links: [
          {
            label: "Search Danish companies",
            href: "https://companies.creditreports.dk/en/",
          },
          {
            label: "Current CreditReports.dk pricing",
            href: "https://www.creditreports.dk/en/",
          },
        ],
      },
    ],
    kind: "solution",
    related: [
      "/resources/company-valuation/what-is-company-valuation",
      "/resources/company-valuation/methods",
      "/solutions/manual-data-input-company-valuation",
      "/support/faq",
      "/contact-international",
    ],
  },
  {
    path: "/solutions/finnish-company-valuation",
    title: "Finnish company valuation",
    description:
      "Search for a Finnish company and order a valuation report through arvonmaaritys.fi.",
    eyebrow: "Solutions",
    intro:
      "Search for a company on arvonmaaritys.fi, order its valuation report, then review the assumptions and report in the service.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        paragraphs: [
          "The Finnish service lets customers search companies and order valuation reports. Customers can review assumptions and report output after ordering.",
        ],
        links: [
          {
            label: "Search and order at arvonmaaritys.fi",
            href: "https://arvonmaaritys.fi/",
          },
        ],
      },
      {
        id: "what-you-get",
        title: "What you get",
        bullets: [
          "Search for a company and order its valuation report through arvonmaaritys.fi.",
          "Review the report assumptions and valuation output in the service.",
        ],
        links: [
          {
            label: "valuation methods",
            href: "/resources/company-valuation/methods",
          },
        ],
      },
      {
        id: "how-it-works",
        title: "How it works",
        bullets: [
          "Search for the company by name.",
          "Order its valuation report.",
          "Review the assumptions and report in the service.",
        ],
        links: [
          {
            label: "Open arvonmaaritys.fi",
            href: "https://arvonmaaritys.fi/",
          },
        ],
      },
      {
        id: "related-pages",
        title: "Related pages",
        bullets: [
          "What is company valuation?",
          "PDF-based valuation for any company",
          "Frequently asked questions",
          "Contact us about Finnish valuations",
        ],
        links: [
          {
            label: "What is company valuation?",
            href: "/resources/company-valuation/what-is-company-valuation",
          },
          {
            label: "PDF-based valuation for any company",
            href: "/solutions/pdf-based-company-valuation",
          },
          {
            label: "Frequently asked questions",
            href: "/support/faq",
          },
          {
            label: "Contact us about Finnish valuations",
            href: "https://arvonmaaritys.fi/",
          },
        ],
      },
      {
        id: "access-the-service",
        title: "Open the Finnish valuation service",
        links: [
          {
            label: "Search and order a Finnish valuation report",
            href: "https://arvonmaaritys.fi/",
          },
          {
            label: "Sample Finnish valuation report (Heeros Oyj, 4 August 2026)",
            href: "https://arvonmaaritys.fi/samples/heeros-oyj.pdf",
          },
        ],
      },
    ],
    kind: "solution",
    related: [
      "/resources/company-valuation/methods",
      "/resources/company-valuation/what-is-company-valuation",
      "/solutions/pdf-based-company-valuation",
      "/support/faq",
      "/contact-finland",
    ],
  },
  {
    path: "/solutions/international-company-valuation",
    title: "International company valuation",
    description:
      "Request a valuation report for an international company. Confirm data scope and price before generation.",
    eyebrow: "International coverage",
    intro:
      "Request a report for an international company by sharing its country and name. We will confirm available data, report scope, and price before generating it.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        links: [
          {
            label: "Request an international valuation report",
            href: "/contact-international",
          },
        ],
      },
      {
        id: "what-to-expect",
        title: "Report request",
        bullets: [
          "Share the country and target company",
          "Include a business ID if available",
          "Confirm data scope and price with us before generation",
        ],
      },
      {
        id: "stay-informed",
        title: "Request a report",
        paragraphs: [
          "Request a report for a specific company. We will confirm the available information and price before generating it.",
        ],
        links: [
          {
            label: "Request a company report",
            href: "/contact-international",
          },
          {
            label: "Request a report for Amazon.com, Inc.",
            href: "/contact-international?country=United%20States&company=Amazon.com%2C%20Inc.",
          },
        ],
      },
      {
        id: "related-pages",
        title: "Related pages",
        bullets: [
          "Valuation methods we use",
          "What is company valuation?",
          "PDF statement valuation",
          "Manual data input valuation",
          "FAQ",
        ],
        links: [
          {
            label: "Valuation methods we use",
            href: "/resources/company-valuation/methods",
          },
          {
            label: "What is company valuation?",
            href: "/resources/company-valuation/what-is-company-valuation",
          },
          {
            label: "PDF statement valuation",
            href: "/solutions/pdf-based-company-valuation",
          },
          {
            label: "Manual data input valuation",
            href: "/solutions/manual-data-input-company-valuation",
          },
          {
            label: "FAQ",
            href: "/support/faq",
          },
        ],
      },
      {
        id: "availability-and-pricing",
        title: "Report scope and price",
        paragraphs: [
          "We confirm available company information, report scope, and price with you before generating a new international report.",
        ],
        links: [
          {
            label: "Upload a financial statement PDF",
            href: "https://valuation.valuatum.com/",
          },
          {
            label: "Enter financial figures manually",
            href: "https://estimator.valuatum.com/AspAndUserCreation.action?templateAspQueryKey=PPVTemplate&userType=&popup=true",
          },
          {
            label: "Request a company report",
            href: "/contact-international",
          },
        ],
      },
    ],
    kind: "solution",
    related: [
      "/contact-international",
      "/resources/company-valuation/methods",
      "/resources/company-valuation/what-is-company-valuation",
      "/solutions/pdf-based-company-valuation",
      "/solutions/manual-data-input-company-valuation",
      "/support/faq",
    ],
  },
  {
    path: "/solutions/why-do-you-need-company-valuation",
    title: "Why do you need company valuation?",
    description:
      "Learn when to use a business valuation for a sale, fundraising, ownership change or financing, and which assumptions affect the estimate.",
    eyebrow: "Solutions",
    intro:
      "Use a company valuation to prepare for a sale, assess an investment, raise capital or plan an ownership change. Reviewing the data, forecasts and assumptions helps you explain the estimated value to the people involved.",
    sections: [
      {
        id: "who-uses-company-valuation-tools",
        title: "Who uses company valuation tools?",
        bullets: [
          "Founders and CEOs: estimate company value when raising capital, preparing a sale or planning an ownership change.",
          "Buyers and sellers: review a valuation and its assumptions before negotiating.",
          "Financial advisors: prepare reports documenting the data, forecasts, methods and scenarios.",
          "Investors: screen opportunities using consistent methods and compare the assumptions.",
          "Accountants: use valuations as supporting analysis for audit, tax and compliance work, subject to professional review of the purpose, assumptions and requirements.",
        ],
      },
      {
        id: "overview",
        title: "Overview",
        paragraphs: [
          "A valuation helps you estimate business value, compare it with peers, and examine the drivers and risks behind the result.",
          "Company valuation is useful in many different situations, for example:",
          'If you wish to learn more, visit our "What Is Company Valuation?" guide or explore the specific valuation methods we use.',
        ],
        bullets: [
          "To estimate company value and assess the growth potential of your business",
          "To buy or sell a business at a fair price",
          "For partner investments or buyouts",
          "When planning changes in ownership or succession",
          "When considering funding opportunities or bank financing",
        ],
        links: [
          {
            label: '"What Is Company Valuation?"',
            href: "/resources/company-valuation/what-is-company-valuation",
          },
          {
            label: "valuation methods",
            href: "/resources/company-valuation/methods",
          },
          {
            label: "Company valuation explained – Valuatum Tools",
            href: "https://www.youtube.com/watch?v=vHu7WsCF-5Y",
          },
        ],
        video: {
          id: "vHu7WsCF-5Y",
          title: "Company valuation explained – Valuatum Tools",
        },
      },
      {
        id: "business-sales-acquisitions",
        title: "Business sales & acquisitions",
        paragraphs: [
          "A valuation gives buyers and sellers an estimate to discuss before agreeing a price. Both parties can review the financial data, forecasts and assumptions behind it.",
          "An owner preparing to sell can use a valuation to assess offers. A buyer considering several targets can compare them using consistent methods and assumptions.",
        ],
      },
      {
        id: "investment-decisions-fundraising",
        title: "Investment decisions & fundraising",
        paragraphs: [
          "Investors use valuations to assess opportunities and negotiate deal terms. Founders seeking capital need to explain the forecasts and assumptions that support their proposed value.",
          "A startup seeking seed funding must justify its pre-money value. An established company raising growth equity also needs to explain the data, forecasts and methods behind its estimate.",
        ],
      },
      {
        id: "strategic-planning-performance-tracking",
        title: "Strategic planning & performance tracking",
        paragraphs: [
          "Tracking a valuation over time can help management assess how investment, growth and margin changes affect business value.",
          "R&D investment may reduce current profit while increasing forecast cash flows. An underperforming business unit may reduce the estimated value of the whole company. In both cases, the conclusion depends on the forecast assumptions.",
        ],
      },
      {
        id: "ownership-changes-shareholder-transitions",
        title: "Ownership changes & shareholder transitions",
        paragraphs: [
          "Partner buyouts, inheritance, divorce settlements and employee share schemes may require a valuation of the shares being transferred. The purpose and applicable requirements determine the scope of the analysis.",
          "A family succession or co-founder exit needs a documented basis for pricing the shares. Agree the valuation date, scope and assumptions before relying on the result.",
        ],
      },
      {
        id: "financing-lending",
        title: "Financing & lending",
        paragraphs: [
          "A valuation can support financing discussions by documenting the business’s earnings, assets and expected cash flows. Lenders assess these alongside their own credit criteria.",
          "Review debt levels alongside forecast cash flows to assess how borrowing affects the company and its shareholders.",
        ],
      },
      {
        id: "company-valuation-supports-better-decisions",
        title: "Using the valuation to compare decisions",
        paragraphs: [
          "Use the valuation to examine which assumptions drive the result. Management can then compare the effects of changes in revenue, margins, investment and financing.",
          "Compare scenarios for revenue growth, margins, discount rates and terminal value to see how sensitive the estimate is.",
        ],
      },
      {
        id: "how-often-should-a-company-be-valued",
        title: "How often should a company be valued?",
        paragraphs: [
          "Choose a review schedule that fits the business and the purpose of the valuation. Update the financial data and forecasts when performance or market conditions change.",
          "Review the valuation when you receive an acquisition offer, raise capital, bring in a partner or see a substantial change in financial performance.",
        ],
      },
      {
        id: "how-a-company-valuation-tool-helps",
        title: "How a company valuation tool helps",
        paragraphs: [
          "A valuation tool calculates results from financial data and forecasts. You still need to check the inputs and decide whether the assumptions fit the business.",
          "Upload a financial statement or enter the figures manually, review the data, adjust assumptions and create a report.",
          "Before sharing a report with investors, buyers or the board, check that it documents the inputs, forecasts and methods used.",
        ],
      },
      {
        id: "get-started-with-company-valuation",
        title: "Get started with company valuation",
        paragraphs: [
          "Choose a valuation service based on the financial data you have.",
        ],
        links: [
          {
            label: "Manual Data Input (Free)",
            href: "/solutions/manual-data-input-company-valuation",
          },
          {
            label: "PDF Statement Valuation",
            href: "/solutions/pdf-based-company-valuation",
          },
          {
            label: "FAQ",
            href: "/support/faq",
          },
        ],
      },
    ],
    kind: "solution",
    related: [
      "/resources/company-valuation/what-is-company-valuation",
      "/resources/company-valuation/methods",
      "/solutions/manual-data-input-company-valuation",
      "/solutions/pdf-based-company-valuation",
      "/support/faq",
    ],
  },
];

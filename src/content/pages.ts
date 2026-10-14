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
      "Find help for using Valuatum Tools—from choosing the right valuation workflow to generating a valuation report. If you don't find what you need, email us and include a short description of your issue.",
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
          "FAQ (Start here): Answers to the most common questions about inputs, PDF upload, assumptions, methods, reports, and pricing.",
          "Learn valuation basics: Definitions and valuation methods explained in plain English.",
          "International coverage: Questions about company valuation outside Denmark and Finland.",
          "Email support: Include your workflow (manual/PDF/Denmark/Finland) and what you were trying to do.",
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
            label: "Danish company valuation (no financial statements needed)",
            href: "/solutions/danish-company-valuation",
          },
          {
            label: "Finnish company valuation",
            href: "/solutions/finnish-company-valuation",
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
          "A valuation is an estimate that depends on the inputs and assumptions used. If your result looks off, the fastest fixes are usually:",
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
    title: "Company Valuation Tool FAQ",
    description:
      "Answers about inputs, PDF uploads, DCF vs multiples, editable assumptions, valuation reports, and pricing for Valuatum Tools.",
    eyebrow: "Support",
    intro:
      "These are the most common questions about valuing a company using Valuatum Tools—manual entry, PDF financial statements, and country-specific workflows.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        paragraphs: [
          "Valuatum Tools is a company valuation tool that helps you estimate company value from manual inputs, PDF financial statements, or existing company data where available. You can review and edit assumptions, compare methods like DCF and benchmarking, and generate a valuation report. Results depend on your inputs and assumptions.",
        ],
      },
      {
        id: "what-information-do-i-need-to-value-a-company",
        title: "What information do I need to value a company?",
        paragraphs: [
          "You can start with basic financial figures via manual input, or upload a PDF financial statement to extract figures. The more complete the inputs and assumptions are, the easier it is to interpret the result.",
          "Manual input workflow · PDF workflow",
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
          "Choose Denmark/Finland workflows if you want reports using existing company data where available.",
        ],
        paragraphs: ["Denmark · Finland"],
        links: [
          {
            label: "Denmark",
            href: "/solutions/danish-company-valuation",
          },
          {
            label: "Finland",
            href: "/solutions/finnish-company-valuation",
          },
        ],
      },
      {
        id: "can-i-calculate-company-value-from-a-pdf-financial-statement",
        title: "Can I calculate company value from a PDF financial statement?",
        paragraphs: [
          "Yes. The PDF workflow is designed to import a PDF statement and convert it into structured figures you can review before generating a valuation report.",
          "PDF workflow",
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
        title: "My PDF results look wrong—what should I check first?",
        paragraphs: [
          "First, verify the key extracted figures (revenue, operating profit/margins, balance sheet items). If a PDF is image-based/scanned, extraction may require extra review. Correcting a few critical lines usually fixes the output quickly.",
        ],
      },
      {
        id: "do-i-need-all-three-statements-income-statement-balance-sheet-cash-flow",
        title:
          "Do I need all three statements (income statement, balance sheet, cash flow)?",
        paragraphs: [
          "Not always to start. You can begin with partial inputs, then refine the valuation as more complete data is added. More complete statements generally lead to a clearer model and report.",
        ],
      },
      {
        id: "what-valuation-methods-does-the-tool-support",
        title: "What valuation methods does the tool support?",
        paragraphs: [
          "The tool supports common valuation approaches such as Discounted Cash Flow (DCF) and benchmarking methods (e.g., multiples-based comparisons). Different methods can be useful depending on profitability and data quality.",
          "Valuation methods",
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
          "Many analyses compare both to understand a reasonable range.",
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
          "Valuation outputs can be highly sensitive to a few drivers—especially growth assumptions and discount-rate inputs. A small change in these can produce a large change in the estimated value.",
        ],
      },
      {
        id: "what-do-i-get-at-the-end-just-a-number-or-a-valuation-report",
        title: "What do I get at the end—just a number or a valuation report?",
        paragraphs: [
          "You get a valuation report that documents the inputs and assumptions behind the estimate. This helps you explain the result to stakeholders.",
        ],
      },
      {
        id: "can-i-run-multiple-scenarios-and-generate-updated-reports",
        title: "Can I run multiple scenarios and generate updated reports?",
        paragraphs: [
          "Yes. Scenario testing is often the fastest way to understand a valuation result—run an upside/downside case by changing a few key assumptions and compare outputs.",
        ],
      },
      {
        id: "what-is-free-vs-paid-on-valuatum-tools",
        title: "What is free vs paid on Valuatum Tools?",
        bullets: [
          "Manual data input: the basic Estimator has a free option; check current service terms",
          "PDF-based valuation: free and paid credit options; see the service for current allowances",
          "Finnish company valuation: available now; the previous site listed €30 per company import, so check the current price before ordering",
          "Broader international company-data coverage: upcoming; the earlier €50–100 range was indicative",
        ],
      },
      {
        id: "how-does-danish-company-valuation-work-if-i-don-t-have-financial-statements",
        title:
          "How does Danish company valuation work if I don't have financial statements?",
        paragraphs: [
          "The Danish workflow is designed for cases where you start from existing company information rather than uploading your own statements.",
          "Danish company valuation",
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
          "The Finnish workflow is designed to generate valuation reports for Finnish companies with editable assumptions and report output.",
          "Finnish company valuation",
        ],
        links: [
          {
            label: "Finnish company valuation",
            href: "/solutions/finnish-company-valuation",
          },
        ],
      },
      {
        id: "when-will-international-company-valuation-be-available",
        title: "When will international company valuation be available?",
        paragraphs: [
          "Broader preloaded company-data coverage is being prepared. You can already use PDF statements or manual input for companies outside Denmark and Finland. Contact us about your country and requirements.",
          "International contact",
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
        title: "The tool won't open / I'm stuck on login—what should I try?",
        paragraphs: [
          "Try a hard refresh, disable browser extensions that block pop-ups/scripts, and test in another browser. If the issue persists, email support with your workflow, browser, and screenshots.",
          "estimator@valuatum.com",
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
          "A valuation is an estimate, not a guaranteed price. The usefulness depends on whether the inputs and assumptions reflect the business reality and are explained clearly.",
        ],
      },
      {
        id: "how-is-my-data-handled",
        title: "How is my data handled?",
        paragraphs: [
          "For privacy and data handling details, refer to the Privacy Policy. If you have a specific compliance question (e.g., what data is stored), email support and specify which workflow you used.",
          "Privacy Policy",
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
    title: "About Us",
    description:
      "Valuatum is a financial software company founded in 2000, building valuation, credit risk, and equity research solutions for customers worldwide.",
    eyebrow: "Valuatum",
    intro:
      "Valuatum is a financial software company founded in 2000, specialising in valuation, credit risk, and equity research solutions. Valuatum Tools is our suite of company valuation applications built for analysts, advisors, and business owners worldwide.",
    sections: [
      {
        id: "what-we-do",
        title: "What We Do",
        bullets: [
          "Company valuation software for manual input and PDF-based workflows",
          "Credit risk analysis and equity research platforms",
          "SaaS delivery with continuous development and maintenance",
          "Serving credit institutions, investment banks, and asset managers globally",
        ],
        paragraphs: [
          "Working with a wide customer base—from credit institutions to investment banks and asset managers around the world—gives us unique insights into their different needs.",
          "The company was established in 2000 by former equity research and credit risk analysts. Through our years of experience, we have established a deep knowledge and understanding of financial markets and company valuation. We operate with the Software as a Service (SaaS) model, meaning that in addition to applications and tools we also offer our customers maintenance and continuous development services. Further information about us and our other products can be found at our home page .",
        ],
        links: [
          {
            label: "our home page",
            href: "http://www.valuatum.com/",
          },
        ],
      },
      {
        id: "other-solutions",
        title: "Other Solutions",
        paragraphs: [
          "In addition to Company Valuation Tool, Valuatum offers many other solutions to both large and small customers. Valuatum offers equity research and credit risk solutions to larger customers. To learn more about these solutions, visit the Valuatum home page .",
          "Valuatum Aarre is an established Finnish-language valuation service aimed at Finnish SMEs and accounting firms. The original site described Finnish company data from Bisnode. The legacy service link is retained below.",
        ],
        links: [
          {
            label: "Valuatum home page",
            href: "http://www.valuatum.com/",
          },
          {
            label: "here",
            href: "https://pro-aarre.valuatum.com/",
          },
        ],
      },
      {
        id: "references",
        title: "References",
        paragraphs: [
          "Valuatum has served a variety of clients in the finance sector on five different continents. Below, you can see some of our reference customers.",
          "Evli was listed as a reference customer on the previous website.",
        ],
      },
      {
        id: "enlight-research-legacy-screenshot",
        title: "Enlight Research (legacy screenshot)",
        image: {
          src: "/legacy-assets/legacy-enlight-research-logo.png",
          alt: "Enlight Research — legacy illustration",
        },
      },
      {
        id: "p-rssis-ti-legacy-screenshot",
        title: "Pörssisäätiö (legacy screenshot)",
        image: {
          src: "/legacy-assets/legacy-Vaaka2.png",
          alt: "Pörssisäätiö — legacy illustration",
        },
      },
      {
        id: "company-information",
        title: "Company Information",
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
            href: "http://www.valuatum.com/",
          },
        ],
      },
      {
        id: "get-in-touch",
        title: "Get in Touch",
        paragraphs: [
          "Interested in learning more about our solutions? Contact us today.",
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
          "The previous website named Evli, Enlight Research, and Pörssisäätiö among Valuatum’s reference customers.",
        ],
        bullets: ["Evli", "Enlight Research", "Pörssisäätiö"],
      },
    ],
    kind: "company",
    related: ["/support"],
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy",
    description:
      "Read how Valuatum Oy collects and uses account data, usage data, and financial information entered for valuations.",
    eyebrow: "Valuatum",
    intro:
      'This privacy policy explains how Valuatum Oy ("we", "us", or "our") collects, uses, and protects your personal information when you use our Valuatum Estimator service.',
    sections: [
      {
        id: "information-we-collect",
        title: "Information We Collect",
        paragraphs: ["We may collect the following types of information:"],
        bullets: [
          "Account Information: Name, email address, phone number (optional), and company information when you register for our service.",
          "Financial Data: Company financial statements and related data that you enter into the system for valuation purposes.",
          "Usage Data: Information about how you use our service, including pages visited and features used.",
          "Technical Data: IP address, browser type, device information, and cookies.",
        ],
      },
      {
        id: "how-we-use-your-information",
        title: "How We Use Your Information",
        paragraphs: ["We use your information to:"],
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
        title: "Data Protection",
        paragraphs: [
          "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
          "Valuatum does not give any user data, including contact information and financial data, to third parties. We may contact you with issues regarding the system (e.g. problems and important issues) via email.",
        ],
      },
      {
        id: "cookies",
        title: "Cookies",
        paragraphs: [
          "This website uses cookies for statistical and analytical purposes and for improving the user experience of the site. Cookies are small text files stored on your device.",
        ],
      },
      {
        id: "necessary-cookies",
        title: "Necessary Cookies",
        paragraphs: [
          "Necessary cookies are absolutely essential for the website to function properly. This category only includes cookies that ensures basic functionalities and security features of the website. These cookies do not store any personal information.",
        ],
      },
      {
        id: "non-necessary-cookies",
        title: "Non-necessary Cookies",
        paragraphs: [
          "Any cookies that may not be particularly necessary for the website to function and is used specifically to collect user personal data via analytics, ads, other embedded contents are termed as non-necessary cookies. It is mandatory to procure user consent prior to running these cookies on your website.",
        ],
      },
      {
        id: "your-rights",
        title: "Your Rights",
        paragraphs: ["You have the right to:"],
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
        title: "Contact Us",
        paragraphs: [
          "If you have any questions about this privacy policy or our data practices, please contact us at:",
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
    title: "Security & Data Handling",
    description:
      "How Valuatum Tools handles data in valuation workflows, including PDF statement uploads. See privacy policy and support contact.",
    eyebrow: "Valuatum",
    intro:
      "This page explains how Valuatum Tools handles data in valuation workflows. For full details, see the Privacy Policy or contact support.",
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
        title: "Data processed in valuation workflows",
        bullets: [
          "Account email address used for registration",
          "Manually entered financial figures (income statement, balance sheet, cash flow)",
          "PDF financial statements, if uploaded for automated analysis",
          "Valuation assumptions such as growth rates, discount rates, and peer multiples",
        ],
        paragraphs: [
          "Data is processed securely and is not shared with third parties. For a complete description of data handling practices, please review our Privacy Policy.",
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
    title: "Credit Risk and Valuation Reports - Finland",
    description:
      "Request a Finnish company valuation report or ask questions about the Finland workflow. We'll reply by email.",
    eyebrow: "Valuatum",
    intro:
      "Request a credit risk and valuation report for any Finnish company. Fill out the form below and we will send you the report for a fixed fee.",
    sections: [
      {
        id: "request-a-report",
        title: "Request a report",
        paragraphs: [
          "For a Finnish company report request, email us your name, email address, your company (optional), the Finnish company you want valued, and any additional requirements. We will reply about the report and fee.",
        ],
        links: [
          {
            label: "Email a Finnish report request",
            href: "mailto:company-valuation@valuatum.com?subject=Finnish%20Company%20Valuation%20Request",
          },
          {
            label: "Open the Finnish valuation service",
            href: "https://valuation-finland.valuatum.com/AspAndUserCreation.action?templateAspQueryKey=CVFinland&popup=true",
          },
        ],
        bullets: [
          "Your name and email address",
          "Your company (optional)",
          "Finnish company for valuation",
          "Additional information or requirements (optional)",
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
      "Request valuation or credit risk reports for companies outside Denmark and Finland, or register interest in upcoming coverage.",
    eyebrow: "Valuatum",
    intro:
      "Tell us which country and company you need to value. Finland and Denmark have existing company-data services, and you can already use PDF financial statements or manual input for other companies. We are preparing broader international company-data coverage.",
    sections: [
      {
        id: "register-your-interest",
        title: "Ask about international coverage",
        paragraphs: [
          "Email your name, email address, company (optional), country of interest, and what you need. We can discuss current options and interest in upcoming data coverage.",
        ],
        links: [
          {
            label: "Email about international coverage",
            href: "mailto:company-valuation@valuatum.com?subject=International%20Company%20Valuation%20Enquiry",
          },
          {
            label: "Upload a financial statement PDF",
            href: "https://valuation.valuatum.com/",
          },
        ],
        bullets: [
          "Your name and email address",
          "Your company (optional)",
          "Country and company of interest",
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
      "Company valuation guides covering definitions and methods like DCF and multiples—built to help you estimate business value and understand reports.",
    eyebrow: "Valuation resources",
    intro:
      "Learn the basics of company valuation and valuation methods. These guides explain key concepts, walk through common approaches, and help you understand how to estimate business value.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        links: [
          {
            label:
              "What Is Company Valuation? Understand what company valuation means, why it matters, and how intrinsic value differs from market price. Includes examples and a video overview.",
            href: "/resources/company-valuation/what-is-company-valuation",
          },
        ],
      },
      {
        id: "what-is-company-valuation",
        title: "What Is Company Valuation?",
        paragraphs: [
          "Understand what company valuation means, why it matters, and how intrinsic value differs from market price. Includes examples and a video overview.",
        ],
        links: [
          {
            label:
              "Company Valuation Methods A detailed guide to DCF, multiples, book value, and market-based valuation approaches — including when to use each method.",
            href: "/resources/company-valuation/methods",
          },
        ],
      },
      {
        id: "company-valuation-methods",
        title: "Company Valuation Methods",
        paragraphs: [
          "A detailed guide to DCF, multiples, book value, and market-based valuation approaches — including when to use each method.",
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
    title: "What Is Company Valuation?",
    description:
      "Learn what company valuation is, how to estimate business value using methods like DCF and multiples, and how to generate a valuation report from financial data.",
    eyebrow: "Valuation resources",
    intro:
      "Company valuation is the analytical process of estimating the economic worth of a business. It uses financial data, forecast models, and established methods — such as discounted cash flow (DCF) and multiples analysis — to determine a company's intrinsic value. This value serves as a rational starting point for negotiations, investment decisions, and strategic planning.",
    sections: [
      {
        id: "key-takeaways",
        title: "Key Takeaways",
        bullets: [
          "Company valuation estimates what a business is worth based on its financials and future prospects.",
          "Multiple methods (DCF, multiples, book value) are typically combined for a reliable value range.",
          "Value is subjective and depends on the observer's assumptions — price is what is actually paid.",
          "Accurate valuation is essential for buying, selling, raising capital, and strategic planning.",
        ],
        paragraphs: [
          "Company valuation is the analytical process of determining the economic worth of a business. Whether you're looking to calculate company value for a sale, investment, or strategic planning, understanding valuation fundamentals is essential. A proper business valuation establishes the intrinsic or true value of an enterprise — the price both buyer and seller would agree upon in an arm's-length transaction without negotiation premiums or discounts.",
          "Company value is inherently subjective and depends on the perspective of the observer. Consider a simple example: one investor might value a technology company at €5 million based on current cash flows, while another might value it at €8 million based on synergies with their existing portfolio. This difference reflects varying assessments of future prospects, risk, and strategic fit. A robust company valuation calculator helps quantify these factors systematically.",
          "It's important to distinguish between value and price. Price is the monetary amount actually paid in a transaction — it's more objective and observable. Value, however, reflects what a business is truly worth to a particular buyer or seller. In acquisitions and investments, the valuation process establishes an initial estimate of value, which then serves as a starting point for negotiations that ultimately determine the final price. Since the goal is to ensure value exceeds the price paid, accurate business valuation is critical.",
          "To learn how to value a business effectively, the video below provides a comprehensive overview. For hands-on experience with our company valuation software, register for manual input valuation and generate your own valuation report.",
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
          title: "How to Value a Company - Business Valuation Explained",
        },
      },
      {
        id: "why-is-accurate-company-valuation-important",
        title: "Why Is Accurate Company Valuation Important?",
        paragraphs: [
          "Understanding company value is essential in many business situations:",
          "A reliable company value calculator streamlines this process by automating the technical analysis while allowing you to adjust key assumptions based on your specific knowledge of the business.",
        ],
        bullets: [
          "Buying or selling a business — Ensure you're paying or receiving a fair price",
          "Raising investment capital — Justify your valuation to potential investors",
          "Strategic planning — Track how business decisions affect company worth over time",
          "Ownership transitions — Fairly value shares for buyouts, succession, or divorce proceedings",
          "Securing financing — Demonstrate company value to lenders and creditors",
        ],
      },
      {
        id: "selecting-the-right-valuation-approach",
        title: "Selecting the Right Valuation Approach",
        diagram: "selection",
        paragraphs: [
          "The choice of business valuation method depends on the company's financial situation. The workflow below illustrates how different methods are selected based on whether a company has positive or negative earnings and operating profit. No single method captures the complete picture — professional valuations typically combine multiple approaches to arrive at a reasonable value range.",
        ],
        bullets: [
          "Positive net earnings: ROE-% vs. P/BV, P/E and EV/EBITDA multiples, and discounted cash flow.",
          "Negative net earnings with positive EBITDA: ROE-% vs. P/BV, valuation multiples, EBIT-% vs. P/Sales, and DCF when positive.",
          "Negative net earnings and EBITDA: EBIT-% vs. P/Sales and book value of equity, with DCF included when positive.",
        ],
      },
      {
        id: "company-valuation-methods",
        title: "Company Valuation Methods",
        paragraphs: [
          "Our company valuation tool uses multiple approaches to ensure comprehensive and reliable results. The most common business valuation methods include:",
          "To learn more about these methods and how they are applied in our company valuation software, visit our Company Valuation Methods page.",
        ],
        bullets: [
          "Discounted Cash Flow (DCF) — Values a company based on projected future cash flows, discounted to present value. This is considered the most theoretically rigorous approach for company valuation DCF analysis.",
          "Multiples Valuation (P/E, EV/EBITDA) — Compares the company to publicly traded peers using standardized ratios",
          "Book Value of Equity — Uses the accounting value of net assets as a baseline",
          "ROE vs. P/BV Method — Establishes a statistical relationship between return on equity and price-to-book ratios",
          "EBIT-% vs. P/Sales Method — Useful for valuing unprofitable companies based on revenue and margin expectations",
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
        title: "Get Started with Company Valuation",
        paragraphs: [
          "Ready to calculate your company value? Our company valuation calculator makes the process straightforward:",
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
          "Value is an estimate of what a business is worth based on analysis. Price is the amount actually paid in a transaction — it may differ from value due to negotiation, timing, or strategic factors.",
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
    title: "Company Valuation Methods",
    description:
      "Detailed guide to company valuation methods including DCF, EBITDA multiples, comparable analysis, and book value. Learn when to use each method and how they are combined.",
    eyebrow: "Valuation resources",
    intro:
      "TL;DR: No single valuation method captures a company's full worth. Professional valuations combine income-based (DCF), market-based (multiples), and asset-based approaches to produce a defensible value range. The right combination depends on the company's profitability, industry, and data availability.",
    sections: [
      {
        id: "understanding",
        title: "Understanding Business Valuation Approaches",
        diagram: "methods",
        paragraphs: [
          "No single valuation method can capture the complete picture of a company's worth. Different company valuation methods exist because businesses vary widely in their characteristics, financial performance, and growth potential. A profitable, established manufacturing company requires different analytical approaches than an early-stage technology startup with negative earnings but strong growth prospects.",
          "Most professional valuations combine multiple methods to arrive at a reasonable value range. This triangulation approach helps validate findings and accounts for the inherent uncertainty in any forward-looking financial analysis. The weight given to each method depends on factors such as the company's profitability, industry characteristics, data availability, and the purpose of the valuation.",
          "The valuation tool automatically selects and weights appropriate methods based on the company's financial state, using historical data and automatically generated forecasts. Users can review these assumptions and adjust them based on their specific knowledge of the business.",
        ],
        bullets: [
          "Based on history: book value of equity, EBIT-% vs. P/Sales, ROE-% vs. P/BV, and other multiples methods.",
          "Based on future estimates: discounted cash flow, using automatically generated forecasts.",
        ],
      },
      {
        id: "income-based-valuation-models",
        title: "Income-Based Valuation Models",
        paragraphs: [
          "Income-based methods value a company based on its ability to generate future earnings or cash flows. These approaches are considered the most theoretically sound because they directly measure what investors ultimately receive: returns on their investment.",
        ],
      },
      {
        id: "dcf",
        title: "Discounted Cash Flow (DCF)",
        paragraphs: [
          "DCF valuation is widely regarded as the most rigorous business valuation method. It estimates a company's value by projecting all future free cash flows and discounting them to their present value, based on the time value of money principle.",
        ],
      },
      {
        id: "when-dcf-works-best",
        title: "When DCF Works Best",
        paragraphs: [
          "DCF valuation is most reliable for established companies with predictable cash flows and stable operations. It excels when valuing businesses where future performance can be reasonably forecasted, such as mature companies in stable industries, utilities, or businesses with long-term contracts.",
        ],
      },
      {
        id: "key-assumptions",
        title: "Key Assumptions",
        paragraphs: [
          "The accuracy of a DCF model depends entirely on the quality of its inputs. The tool uses the following default assumptions, which users can adjust:",
          "The discount rate—the weighted average cost of capital (WACC)—has an outsized impact on the final valuation. The required return on equity is estimated using the Capital Asset Pricing Model (CAPM), while the cost of debt reflects the company's actual borrowing costs.",
          "Example:",
          "A manufacturing company generates €1 million in free cash flow annually. If growth is expected at 3% per year and the discount rate (WACC) is 10%, the company's value can be estimated as €1M ÷ (10% - 3%) = approximately €14.3 million. This represents what a buyer would pay today for all future cash flows.",
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
        title: "Market-Based Valuation Methods",
        paragraphs: [
          "Market-based approaches derive value by comparing a company to similar businesses that have been valued by the market. These methods are grounded in the principle that similar assets should trade at similar prices.",
        ],
      },
      {
        id: "multiples",
        title: "Multiples Valuation",
        paragraphs: [
          "In multiples valuation, a company's value is estimated by comparing it to publicly traded peers in the same industry. A key financial metric—such as earnings, EBITDA, or revenue—is multiplied by the average ratio at which comparable companies trade.",
        ],
      },
      {
        id: "how-it-works",
        title: "How It Works",
        paragraphs: [
          "Reference companies are typically publicly traded firms with available market prices. The target company's financial figure is multiplied by the average multiple from the peer group, and a private company discount may be applied to account for reduced liquidity.",
          "Example:",
          "Companies A and B operate in the same industry. Company A is publicly traded with a net profit of €10 and a market value of €200, giving it a P/E ratio of 20. Company B, a private firm, has a net profit of €5. If both companies are similar, the estimated value of B would be 20 × €5 = €100.",
        ],
      },
      {
        id: "when-multiples-work-best",
        title: "When Multiples Work Best",
        paragraphs: [
          "Multiples valuation is particularly useful when there are sufficient comparable public companies, when market conditions are stable, and when the target company has reliable financial metrics. It is commonly used in M&A transactions for quick valuation benchmarks.",
        ],
      },
      {
        id: "common-multiples",
        title: "Common Multiples",
        bullets: [
          "P/E (Price-to-Earnings): Suitable for profitable companies; compares market value to net income",
          "EV/EBITDA: Useful when comparing companies with different capital structures; focuses on operating performance",
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
        title: "When This Method Works Best",
        paragraphs: [
          "The ROE vs. P/BV approach is effective for companies with stable and predictable returns on equity, particularly in industries where book value is a meaningful measure of invested capital, such as financial services and manufacturing.",
        ],
      },
      {
        id: "how-it-is-applied",
        title: "How It Is Applied",
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
        title: "When This Method Works Best",
        paragraphs: [
          "This approach is specifically designed for unprofitable companies that have revenue but negative earnings. It is commonly applied to growth-stage companies, startups, or businesses undergoing restructuring.",
        ],
      },
      {
        id: "key-assumption",
        title: "Key Assumption",
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
        title: "Asset-Based Valuation",
        paragraphs: [
          "Asset-based methods value a company based on the worth of its underlying assets rather than its earnings potential. These approaches are most relevant when a company's assets have significant standalone value.",
        ],
      },
      {
        id: "book-value-of-equity",
        title: "Book Value of Equity",
        paragraphs: [
          "Book value of equity is an accounting reference: the carrying value of assets minus the carrying value of liabilities. It reflects items such as share capital, retained earnings, and reserves. It does not measure the proceeds shareholders would receive from selling the assets or liquidating the company.",
        ],
      },
      {
        id: "when-book-value-works-best",
        title: "When Book Value Works Best",
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
        title: "Selecting the Right Valuation Approach",
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
        title: "Profitable Companies (Green Path)",
        paragraphs: [
          "When a company has positive net income, all major valuation methods are available. In practice, a common approach is to combine four methods: ROE vs. P/BV, Discounted Cash Flow, EV/EBITDA multiples, and P/E multiples. These methods are weighted to produce a final valuation.",
          "This is the most common scenario and allows for the most robust valuation, as multiple independent methods can cross-validate each other.",
        ],
      },
      {
        id: "negative-earnings-positive-operating-profit-yellow-path",
        title: "Negative Earnings, Positive EBITDA (Yellow Path)",
        paragraphs: [
          "When net income is negative but EBITDA remains positive, valuation options become more limited. The P/E multiple cannot be used (as it would produce a negative value), but EV/EBITDA remains applicable because EBITDA is positive.",
          "If DCF valuation also produces a negative result, it is excluded from the final calculation, and the valuation relies primarily on EV/EBITDA.",
        ],
      },
      {
        id: "deeply-unprofitable-companies-purple-path",
        title: "Deeply Unprofitable Companies (Purple Path)",
        paragraphs: [
          "When both net income and EBITDA are negative, valuation options are highly constrained. Only two methods remain applicable: book value of equity and EBIT-% vs. P/Sales.",
          "If DCF produces a positive value despite current losses (reflecting expected future profitability), it can be included in the final valuation.",
        ],
      },
      {
        id: "the-challenge-of-valuing-loss-making-companies",
        title: "The Challenge of Valuing Loss-Making Companies",
        paragraphs: [
          "Valuations of unprofitable companies carry significantly more uncertainty than those of profitable ones. The estimates rely heavily on assumptions about future performance and recovery, which are inherently speculative. Statistical accuracy for these valuations is lower, and the results should be interpreted with appropriate caution.",
        ],
      },
      {
        id: "applying",
        title: "Applying Multiple Valuation Methods",
        paragraphs: [
          "The valuation tool automatically applies the appropriate methods based on the company's financial profile, saving time while ensuring methodological rigor. It calculates values using each applicable method and combines them using built-in weighting logic.",
          "Users retain full control over key assumptions. Revenue growth rates, operating margins, discount rates, and other parameters can be reviewed and adjusted to reflect specific knowledge about the business or different scenarios. This flexibility allows the tool to serve both as a quick screening mechanism and as the foundation for detailed analysis.",
        ],
      },
      {
        id: "faq-methods",
        title: "What is the best valuation method?",
        paragraphs: [
          "There is no single best method. Professional valuations typically combine DCF, multiples, and asset-based approaches to arrive at a reasonable value range.",
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
          "The tool automatically selects methods based on the company's financial profile — for example, whether earnings and EBITDA are positive or negative.",
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
    title: "Manual Data Input Company Valuation",
    description:
      "Enter financial figures manually to estimate business value. Review assumptions, run scenarios, and export a valuation report.",
    eyebrow: "Solutions",
    intro:
      "Our company valuation calculator allows you to input financial figures manually and receive a comprehensive business valuation report instantly. This free company valuation tool is ideal if you already have your financial data ready and want to calculate company value quickly and accurately. New to the topic? Read about what company valuation means.",
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
          "With our company valuation software, you can generate valuation reports in seconds and modify any financial estimates, including sales, EBIT, and investments. The system is specifically tailored for small business valuation and uses multiple valuation methods including DCF valuation to ensure reliable results. If you prefer not to enter data yourself, you can also upload a PDF financial statement instead.",
          "This company value calculator provides the following features:",
        ],
        bullets: [
          "Automatic company valuation using multiple methods including DCF, P/E, and EV/EBITDA",
          "Easy-to-use tools for analyzing and creating your own valuation scenarios",
          "Professional business valuation reports with detailed methodology explanations",
          "Industry comparisons with up to 200,000 peer companies",
        ],
      },
      {
        id: "test-our-company-valuation-tool",
        title: "Test Our Company Valuation Tool",
        paragraphs: [
          "Explore the company valuation software in our demo environment and review a sample business valuation report:",
        ],
      },
      {
        id: "demo-environment",
        title: "Demo Environment",
        links: [
          {
            label: "Open Demo",
            href: "https://estimator-demo.valuatum.com",
          },
        ],
        image: {
          src: "/legacy-assets/legacy-manual-input-demo-environment.png",
          alt: "Company valuation calculator demo environment — legacy illustration",
        },
        paragraphs: [
          "Try our company value calculator in a demo environment and see how business valuations work in practice.",
          "Open Demo",
        ],
      },
      {
        id: "sample-report-pdf",
        title: "Sample Report (PDF)",
        links: [
          {
            label: "Legacy example: View Sample Report",
            href: "https://www.valuatum.com/wp-content/uploads/sites/10/2025/11/DemoCompanyValuationReport.pdf",
          },
        ],
        image: {
          src: "/legacy-assets/legacy-manual-input-sample-report.png",
          alt: "Sample company valuation report — legacy illustration",
        },
        paragraphs: [
          "Legacy report screenshot retained from the previous website. It illustrates the earlier report format and is not an updated sample report.",
          "Download a sample company valuation report to see the structure, contents, and level of detail.",
          "View Sample Report",
        ],
      },
      {
        id: "estimator-premium",
        title: "Valuatum Estimator Premium",
        paragraphs: [
          "While the basic version of our company valuation tool is completely free, we also offer a premium version. With premium you get your company logo on business valuation reports and the option to decide which tables, figures, and graphs to display. You can also create additional user credentials and allow your customers access to the system.",
          "For premium customers we can also build customized report templates at a reasonable one-time fee.",
          "The previous site listed Premium plans starting at 50 EUR per month with an annual subscription. Contact us for current pricing.",
          "If you are interested to hear more, please contact us at contact@valuatum.com.",
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
        title: "Premium Features Include",
        bullets: [
          "Custom Branding: Your company logo on all company valuation reports",
          "Customizable Views: Choose which tables, figures, and graphs appear",
          "Multiple Users: Create additional user credentials for team members or clients",
          "Client Access: Allow your own customers access to the company valuation software",
          "Custom Report Templates: Available for an additional one-time fee",
          "Priority Support: Get faster response times from our support team",
        ],
      },
      {
        id: "ready-to-upgrade",
        title: "Ready to Upgrade?",
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
        title: "More Resources",
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
          "The previous site listed these Estimator Premium subscription prices. Confirm current plans with Valuatum before ordering.",
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
    title: "Key Features",
    description:
      "Explore key features like editable assumptions, scenarios, peer comparisons, and valuation report export.",
    eyebrow: "Solutions",
    intro:
      "Valuatum provides you Valuatum Estimator Freemium, a powerful business valuation tool for valuing and analyzing your company. The key features listed below combined with continuous support and development ensure that you receive a business valuation effortlessly. You can also watch a preview video of Valuatum Estimator below.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        bullets: [
          "Create automatic valuation reports and estimates",
          "Compare your business with up to 200,000 peer companies",
          "Create and modify your own scenarios with easy-to-use tools",
          "Discover the value of your company using a wide selection of valuation methods",
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
          title: "Valuatum Estimator Key Features",
        },
      },
      {
        id: "how-does-the-system-work",
        title: "How Does The System Work?",
        paragraphs: [
          "The business valuation and analysis system is designed for professional organizations and individual users. Enter financial figures, generate estimates, review assumptions, and create a report.",
          "Our business valuation tool utilises many commonly used valuation methods to calculate the value of the company. Historical figures, industry data and future estimates are combined to ensure the reliability of the valuation. The specific methods and their weights in the final valuation are determined dynamically based on the financial situation of the company. The use of the various methods is thoroughly explained in the generated report. For further information about company valuation, please see the valuation methods page.",
        ],
        bullets: [
          "Enter your company's financials through our online data form and save to Valuatum database",
          "Valuatum system creates a valuation estimate using several multiples valuation methods.",
          "Access your data through the web interface View key figures and detailed financial statement data Generate automatic estimates and customise them based on your own analysis Generate a detailed valuation report",
        ],
        image: {
          src: "/legacy-assets/legacy-ProductFeatures_kuuva-1024x519.png",
          alt: "Business valuation tool workflow — legacy illustration",
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
        title: "Related Pages",
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
    title: "User Manual",
    description:
      "Step-by-step instructions for entering data, editing assumptions, and creating valuation reports in Valuatum Tools.",
    eyebrow: "Valuatum Estimator guide",
    intro:
      "This guide explains the established Valuatum Estimator interface: entering financial data, generating and adjusting forecasts, creating reports, and reviewing formulas. The screenshots show the legacy interface. Contact support if your current service looks different; customer service answers during regular European business hours.",
    sections: [
      {
        id: "notice-that-the-data-can-be-entered-in-one-minute",
        title: "Notice that the data can be entered in one minute!",
        paragraphs: [
          "Although we describe in detail how to enter data and use the Valuatum Estimator, getting a valuation report is very quick and easy. Registration information and financial data can be entered even in one minute. To speed up data entry, you can enter a summary of items only for one of the subitem.",
          'See more in "Entering your own data" section.',
        ],
      },
      {
        id: "log-into-the-system",
        title: "Log into the system",
        paragraphs: [
          "After ordering the product you will receive username and password. Just insert these to the boxes and log in. In case you have forgotten the username and/or password, click 'I forgot my password' and follow the given instructions.",
        ],
        image: {
          src: "/legacy-assets/legacy-kirjautuminen.png",
          alt: "Valuatum Estimator login screen — legacy illustration",
        },
      },
      {
        id: "personal-info",
        title: "Personal Info",
        paragraphs: [
          "By clicking 'Personal Info' on the ribbon you can access and modify your own user account's basic information. The most important part of own information is the email address: in case you forget your password, we'll send instructions on how to restore it to this address. The fields marked with a red asterisk are required; e.g. phone number and address are optional. Valuatum does not give any user data, including contact information, to third parties. Valuatum may contact you with issues regarding the system (e.g. problems and important issues) via email.",
        ],
        image: {
          src: "/legacy-assets/legacy-basic-information.png",
          alt: "Personal information form in Valuatum Estimator — legacy illustration",
        },
      },
      {
        id: "changing-the-password",
        title: "Changing the Password",
        paragraphs: [
          "Under the 'Personal Info' tab you can find a separate tab 'Password'. Here you can change the password associated with your user account; the old password is needed for doing this. Simply insert your old password, the new password twice and click update, and the password is changed. The original guide described a legacy interface without stated password length or character requirements. Follow the requirements shown in the service you use and avoid short, easy-to-guess passwords. In case you have forgotten the password, click 'I forgot my password' in the log-in page and follow the instructions.",
        ],
        image: {
          src: "/legacy-assets/legacy-password.png",
          alt: "Password change form in Valuatum Estimator — legacy illustration",
        },
      },
      {
        id: "entering-your-own-data",
        title: "Entering your own data",
        image: {
          src: "/legacy-assets/legacy-estimator_data_entry.png",
          alt: "Financial data entry form with income statement and balance sheet fields — legacy illustration",
        },
        paragraphs: [
          "Go to the tab 'Data entry' to enter your own financial data. At the top of the page you will find instructions for using the page. If input of a cell is incorrect, the cell will be colored red. When the input value in financial data cells has an unexpected sign (e.g. negative net sales), the cell will be colored pink – the model can still be saved. By hovering the cursor above the cell, a note that the value has usually the opposite sign is shown. When entering data, check the following aspects below. If there are any incorrect inputs, the data will not be saved, and you are asked to correct the data.",
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
        title: "The data can be entered in one minute!",
        paragraphs: [
          "To speed up data entry, you can enter a summary of items only for one of the subitem. For example, you can enter the value of Intangible Assets total for the item of Other capitalised longterm expenditures. This shortcut was described in the original guide as a way to create a first estimate. Review the resulting figures and add the full financial information when it is available.",
          "If you want the report to be even more accurate, you can always return to the 'Data entry' page and complete the rest of the financial information.",
        ],
        image: {
          src: "/legacy-assets/legacy-Screenshot-Estimaattorin-tutoriaaliin.jpg",
          alt: "Example of entering summary figures for a quick valuation — legacy illustration",
        },
      },
      {
        id: "company-views",
        title: "Company Views",
        paragraphs: [
          "After entering your data, the figures are accessible in the 'Company Views' page. This page displays the inserted data and different calculations based on them. Here you can also generate financial estimates for the company and generate automated valuation reports based on the data. These features are discussed in more detail below.",
        ],
      },
      {
        id: "generate-estimates",
        title: "Generate Estimates",
        image: {
          src: "/legacy-assets/legacy-CV-overview.png",
          alt: "Company Views page showing financial data, estimates, and report generation — legacy illustration",
        },
        paragraphs: [
          "The power of Valuatum system is within the automatic estimate generation and the ability to change them. It is essential to generate the estimates before generating the valuation report. The estimate generation uses the financial figures entered through the 'Data entry' page and creates forecasts for the following years based on a set of predetermined rules. The forecast years are marked with an e next to them. Under the year, the ending of the fiscal year is marked (e.g. 2014/12 means that the fiscal year ended in December 2014). Clicking the arrows allows user to move forwards and backwards in the table.",
        ],
      },
      {
        id: "changing-the-estimates",
        title: "Changing the Estimates",
        paragraphs: [
          "After generating the estimates, you can make changes to them by clicking 'Change estimates'. All the numbers displayed in blue font can be changed. Click the number, insert the new value and click the update button or press Enter. Some numbers are shown in black – these cannot be changed directly, as they are calculated from other values (e.g. net earnings, balance sheet total).",
          "It is possible to change the value of single income statement or balance sheet items, but using estimate parameters is usually much more efficient. Estimate parameters are in the section 'Estimate Parameters' on this page. Changing estimates is optional. Review the automatic forecasts to decide whether they fit the company before using the valuation.",
        ],
        image: {
          src: "/legacy-assets/legacy-change-estimates_1.png",
          alt: "Editing forecast estimates with editable blue-highlighted cells — legacy illustration",
        },
      },
      {
        id: "generate-valuation-report",
        title: "Generate Valuation Report",
        paragraphs: [
          "Legacy report screenshot retained from the previous website. It illustrates the earlier report format and is not an updated sample report.",
          "You can create a valuation report at any point after generating the estimates. Simply click 'Generate Valuation Report' button and a PDF valuation report of your company will be created based on the actualized financial data and estimates.",
        ],
        image: {
          src: "/legacy-assets/legacy-geenrate-valuation-report.png",
          alt: "Generate Valuation Report button in Valuatum Estimator — legacy illustration",
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
          alt: "Formula detail window showing how a financial variable is calculated — legacy illustration",
        },
      },
      {
        id: "formulas-used-in-variables",
        title: "Formulas Used in Variables",
        paragraphs: [
          "Most of the variables are calculated using only basic arithmetic operators (+, -, /, *, ^). However, some variables require more complicated calculations. The table below explains the various functions used in the more complicated formulas.",
        ],
        bullets: [
          "Function — Action",
          "abs(x) — Gives the absolute value of x",
          "ceil(x) — Rounds the number up to the closest integer",
          "exp(x), e^x — Calculates e to the power of x",
          "floor(x) — Rounds the number down to the closest integer",
          "if(c,x,y) — If c is true, returns x, otherwise returns y",
          "log(x), ln(x) — Calculates the natural logarithm of the number",
          "max(x,y) — Returns whichever of x and y is larger",
          "min(x,y) — Returns whichever of x and y is smaller",
          "round(x) — Rounds x to the closest integer using conventional rounding rules",
          "sqrt(x) — Calculates the square root of x",
        ],
      },
      {
        id: "estimate-parameters",
        title: "Estimate Parameters",
        paragraphs: [
          "Single row items in the balance sheet and income statement can be changed directly, but often the easier way is to use the estimate parameters that can be found in the 'Financial Statements' tab below the income statement and balance sheet. Parameter values can be changed using the process outlined in section 'Company Views' under the headline 'Changing the Estimates'.",
        ],
        image: {
          src: "/legacy-assets/legacy-estimate-parameters.png",
          alt: "Estimate parameters table with growth, EBIT, depreciation, and tax rate fields — legacy illustration",
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
        title: "Valuation method used by Valuatum",
        image: {
          src: "/legacy-assets/legacy-valuaatiopolku_valuatum_en1.png",
          alt: "Valuation method selection flow diagram showing paths for profitable and unprofitable companies — legacy illustration",
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
        title: "Balancing Assets and Equity/Liabilities",
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
          "This case is significantly simpler: the difference between the sides of the balance sheet is added to the item 'Cash (generated)'.",
        ],
      },
      {
        id: "related-pages",
        title: "Related Pages",
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
    title: "PDF-Based Company Valuation",
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
        title: "How This Company Valuation Software Helps",
        bullets: [
          "Eliminates manual data entry: Our company valuation calculator automatically extracts financial data from PDFs, generates forecasts, and creates ready-to-use reports.",
          "Full control over assumptions: Customize forecasts and scenarios after the baseline business valuation is created.",
          "Multiple valuation methods: Including company valuation DCF, multiples analysis, and market-based approaches.",
        ],
      },
      {
        id: "key-benefits-of-our-company-value-calculator",
        title: "Key Benefits of Our Company Value Calculator",
        bullets: [
          "Use a company’s PDF financial statements as the starting point, including companies outside Finland and Denmark; extraction depends on the file and available financial information",
          "Comprehensive company valuation using five valuation methods where applicable",
          "Key financial metrics and credit risk analysis included",
          "Industry comparisons and peer benchmarking",
          "Credit-based access with free and paid options — check the service for current allowances and prices",
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
        title: "AI-Powered Company Valuation for Businesses of All Sizes",
        diagram: "pdf-process",
        paragraphs: [
          "Our company valuation software offers multiple ways to analyze and value companies quickly and professionally. From AI-powered PDF extraction to manual data input and ready-made financial data for selected countries, the system reads financial figures, builds forward-looking forecasts, and produces clear visual reports that support better business valuation decisions.",
          "Explore each company valuation tool in more detail and choose the method that works best for calculating your company value from our solutions overview.",
        ],
        bullets: [
          "Upload PDF — Drop a financial statement PDF into the tool.",
          "Valuation report with forecasts — The system generates forecasts and a valuation report automatically.",
          "Adjust numbers — Modify financial figures to fit your scenario.",
          "Download modified report — Download the report with your adjusted numbers.",
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
        title: "How Our Company Valuation Calculator Works",
        paragraphs: [
          "Upload any PDF financial statement (from 2 pages to full annual reports) to start your company valuation",
        ],
        image: {
          src: "/legacy-assets/legacy-pdf-import-upload.png",
          alt: "PDF upload for company valuation — legacy illustration",
        },
      },
      {
        id: "automated-extraction-of-financial-data-from-a-pdf-statement-legacy-screenshot",
        title:
          "Automated extraction of financial data from a PDF statement (legacy screenshot)",
        image: {
          src: "/legacy-assets/legacy-pdf-import-processing.png",
          alt: "Automated extraction of financial data from a PDF statement — legacy illustration",
        },
        paragraphs: [
          "Our AI-powered company valuation software extracts and processes the financial data automatically",
          "The company value calculator generates forecasts and calculates valuations using multiple methods including DCF",
        ],
      },
      {
        id: "company-value-calculation-results-legacy-screenshot",
        title: "Company value calculation results (legacy screenshot)",
        image: {
          src: "/legacy-assets/legacy-pdf-import-results.jpg",
          alt: "Company value calculation results — legacy illustration",
        },
      },
      {
        id: "professional-company-valuation-report-legacy-screenshot",
        title: "Professional company valuation report (legacy screenshot)",
        image: {
          src: "/legacy-assets/legacy-pdf-import-report.png",
          alt: "Professional company valuation report — legacy illustration",
        },
        paragraphs: [
          "Legacy report screenshot retained from the previous website. It illustrates the earlier report format and is not an updated sample report.",
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
        title: "Why Choose Our Company Valuation Tool?",
        bullets: [
          "Instant AI-powered analysis: Calculate company value in minutes, not hours",
          "Customizable forecasts: Adjust assumptions to reflect your specific business valuation needs",
          "Comprehensive methodology: Company valuation DCF, multiples, and market-based approaches combined",
          "Credit risk assessment: Credit score and default probability included",
          "Professional PDF reports: Ready for presentations, negotiations, or documentation",
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
        title: "Related Pages",
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
            href: "/solutions/finnish-company-valuation",
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
    title: "Danish Company Valuation",
    description:
      "Search Danish companies and download free valuation and credit risk reports when available. No financial statements needed.",
    eyebrow: "Solutions",
    intro:
      "Find a Danish company and access credit risk and valuation reports through CreditReports.dk. Start with a company name or CVR number; you do not need to upload financial statements.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        links: [
          {
            label: "Main Page",
            href: "https://creditreports.dk/en/",
          },
        ],
      },
      {
        id: "valuatum-tools-in-creditreports-dk",
        title: "Valuatum Tools in Creditreports.dk",
        paragraphs: [
          "Valuatum Tools is also used in the Creditreports.dk service. The platform includes data from over 400,000 Danish companies.",
          'You can find, for example, the financial data and valuation details of GN STORE NORD A/S by clicking here. After opening the company, click the "Full version" button and then choose the Valuation page.',
          "You can search for any Danish company in Creditreports.dk's business directory using the search bar on the front page.",
          "To start using Valuatum Tools directly, you can also go to our registration page.",
          "Register",
        ],
        links: [
          {
            label: "Creditreports.dk",
            href: "https://creditreports.dk",
          },
          {
            label: "here",
            href: "https://companies.creditreports.dk/en/companies/330011/gn-store-nord-as/",
          },
          {
            label: "front page",
            href: "https://companies.creditreports.dk",
          },
          {
            label: "Register",
            href: "https://platform.creditreports.dk/AspAndUserCreation.action?templateAspQueryKey=CreditAnalysis&popup=true",
          },
        ],
      },
      {
        id: "features",
        title: "Features",
        bullets: [
          "Access data for 400,000+ Danish companies",
          "Credit risk reports with free monthly access and paid options",
          "Company valuation reports — see the service for current access terms",
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
        title: "Related Pages",
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
          "CreditReports.dk offers company search, financial data, report ordering, automatically generated forecasts, and editable scenarios. Its current website lists free monthly reports and paid options. Check the service for current limits and pricing.",
        ],
        links: [
          {
            label: "Search Danish companies",
            href: "https://companies.creditreports.dk/en/",
          },
          {
            label: "Create a CreditReports.dk account",
            href: "https://platform.creditreports.dk/AspAndUserCreation.action?templateAspQueryKey=CreditAnalysis&popup=true",
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
    title: "Finnish Company Valuation",
    description:
      "Order a valuation report for a Finnish limited company. Review financials, adjust assumptions, and download the report.",
    eyebrow: "Solutions",
    intro:
      "Access professional company valuations for Finnish limited companies directly online through the Valuatum system.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        paragraphs: [
          "The system allows you to retrieve financial statement data, adjust forecasts and generate valuation reports for over 200,000 Finnish companies.",
          "The previous website listed a price of 30 EUR per company import, including access to the selected company’s data, forecasts, and valuation tools. Check the service for its current price before ordering.",
        ],
        links: [
          {
            label: "Register Now",
            href: "https://valuation-finland.valuatum.com/AspAndUserCreation.action?templateAspQueryKey=CVFinland&popup=true",
          },
        ],
      },
      {
        id: "what-you-get",
        title: "What You Get",
        bullets: [
          "Financial statement data and key financial metrics – You receive structured historical financial statements and key financial metrics for the selected company.",
          "Automated company valuation – The system calculates company value using established valuation approaches. Multiple valuation paths are available and presented transparently. More information about our valuation logic can be found on our valuation methods page.",
          "Editable forecasts – Users can modify key assumptions such as growth, profitability and discount rates. Changes are reflected directly in valuation results.",
          "Valuation report – A clear valuation report is generated based on the selected assumptions and methods. The report can be used for internal analysis, decision-making or documentation purposes. See a demo report here .",
          "Industry comparisons – All financial metrics of the selected company versus industry medians and averages.",
        ],
        links: [
          {
            label: "valuation methods",
            href: "/resources/company-valuation/methods",
          },
          {
            label: "Legacy example: See a demo report here",
            href: "https://www.valuatum.com/nokiavaluationreport/",
          },
        ],
      },
      {
        id: "how-it-works",
        title: "How It Works",
        bullets: [
          "Register – Create a user account to access the valuation system.",
          "Select a company – Search any Finnish company by name.",
          "Review data and forecasts – Inspect historical financial data and adjust forecasts and assumptions as needed.",
          "Generate valuation report – View valuation results and generate a valuation report based on automatic forecasts or your own estimates.",
        ],
        links: [
          {
            label: "Create a user account",
            href: "https://valuation-finland.valuatum.com/AspAndUserCreation.action?templateAspQueryKey=CVFinland&popup=true",
          },
        ],
      },
      {
        id: "related-pages",
        title: "Related Pages",
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
            href: "/contact-finland",
          },
        ],
      },
      {
        id: "access-the-service",
        title: "Open the Finnish valuation service",
        links: [
          {
            label: "Register for Finnish company valuation",
            href: "https://valuation-finland.valuatum.com/AspAndUserCreation.action?templateAspQueryKey=CVFinland&popup=true",
          },
          {
            label: "Sign in and search Finnish companies",
            href: "https://valuation-finland.valuatum.com/PPVCompanySearch.action?",
          },
          {
            label: "Finnish-language valuation service",
            href: "https://arvonmaaritys.fi/",
          },
        ],
      },
      {
        id: "credit-risk-service",
        title: "Finnish credit risk reports",
        paragraphs: [
          "Luottoriskit.fi provides Finnish company financial indicators and purchasable credit risk reports with standardized financial statements, credit ratings, and risk information.",
        ],
        links: [
          {
            label: "Explore Finnish credit risk insights",
            href: "https://luottoriskit.fi/fi/",
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
    title: "International Company Valuation",
    description:
      "Explore current PDF and manual valuation options for international companies and ask about upcoming company-data coverage beyond Denmark and Finland.",
    eyebrow: "International coverage",
    intro:
      "We are preparing broader company-data coverage beyond Denmark and Finland. PDF-based valuation and manual input are already available for companies where you provide the financial statements or figures. Contact us about the country and company you need.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        links: [
          {
            label: "Learn More",
            href: "/contact-international",
          },
        ],
      },
      {
        id: "what-to-expect",
        title: "What to Expect",
        bullets: [
          "Valuation reports for companies worldwide",
          "Globally sourced financial data",
          "Professional analysis and forecasts",
          "Credit risk assessment",
        ],
      },
      {
        id: "stay-informed",
        title: "Stay Informed",
        paragraphs: [
          "Contact us about international coverage to be notified when this service becomes available.",
        ],
        links: [
          {
            label: "Contact us about international coverage",
            href: "/contact-international",
          },
        ],
      },
      {
        id: "related-pages",
        title: "Related Pages",
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
        title: "Current options and upcoming coverage",
        paragraphs: [
          "The earlier website gave an indicative price range of €50–100 per report for the planned international company-data service. This was an estimate, not a confirmed current offer. Contact us to discuss availability and pricing.",
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
            label: "Ask about international data coverage",
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
    title: "Why Do You Need Company Valuation?",
    description:
      "Learn when you need a business valuation—selling, fundraising, planning, or financing—and what inputs affect the estimate.",
    eyebrow: "Solutions",
    intro:
      "Company valuation is more than just a number — it provides a comprehensive lens through which business owners, investors, and advisors understand the true worth of an enterprise. Whether you're navigating a transaction, planning for the future, or simply seeking clarity about where your business stands, knowing your company value provides the foundation for sound decision-making.",
    sections: [
      {
        id: "who-uses-company-valuation-tools",
        title: "Who Uses Company Valuation Tools?",
        bullets: [
          "Founders & CEOs — Understand company value when preparing to raise capital, plan a sale or exit, or make strategic decisions.",
          "Buyers & Sellers — Establish a valuation estimate and review its assumptions before entering negotiations.",
          "Financial Advisors — Prepare client reports that document financial data, forecasts, valuation methods, and scenarios.",
          "Investors — Screen potential investments with consistent valuation models and compare the assumptions behind each opportunity.",
          "Accountants — Use documented valuations as supporting analysis for audit, tax, and compliance work, with professional review of the purpose, assumptions, and applicable requirements.",
        ],
      },
      {
        id: "overview",
        title: "Overview",
        paragraphs: [
          "A reliable business valuation answers fundamental questions: What is this company worth today? How does it compare to peers? What drives its value, and what risks might erode it? These insights matter not only during major events like sales or fundraising, but also as part of ongoing strategic management. A proper company valuation calculator makes this analysis accessible to businesses of all sizes.",
          "Company valuation is useful in many different situations, for example:",
          'If you wish to learn more, visit our "What Is Company Valuation?" guide or explore the specific valuation methods we use.',
        ],
        bullets: [
          "To understand the true company value and growth potential of your business",
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
        title: "Business Sales & Acquisitions",
        paragraphs: [
          "Whether you are buying or selling a business, an accurate company valuation is essential for fair negotiations and informed decision-making. Sellers need to know their floor price — the minimum they should accept — while buyers need confidence that they are not overpaying. A well-supported business valuation creates a common ground for both parties and reduces the friction that often derails transactions.",
          "Consider a business owner preparing to exit after decades of building a company. Without a clear understanding of company value, they might accept an offer far below what the business is truly worth. Conversely, an acquirer evaluating multiple targets relies on consistent company valuation analysis to compare opportunities and allocate capital wisely.",
        ],
      },
      {
        id: "investment-decisions-fundraising",
        title: "Investment Decisions & Fundraising",
        paragraphs: [
          "Investors need reliable business valuations to assess opportunities, negotiate terms, and structure deals appropriately. For founders seeking capital, presenting a credible company valuation demonstrates professionalism and builds investor confidence. It shows that you understand your own business and can articulate why it deserves the valuation you are proposing.",
          "A startup seeking seed funding, for example, must justify its pre-money company value to prospective investors. An established company exploring growth equity faces similar scrutiny. In both cases, a transparent, well-documented valuation — one that shows the assumptions, forecasts, and methods used — is far more persuasive than a single unsupported number.",
        ],
      },
      {
        id: "strategic-planning-performance-tracking",
        title: "Strategic Planning & Performance Tracking",
        paragraphs: [
          "Understanding your company value helps with long-term planning, identifying growth opportunities, and measuring progress. Business valuation is not just a one-time exercise for transactions; it is a strategic tool for management. By tracking how company valuation evolves over time, leadership teams can see whether their decisions are creating or destroying value.",
          "For instance, a company investing heavily in R&D might not see immediate profit gains, but a company valuation framework can reveal whether these investments are increasing the enterprise's long-term worth. Similarly, if a business unit is underperforming, valuation analysis can quantify the drag on overall company value and inform restructuring decisions.",
        ],
      },
      {
        id: "ownership-changes-shareholder-transitions",
        title: "Ownership Changes & Shareholder Transitions",
        paragraphs: [
          "When ownership structures change — whether through partner buyouts, inheritance, divorce settlements, or employee share schemes — a fair and independent company valuation protects all parties involved. It ensures that no shareholder is disadvantaged and that transactions reflect the true worth of the equity being transferred.",
          "A family business transitioning to the next generation, for example, benefits from a clear business valuation to ensure equitable treatment among heirs. Similarly, when a co-founder exits a partnership, both sides need an objective basis for pricing the departing stake based on accurate company value.",
        ],
      },
      {
        id: "financing-lending",
        title: "Financing & Lending",
        paragraphs: [
          "Banks and lenders often require company valuations when considering loans or credit facilities. A robust business valuation gives lenders confidence in the collateral value of the business and supports more favorable borrowing terms. It also helps business owners understand how much debt their company can reasonably support.",
          "Beyond securing loans, company valuation analysis can reveal whether a company's capital structure is optimal. If the business is under-leveraged, it might be leaving growth capital on the table. If over-leveraged, refinancing or equity infusion might be prudent.",
        ],
      },
      {
        id: "company-valuation-supports-better-decisions",
        title: "Company Valuation Supports Better Decisions",
        paragraphs: [
          "While some business valuations are required for regulatory, tax, or legal reasons, the greatest value comes from using the analysis as a decision-making tool. A good company valuation does not just tell you what the business is worth — it reveals what drives that worth. Understanding the key value drivers allows management to focus on the levers that matter most.",
          "Are margins expanding or contracting? Is revenue growth accelerating? How sensitive is the company value to changes in discount rates or terminal assumptions? Answering these questions transforms business valuation from a static report into a dynamic management instrument.",
        ],
      },
      {
        id: "how-often-should-a-company-be-valued",
        title: "How Often Should a Company Be Valued?",
        paragraphs: [
          "There is no universal rule, but most well-managed companies benefit from periodic company valuation updates — at minimum annually, and more frequently if the business is growing rapidly, undergoing strategic shifts, or operating in volatile markets. Regular business valuations create a historical baseline, making it easier to spot trends and react proactively.",
          "Beyond scheduled reviews, certain events should trigger a fresh company valuation: receiving an acquisition offer, launching a fundraising round, onboarding a new partner, or experiencing a significant change in financial performance. In these moments, relying on outdated company value numbers can lead to costly missteps.",
        ],
      },
      {
        id: "how-a-company-valuation-tool-helps",
        title: "How a Company Valuation Tool Helps",
        paragraphs: [
          "Traditionally, company valuation required either expensive advisory engagements or time-consuming spreadsheet modeling. A company valuation calculator changes this equation by automating the technical work — data extraction, standardization, and calculation — while leaving strategic judgment in your hands.",
          "With modern company valuation software, you can upload financial statements, review the extracted figures, adjust assumptions to reflect your market knowledge, and generate professional business valuation reports in a fraction of the time. This accessibility means that calculating company value is no longer reserved for major transactions; it becomes a routine part of good business management.",
          "Crucially, the best company valuation tools prioritize transparency. Every input is visible and editable, so you understand exactly how the final company value was derived. This openness builds trust — whether you are presenting to investors, negotiating with buyers, or reporting to a board.",
        ],
      },
      {
        id: "get-started-with-company-valuation",
        title: "Get Started with Company Valuation",
        paragraphs: [
          "Ready to calculate your company value? Explore our business valuation solutions:",
          "Have questions? Check our FAQ.",
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

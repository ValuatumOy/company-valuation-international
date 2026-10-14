# Content migration

Source: `ValuatumOy/valuation-site-rebuild`, local clone `../legacy-site`. Review date: 14 October 2026.

All 18 canonical internal pages other than the homepage are represented in `src/content/pages.ts`. The homepage belongs to the main implementation. All 25 old page source files (including unused duplicate pages and the not-found page), routing, and content-supporting components are archived byte-for-byte under `docs/legacy-source`. `.tsx.txt` preserves source content without making archived files compilation units.

## Route coverage

| Route | Original source | Migrated coverage |
| --- | --- | --- |
| `/support` | `src/pages/Support.tsx` | Quick links, common topics, input checks, support email and information to include. |
| `/support/faq` | `src/pages/support/FAQ.tsx` | All 18 questions and answers covering workflows, PDF review, methods, scenarios, reports, pricing, troubleshooting and privacy. |
| `/about-us` | `src/pages/AboutUs.tsx` | Company history, financial software/SaaS work, larger-customer solutions, Finnish Aarre service, reference customers and company information. |
| `/privacy-policy` | `src/pages/PrivacyPolicy.tsx` | Original introduction, data collected, uses, protection, cookies, rights and contact text. |
| `/security` | `src/pages/Security.tsx` | Original processed-data list, privacy links, support details and security/data-sharing statements. |
| `/contact-finland` | `src/pages/ContactFinland.tsx` | Report-request purpose, all original enquiry fields, contact email and direct existing Finnish service. |
| `/contact-international` | `src/pages/ContactInternational.tsx` | International enquiry purpose, all original fields and email; current PDF/manual options separated from upcoming data coverage. |
| `/resources` | `src/pages/resources/Index.tsx` | Both guide descriptions and links. |
| `/resources/company-valuation/what-is-company-valuation` | `src/pages/resources/WhatIsCompanyValuation.tsx` | Definition, takeaways, value/price distinction and numerical example, use cases, method-selection workflow, five methods, video and all five FAQs. |
| `/resources/company-valuation/methods` | `src/pages/resources/CompanyValuationMethods.tsx` | Full explanation and examples for DCF, multiples, ROE/P-BV, EBIT/P-Sales and book value; assumptions, limitations, profitable/loss-making paths, weighting and all five FAQs. |
| `/solutions/manual-data-input-company-valuation` | `src/pages/solutions/ManualDataInputCompanyValuation.tsx` | Manual workflow, features, demo, old sample PDF and screenshot, Premium features, all three historical subscription prices and supporting resources. |
| `/solutions/manual-data-input-company-valuation/key-features` | `src/pages/solutions/KeyFeatures.tsx` | Feature list, preview video, workflow, legacy workflow image, method selection and supporting links. |
| `/solutions/manual-data-input-company-valuation/user-manual` | `src/pages/solutions/UserManual.tsx` | Full legacy guide: login, personal info, password, data entry, fiscal dates, balancing, Company Views, forecasts, editable estimates, reports, formulas, all ten function/action rows, estimate parameters and balancing logic. All 11 original guide images retained. |
| `/solutions/pdf-based-company-valuation` | `src/pages/solutions/PDFBasedCompanyValuation.tsx` | PDF input, extraction and editable forecasts, methods, credit risk and benchmarks, four process steps, all four legacy screenshots, video, benefits and service links. |
| `/solutions/danish-company-valuation` | `src/pages/solutions/DanishCompanyValuation.tsx` | Existing company search and reports, CreditReports.dk coverage, GN Store Nord example, directory and registration links, features and current-access qualification. |
| `/solutions/finnish-company-valuation` | `src/pages/solutions/FinnishCompanyValuation.tsx` | Existing company-data service, historical coverage/price, five output categories, four workflow steps, old Nokia demo and exact service registration/login paths. |
| `/solutions/international-company-valuation` | `src/pages/solutions/InternationalCompanyValuation.tsx` | Upcoming wider company-data coverage, original planned outputs, old indicative price, enquiry link, current PDF/manual options and related resources. |
| `/solutions/why-do-you-need-company-valuation` | `src/pages/solutions/WhyCompanyValuation.tsx` and `src/pages/Index.tsx` | Original detailed transaction, fundraising, planning, ownership and financing scenarios, decision drivers, update frequency, tool explanation and video; all five original homepage audiences: founders/CEOs, buyers/sellers, financial advisors, investors and accountants. |

## Legacy URL aliases

The existing router redirected these URLs. They should remain permanent redirects to their current canonical destinations:

| Old URL | Canonical destination |
| --- | --- |
| `/company-valuation` | `/resources/company-valuation/what-is-company-valuation` |
| `/company-valuation-methods` | `/resources/company-valuation/methods` |
| `/what-is-valuation` | `/resources/company-valuation/what-is-company-valuation` |
| `/valuation-methods` | `/resources/company-valuation/methods` |
| `/solutions/manual-data-input` | `/solutions/manual-data-input-company-valuation` |
| `/solutions/manual-data-input/key-features` | `/solutions/manual-data-input-company-valuation/key-features` |
| `/solutions/manual-data-input/user-manual` | `/solutions/manual-data-input-company-valuation/user-manual` |
| `/solutions/pdf-based-valuation` | `/solutions/pdf-based-company-valuation` |
| `/solutions/why-do-you-need-valuation` | `/solutions/why-do-you-need-company-valuation` |
| `/key-features` | `/solutions/manual-data-input-company-valuation/key-features` |
| `/user-manual` | `/solutions/manual-data-input-company-valuation/user-manual` |

## Service URL evidence

Registration and login URLs are taken directly from the old `Header.tsx`, solution pages and homepage. These destinations remain discoverable on migrated solution pages. No report was generated, no account was created, and no form or purchase was submitted.

- PDF workflow: `https://valuation.valuatum.com/`; existing login `https://pdfanalysis.valuatum.com/Login.action`.
- Manual registration: `https://estimator.valuatum.com/AspAndUserCreation.action?templateAspQueryKey=PPVTemplate&userType=&popup=true`; login `https://estimator.valuatum.com/`; demo `https://estimator-demo.valuatum.com`.
- Finland registration: `https://valuation-finland.valuatum.com/AspAndUserCreation.action?templateAspQueryKey=CVFinland&popup=true`; search/login `https://valuation-finland.valuatum.com/PPVCompanySearch.action?`.
- Denmark directory: `https://companies.creditreports.dk/en/`; registration `https://platform.creditreports.dk/AspAndUserCreation.action?templateAspQueryKey=CreditAnalysis&popup=true`; information `https://creditreports.dk/en/`.
- Current Finnish-language site supplied by the user: `https://arvonmaaritys.fi/`.

Read-only HEAD checks on 14 October 2026 confirm only HTTP accessibility, not successful login, account creation, ordering or report quality:

| Destination | HTTP result | Final URL |
| --- | --- | --- |
| [PDF valuation](https://valuation.valuatum.com/) | 200 | https://valuation.valuatum.com/ |
| [Existing PDF login](https://pdfanalysis.valuatum.com/Login.action) | 200 | https://pdfanalysis.valuatum.com/Login.action |
| [Manual valuation](https://estimator.valuatum.com/) | 200 | https://estimator.valuatum.com/ |
| [Manual demo](https://estimator-demo.valuatum.com) | 200 | https://estimator-demo.valuatum.com |
| [Finnish valuation](https://valuation-finland.valuatum.com/) | 200 | https://valuation-finland.valuatum.com/ |
| [Danish company directory](https://companies.creditreports.dk/en/) | HTTP Error 403: Forbidden | Not confirmed |
| [Danish platform](https://platform.creditreports.dk/) | HTTP Error 403: Forbidden | Not confirmed |
| [Legacy sample PDF](https://www.valuatum.com/wp-content/uploads/sites/10/2025/11/DemoCompanyValuationReport.pdf) | 200 | https://old-wp.valuatum.com/wp-content/uploads/sites/10/2025/11/DemoCompanyValuationReport.pdf |
| [Legacy demo report](https://www.valuatum.com/democompanyvaluationreport/) | 200 | https://www.valuatum.com/democompanyvaluationreport/ |
| [Legacy Finnish Nokia report](https://www.valuatum.com/nokiavaluationreport/) | 200 | https://www.valuatum.com/nokiavaluationreport/ |
| [Legacy Danish Jysk report](https://www.valuatum.com/jysk_companyvaluation/) | 200 | https://www.valuatum.com/jysk_companyvaluation/ |
| [Legacy international Amazon report](https://www.valuatum.com/amazonvaluationreport/) | 200 | https://www.valuatum.com/amazonvaluationreport/ |

The official [CreditReports.dk page](https://www.creditreports.dk/en/) was also read: it explicitly lists a company valuation tool, forecasts, editable scenarios, 400,000+ company comparative data, free monthly reports and paid options. Therefore the old unrestricted “free Danish reports” wording was qualified. The PDF service is a JavaScript page; successful HTTP access does not establish current free-credit quantities. The user confirmed both country ordering and PDF reports already work.

## Historical reports and assets

Earlier report formats are explicitly marked as legacy examples. The new `/sample-report` page provides a public library of the original manual PDF, demo-company, Nokia, Jysk, and Amazon report links. Its new report illustration is clearly labeled as a fictional example with illustrative figures, not a generated report or real company valuation.

| Example | Original location | Treatment |
| --- | --- | --- |
| Manual sample report | `https://www.valuatum.com/wp-content/uploads/sites/10/2025/11/DemoCompanyValuationReport.pdf` | Original PDF URL retained on manual solution page; tracking query removed. Screenshot retained and labeled legacy. |
| Demo company report | `https://www.valuatum.com/democompanyvaluationreport/` | Original homepage example retained in the public sample-report library and labeled historical. |
| Finnish Nokia report | `https://www.valuatum.com/nokiavaluationreport/` | Original example retained and labeled legacy on Finnish page. |
| Danish Jysk report | `https://www.valuatum.com/jysk_companyvaluation/` | Original homepage example retained in the public sample-report library and labeled historical. |
| International Amazon report | `https://www.valuatum.com/amazonvaluationreport/` | Historical example retained in the public sample-report library; it is not evidence that broader company-data coverage is already available. |

All eight old repo bitmap assets and three brand assets are copied under `public/legacy-assets` with `legacy-` prefixes. Four PDF-workflow images and the manual report/demo images are used as historical workflow illustrations. The old background textures are preserved as assets but need not define the new design.

Remote asset download evidence is in `docs/legacy-asset-manifest.json`: 14 of 15 original remote images were copied locally. The old Evli logo URL returns 404; its client name is preserved as text instead of rendering a broken image. Enlight Research and Pörssisäätiö logos, the feature workflow image and every user-manual image were retained.

## Editorial changes and review items

- Broader international preloaded company data remains upcoming. Finland and Denmark are available, and PDF/manual input already support user-provided financials. The new copy preserves this distinction.
- Historical prices are retained as historical references: Finland €30 per company import; international indicative €50–100; Premium 100 EUR monthly, 240 EUR for three months and 600 EUR annually. Current price/credits should be checked in the service. No new prices were inferred.
- Old report screenshots and manual-interface screenshots are visibly identified as legacy illustrations. Videos remain linked to their original YouTube IDs.
- Legacy contact forms used `window.location.href = mailto:...` and did not submit to a server. New content retains all enquiry fields and direct email links; the UI must be honest about opening the email client.
- The old manual key-features registration button linked the PDF login. It now points to the exact existing manual registration URL.
- Unsupported superlatives about reliability were softened. The old manual shortcut no longer asserts that incomplete data cannot affect valuation; automatic forecasts are presented for review. Historical password instructions are identified as legacy, without claiming current requirements.
- The company and peer counts outside Denmark, named customer relationships, Aarre/Bisnode provider detail and exact method weights/default rules come from the old copy and have not been independently recertified. They should be checked before stronger marketing claims are made.
- Privacy and security claims are retained from the original pages, including the statement that data is not shared with third parties. This migration did not audit actual processors, PDF/AI providers, retention, cookie use or security controls. Do not strengthen those statements or imply an audit.
- The book-value guide now distinguishes the accounting value of assets minus liabilities from realizable sale proceeds and a guaranteed valuation floor. Asset-sale analysis separately considers realizable assets, liabilities, and disposal costs. This correction follows the distinction between book values and distress-sale proceeds in [Aswath Damodaran’s NYU Stern value-driver notes](https://pages.stern.nyu.edu/adamodar/New_Home_Page/littlebook/decliningvaluedrivers.htm) and [Chapter 13: Valuing Declining Firms](https://pages.stern.nyu.edu/~adamodar/pdfiles/CLC/slides/Ch13.pdf).
- The yellow method-selection path now explicitly refers to positive EBITDA rather than calling it positive operating profit. The existing `/resources/company-valuation/methods#faq-methods` anchor targets the first methods FAQ.
- The five original homepage audiences are publicly retained in the why-valuation guide. Accountants’ audit, tax, and compliance use is described as supporting analysis requiring professional review, without implying that the tool certifies suitability for those purposes.
- Other guide examples and limitations remain from the original content. Precise legacy defaults and loss-making-company method paths should be reviewed by the financial product owner as part of the content refresh.

## Focused verification

- All 18 canonical page routes represented; route paths and section IDs unique.
- All internal page links and related-page references resolve to migrated canonical pages or the homepage.
- Every rendered local image path exists.
- 35 archived source files verified byte-for-byte against the old repo.
- Legacy service/report URLs checked read-only; results and limitations recorded above.
- No app, UI components, CSS, package or configuration files edited by content migration.

import Link from "next/link";
import { Arrow, Mark } from "./icon";
import { serviceLinks } from "@/lib/site";

const groups = [
  {
    title: "Solutions",
    links: [
      ["PDF statement valuation", "/solutions/pdf-based-company-valuation"],
      ["Manual data input", "/solutions/manual-data-input-company-valuation"],
      ["Finnish companies", serviceLinks.finland],
      ["Danish companies", "/solutions/danish-company-valuation"],
      ["International coverage", "/solutions/international-company-valuation"],
    ],
  },
  {
    title: "Explore",
    links: [
      ["Valuation guides", "/resources"],
      ["Valuation methods", "/resources/company-valuation/methods"],
      ["Why value a company?", "/solutions/why-do-you-need-company-valuation"],
      [
        "Key features",
        "/solutions/manual-data-input-company-valuation/key-features",
      ],
      [
        "User manual",
        "/solutions/manual-data-input-company-valuation/user-manual",
      ],
    ],
  },
  {
    title: "Valuatum",
    links: [
      ["About us", "/about-us"],
      ["Contact", "/contact-international"],
      ["Finland — arvonmaaritys.fi", serviceLinks.finland],
      ["Support", "/support"],
      ["Frequently asked questions", "/support/faq"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link className="brand" href="/">
            <Mark />
            <span>
              company<span className="brand-light">valuation</span>
              <small>by Valuatum</small>
            </span>
          </Link>
          <p>
            A clearer view of business value.
            <br />
            Built on financial expertise since 2000.
          </p>
          <a className="text-link" href="mailto:company-valuation@valuatum.com">
            Talk to our team <Arrow diagonal />
          </a>
        </div>
        {groups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2>{group.title}</h2>
            {group.links.map(([label, href]) => href.startsWith("https:") ? (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
            ) : (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>
        ))}
      </div>
      <div className="footer-wordmark" aria-hidden="true">
        value, understood.
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Valuatum Oy</span>
        <div>
          <Link href="/privacy-policy">Privacy policy</Link>
          <Link href="/security">Security</Link>
          <a href="https://www.valuatum.com/">
            Valuatum.com <Arrow diagonal />
          </a>
        </div>
        <span>Made in Finland. Built for business.</span>
      </div>
    </footer>
  );
}

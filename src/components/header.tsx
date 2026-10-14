"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Arrow, Mark } from "./icon";

const links = [
  { label: "Solutions", href: "/#solutions" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Resources", href: "/resources" },
  { label: "About us", href: "/about-us" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="site-header">
      <Link className="brand" href="/" onClick={() => setOpen(false)}>
        <Mark />
        <span>
          company<span className="brand-light">valuation</span>
          <small>by Valuatum</small>
        </span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={path === link.href ? "active" : ""}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions" data-ui-actions>
        <Link className="header-contact" href="/contact-international">
          Contact
        </Link>
        <Link className="button button-small" href="/#solutions">
          Get a valuation <Arrow />
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          title={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>
      {open && (
        <nav
          className="mobile-nav"
          id="mobile-navigation"
          aria-label="Mobile navigation"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
              <Arrow />
            </Link>
          ))}
          <Link href="/contact-international" onClick={() => setOpen(false)}>
            Contact
            <Arrow />
          </Link>
        </nav>
      )}
    </header>
  );
}

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
        {links.map((link) => {
          const NavLink = link.href.includes("#") ? "a" : Link;
          return <NavLink
            key={link.label}
            href={link.href}
            className={path === link.href ? "active" : ""}
          >
            {link.label}
          </NavLink>;
        })}
      </nav>
      <div className="header-actions" data-ui-actions>
        <Link className="header-contact" href="/contact-international">
          Contact
        </Link>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- Native anchors also scroll when the destination hash is already current. */}
        <a className="button button-small" href="/#solutions">
          Get a valuation <Arrow />
        </a>
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
          {links.map((link) => {
            const NavLink = link.href.includes("#") ? "a" : Link;
            return <NavLink
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
              <Arrow />
            </NavLink>;
          })}
          <Link href="/contact-international" onClick={() => setOpen(false)}>
            Contact
            <Arrow />
          </Link>
        </nav>
      )}
    </header>
  );
}

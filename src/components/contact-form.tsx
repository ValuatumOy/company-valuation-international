"use client";

import { useState, type FormEvent } from "react";
import { Arrow } from "./icon";

export function ContactForm({ finland = false }: { finland?: boolean }) {
  const [opened, setOpened] = useState(false);
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = finland
      ? `Finnish company valuation enquiry: ${form.get("finnishCompany")}`
      : `Company valuation enquiry: ${form.get("country")}`;
    const body = `Name: ${form.get("name")}\nEmail: ${form.get("email")}\nCompany: ${form.get("company") || "Not specified"}\n${finland ? `Finnish company to value: ${form.get("finnishCompany")}` : `Country: ${form.get("country")}`}\n\nMessage:\n${form.get("message") || "No additional message"}`;
    window.location.href = `mailto:company-valuation@valuatum.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }
  return (
    <form className="contact-form" onSubmit={prepareEmail}>
      <h2>Tell us what you need</h2>
      <p>
        This prepares an email in your email app. Review and send it there, or
        write directly to{" "}
        <a
          className="direct-email"
          href="mailto:company-valuation@valuatum.com"
        >
          company-valuation@valuatum.com
        </a>
        .
      </p>
      <div className="form-grid">
        <label className="form-field">
          Your name
          <input name="name" autoComplete="name" required maxLength={100} />
        </label>
        <label className="form-field">
          Your email
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={255}
          />
        </label>
        <label className="form-field">
          Your company (optional)
          <input name="company" autoComplete="organization" maxLength={200} />
        </label>
        {finland ? (
          <label className="form-field">
            Finnish company to value
            <input name="finnishCompany" required maxLength={200} />
          </label>
        ) : (
          <label className="form-field">
            Country
            <input
              name="country"
              autoComplete="country-name"
              required
              maxLength={100}
            />
          </label>
        )}
        <label className="form-field full">
          Message (optional)
          <textarea name="message" rows={4} maxLength={2000} />
        </label>
      </div>
      <button type="submit" className="button">
        Prepare email <Arrow diagonal />
      </button>
      {opened && (
        <p className="form-status" role="status">
          Your email app should open with the enquiry. The message has not been
          sent by this website. If no app opens, use the email address above.
        </p>
      )}
    </form>
  );
}

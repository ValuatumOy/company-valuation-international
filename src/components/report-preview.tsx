"use client";

import { useState } from "react";
import Link from "next/link";
import { Arrow, Mark } from "./icon";

const tabs = ["Overview", "Financials", "Methods"] as const;

export function ReportPreview() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Overview");
  return (
    <div className="report-stage">
      <div className="report-orbit" aria-hidden="true" />
      <div className="floating-document" aria-hidden="true">
        <div className="document-icon">
          <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
            <path d="M3 1h9l5 5v17H3V1Z" stroke="currentColor" />
            <path d="M12 1v6h5M6 12h8M6 16h8M6 20h5" stroke="currentColor" />
          </svg>
        </div>
        <div>
          <strong>Financial statements</strong>
          <span>Your starting point</span>
        </div>
        <div className="document-check">✓</div>
      </div>
      <div className="report-sheet report-sheet-back" aria-hidden="true" />
      <div className="report-sheet report-sheet-middle" aria-hidden="true" />
      <div className="report-sheet report-sheet-front">
        <div className="report-top">
          <div className="report-brand">
            <Mark /> Valuatum
          </div>
          <span>Illustrative report</span>
        </div>
        <div className="report-company">
          <span>Example Company Ltd</span>
          <span>Business valuation</span>
        </div>
        <div
          className="report-tabs"
          role="tablist"
          aria-label="Explore the illustrative valuation report"
        >
          {tabs.map((item) => (
            <button
              key={item}
              id={`report-tab-${item}`}
              role="tab"
              aria-selected={tab === item}
              aria-controls="report-panel"
              className={tab === item ? "selected" : ""}
              onClick={() => setTab(item)}
              onKeyDown={(event) => {
                if (
                  ["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)
                ) {
                  event.preventDefault();
                  const next =
                    event.key === "Home"
                      ? 0
                      : event.key === "End"
                        ? 2
                        : (tabs.indexOf(item) +
                            (event.key === "ArrowRight" ? 1 : 2)) %
                          3;
                  setTab(tabs[next]);
                  document.getElementById(`report-tab-${tabs[next]}`)?.focus();
                }
              }}
              tabIndex={tab === item ? 0 : -1}
            >
              {item}
            </button>
          ))}
        </div>
        <div
          className="report-panel"
          id="report-panel"
          role="tabpanel"
          aria-labelledby={`report-tab-${tab}`}
          tabIndex={0}
        >
          {tab === "Overview" ? (
            <>
              <p className="report-value-label">Illustrative equity value</p>
              <div className="report-value" data-ui-number>
                €2.50<span>m</span>
              </div>
              <p className="report-range">
                €2.05m – €2.95m across example multiples
              </p>
              <div
                className="report-chart"
                role="img"
                aria-label="Illustrative EBITDA rising from 250 to 450 thousand euros"
              >
                <div className="chart-grid" aria-hidden="true">
                  <span>450k</span>
                  <span>300k</span>
                  <span>150k</span>
                </div>
                <div className="chart-bars" aria-hidden="true">
                  {[55, 66, 73, 87, 100].map((height, i) => (
                    <div key={i}>
                      <span
                        style={{ height: `${height}%` }}
                        className={i > 2 ? "forecast" : ""}
                      />
                      <small>
                        {2023 + i}
                        {i > 2 ? "E" : ""}
                      </small>
                    </div>
                  ))}
                </div>
              </div>
              <div className="chart-legend">
                <span>
                  <i />
                  Historical EBITDA
                </span>
                <span>
                  <i />
                  Illustrative forecast
                </span>
              </div>
            </>
          ) : tab === "Financials" ? (
            <>
              <p className="report-value-label">Example inputs</p>
              <div className="report-financials">
                <div>
                  <span>Revenue</span>
                  <strong>€3.00m</strong>
                </div>
                <div>
                  <span>EBITDA</span>
                  <strong>€0.45m</strong>
                </div>
                <div>
                  <span>EBITDA margin</span>
                  <strong>15.0%</strong>
                </div>
                <div>
                  <span>Net debt</span>
                  <strong>€0.20m</strong>
                </div>
                <div>
                  <span>Forecast year</span>
                  <strong>2027E</strong>
                </div>
              </div>
              <p className="report-note">
                Fictional data. Review extracted financials before making
                decisions.
              </p>
            </>
          ) : (
            <>
              <p className="report-value-label">Compare example multiples</p>
              <div className="method-comparison">
                {[
                  [5, "2.05"],
                  [6, "2.50"],
                  [7, "2.95"],
                ].map(([multiple, value]) => (
                  <div key={multiple}>
                    <span>{multiple}× EBITDA</span>
                    <i style={{ width: `${Number(multiple) * 11}%` }} />
                    <strong>€{value}m</strong>
                  </div>
                ))}
              </div>
              <p className="report-note">
                Equity value = EBITDA × multiple − net debt. Real reports also
                apply other methods where appropriate.
              </p>
            </>
          )}
        </div>
        <div className="report-bottom">
          <span>Transparent inputs. Clear assumptions.</span>
          <Link
            href="/sample-report"
            aria-label="Explore the illustrative sample report"
          >
            <Arrow diagonal />
          </Link>
        </div>
      </div>
      <div className="stage-caption">
        Explore the report above. Figures are illustrative.
      </div>
    </div>
  );
}

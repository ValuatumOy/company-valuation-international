import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#eff5f2",
        color: "#18373b",
        padding: "64px 74px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          fontSize: 28,
        }}
      >
        <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
          <path d="m3 6 9 20h5L8 6H3Zm16 0-7 16 5 4 12-20H19Z" fill="#164f54" />
        </svg>
        <span>companyvaluation</span>
        <span style={{ fontSize: 18, color: "#50666a", marginLeft: 10 }}>
          by Valuatum
        </span>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 76,
          lineHeight: 1.1,
          letterSpacing: "-4px",
          maxWidth: 940,
        }}
      >
        Understand what your business is worth.
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid #cadcd2",
          paddingTop: 24,
          fontSize: 21,
        }}
      >
        <span>Financial statements. Clear assumptions. Better decisions.</span>
        <span style={{ color: "#50666a", fontSize: 17 }}>
          company-valuation.com
        </span>
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}

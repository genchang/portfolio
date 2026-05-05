import { ImageResponse } from "next/og";

export const alt = "Gen Chang - Product Designer + professional dabbler";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#fafcfd",
          display: "flex",
          flexDirection: "column",
          padding: "72px 88px",
          fontFamily: "Georgia, serif",
          color: "#32404f",
          position: "relative",
        }}
      >
        {/* Top row: name + tagline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontFamily: "ui-monospace, monospace",
            fontSize: 22,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            color: "#32404f",
            marginBottom: 8,
          }}
        >
          <span style={{ fontWeight: 600 }}>Gen Chang</span>
          <span style={{ color: "rgba(50,64,79,0.55)" }}>
            Product designer + professional dabbler
          </span>
        </div>

        {/* Spacer pushes title to vertical centre */}
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1.05,
              letterSpacing: -1.4,
              fontWeight: 400,
              maxWidth: 980,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <span>I&apos;m Gen.&nbsp;</span>
            <span>Product designer by trade,&nbsp;</span>
            <span style={{ fontStyle: "italic", fontWeight: 500 }}>
              tinkerer by nature.
            </span>
          </div>
        </div>

        {/* Bottom row: orange dot + portfolio label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontFamily: "ui-monospace, monospace",
            fontSize: 20,
            letterSpacing: 1.4,
            textTransform: "uppercase",
            color: "rgba(50,64,79,0.55)",
          }}
        >
          <span
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#e65f2e",
              display: "flex",
            }}
          />
          <span>Portfolio · 2026</span>
        </div>
      </div>
    ),
    { ...size },
  );
}

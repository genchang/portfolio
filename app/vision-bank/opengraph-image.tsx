import { ImageResponse } from "next/og";

export const alt = "Vision Bank — Designing the foundations of a digital bank";
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
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontFamily: "ui-monospace, monospace",
            fontSize: 22,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            color: "#e65f2e",
            marginBottom: 8,
          }}
        >
          <span>Case study · Vision Bank</span>
        </div>

        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <div
            style={{
              fontSize: 80,
              lineHeight: 1.05,
              letterSpacing: -1.4,
              fontWeight: 400,
              maxWidth: 1000,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <span>Designing the foundations of&nbsp;</span>
            <span style={{ fontStyle: "italic", fontWeight: 500 }}>
              a digital bank.
            </span>
          </div>
        </div>

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
          <span>Gen Chang · Vision Bank · 2022</span>
        </div>
      </div>
    ),
    { ...size },
  );
}

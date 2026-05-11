"use client";

import { useState, useRef } from "react";

export default function VitalityWowAnnotation() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleClose = () => { closeTimer.current = setTimeout(() => setOpen(false), 180); };
  const cancelClose  = () => { if (closeTimer.current) clearTimeout(closeTimer.current); };
  const handleEnter  = () => { cancelClose(); setOpen(true); };

  return (
    <>
      {/* ── wow.svg trigger ── */}
      <div
        className="hidden md:block"
        style={{ position: "absolute", top: "8px", right: 0, cursor: "pointer" }}
        onMouseEnter={handleEnter}
        onMouseLeave={scheduleClose}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Vitailty/wow.svg"
          alt=""
          aria-hidden="true"
          style={{
            width: 160,
            height: "auto",
            transform: open ? "rotate(8deg) scale(1.06)" : "rotate(8deg)",
            opacity: open ? 1 : 0.6,
            transition: "opacity 0.2s ease, transform 0.2s ease",
            display: "block",
          }}
        />
      </div>

      {/* ── Popup ── */}
      <div
        className="hidden md:flex"
        style={{
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: open
            ? "translate(-50%, -50%) scale(1)"
            : "translate(-50%, -50%) scale(0.97)",
          width: 740,
          height: 600,
          background: "#fff",
          border: "2.5px solid #111",
          borderRadius: "5px 16px 10px 8px / 10px 8px 16px 5px",
          flexDirection: "row",
          zIndex: 1000,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "all" : "none",
          transition: "opacity 0.22s ease, transform 0.22s ease",
          boxShadow: "5px 6px 0 rgba(0,0,0,0.06)",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        {/* ── Scrollable area spanning both columns ── */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          {/* Left: screenshot with padding */}
          <div
            style={{
              width: 400,
              flexShrink: 0,
              padding: "20px",
              position: "relative",
            }}
          >
            {/* Pink tape at top-left corner of screenshot */}
            <div style={{
              position: "absolute",
              top: 4,
              left: 4,
              transform: "rotate(-38deg)",
              transformOrigin: "center center",
              zIndex: 3,
            }}>
              <PinkTape />
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Vitailty/appstore.png"
              alt="App Store listings for Vitality apps across markets"
              style={{ display: "block", width: "100%", height: "auto", borderRadius: "4px" }}
            />
          </div>

          {/* Right: sticky annotation — stays fixed while screenshot scrolls */}
          <div style={{
            flex: 1,
            position: "sticky",
            top: 0,
            alignSelf: "flex-start",
            padding: "28px 0 28px 26px",
            display: "flex",
            flexDirection: "column",
          }}>
            <Sparkle4 style={{ marginBottom: 10 }} />
            <p style={{
              fontFamily: "var(--font-gaegu)",
              fontSize: "28px",
              lineHeight: "38px",
              color: "#111",
              margin: "0 0 6px",
            }}>
              I designed<br />
              these{" "}
              <span style={{ textDecoration: "underline", textDecorationThickness: "2px" }}>app</span><br />
              screenshots!
            </p>
            <PinkSquiggle width={148} style={{ marginBottom: 22 }} />
            <CurvedLeftArrow />
          </div>
        </div>

        {/* Right strip: close + pencil + dashed line */}
        <div
          style={{
            width: 44,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 14,
            paddingBottom: 16,
          }}
          aria-hidden="true"
        >
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            aria-hidden="false"
            style={{
              width: 32,
              height: 32,
              border: "2px solid #111",
              borderRadius: "50%",
              background: "transparent",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
              flexShrink: 0,
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <line x1="2" y1="2" x2="10" y2="10" stroke="#111" strokeWidth="2" strokeLinecap="round" />
              <line x1="10" y1="2" x2="2" y2="10" stroke="#111" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <div style={{ height: 12 }} />
          <PencilIcon style={{ flexShrink: 0 }} />
          <div style={{ flex: 1, width: 0, borderLeft: "2px dashed rgba(0,0,0,0.22)", margin: "6px 0 4px" }} />
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
            <path d="M2,2 L6,8 L10,2" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>
      </div>
    </>
  );
}

/* ── helpers ── */

function PinkTape() {
  return (
    <svg width="66" height="20" viewBox="0 0 66 20" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="64" height="18" fill="rgba(231,23,87,0.32)" rx="2" />
      {[10, 18, 26, 34, 42, 52, 60].map((x) => (
        <line key={x} x1={x} y1="1" x2={x} y2="19" stroke="rgba(180,40,80,0.12)" strokeWidth="1" />
      ))}
    </svg>
  );
}

function Sparkle4({ style }: { style?: React.CSSProperties }) {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" style={style} aria-hidden="true">
      <path
        d="M15,2 C15.5,9 18,12 26,15 C18,15 15.5,18 15,28 C14.5,18 12,15 4,15 C12,15 14.5,9 15,2 Z"
        stroke="#E71757"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(231,23,87,0.08)"
      />
    </svg>
  );
}

function PinkSquiggle({ width = 200, style }: { width?: number; style?: React.CSSProperties }) {
  const segs: string[] = ["M 2,5"];
  let x = 2;
  let flip = true;
  while (x + 8 <= width - 2) {
    const cy = flip ? 1 : 9;
    segs.push(`C ${x + 2},${cy} ${x + 6},${cy} ${x + 8},5`);
    x += 8;
    flip = !flip;
  }
  return (
    <svg width={width} height="10" viewBox={`0 0 ${width} 10`} fill="none" style={style} aria-hidden="true">
      <path d={segs.join(" ")} stroke="#E71757" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function CurvedLeftArrow() {
  return (
    <svg width="110" height="90" viewBox="0 0 110 90" fill="none" aria-hidden="true">
      {/* Loop + curve pointing left */}
      <path
        d="M 72,18 C 78,10 88,12 86,22 C 84,32 72,32 68,26 C 62,18 66,8 78,6 C 90,4 100,14 96,28 C 90,48 60,60 30,62"
        stroke="#111"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Arrowhead pointing left */}
      <path
        d="M 38,54 L 28,62 L 38,70"
        stroke="#111"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Emphasis dashes near arrowhead */}
      <line x1="20" y1="72" x2="14" y2="78" stroke="#E71757" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="12" y1="66" x2="6"  y2="70" stroke="#E71757" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="16" y1="78" x2="8"  y2="84" stroke="#E71757" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function PencilIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <svg width="14" height="82" viewBox="0 0 14 82" fill="none" style={style} aria-hidden="true">
      <rect x="2" y="2" width="10" height="8" rx="1" stroke="#111" strokeWidth="1.4" fill="rgba(231,23,87,0.25)" />
      <line x1="2" y1="8" x2="12" y2="8" stroke="#111" strokeWidth="1.4" />
      <rect x="2" y="9" width="10" height="54" stroke="#111" strokeWidth="1.4" fill="rgba(255,248,200,0.55)" />
      <line x1="2" y1="20" x2="12" y2="20" stroke="#111" strokeWidth="0.7" opacity="0.22" />
      <line x1="2" y1="32" x2="12" y2="32" stroke="#111" strokeWidth="0.7" opacity="0.22" />
      <path d="M2,63 L7,78 L12,63 Z" stroke="#111" strokeWidth="1.4" strokeLinejoin="round" fill="rgba(210,170,120,0.4)" />
      <circle cx="7" cy="78" r="1.2" fill="#555" />
    </svg>
  );
}

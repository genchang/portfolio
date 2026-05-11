 "use client";

import { useState, useEffect } from "react";

const ANNOTATION_TEXT = "aka genius mobile app ux/ui\ndesigner mega expert specialist -\ntomato tomahto ";
import Link from "next/link";
import HoverVideo from "./HoverVideo";
import SaFlagIcon from "./SaFlagIcon";
import ExternalArrow from "./ExternalArrow";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pdHovered, setPdHovered] = useState(false);
  const [annotationText, setAnnotationText] = useState("");

  useEffect(() => {
    if (!pdHovered) {
      setAnnotationText("");
      return;
    }
    let intervalId: ReturnType<typeof setInterval>;
    const timeoutId = setTimeout(() => {
      let i = 0;
      intervalId = setInterval(() => {
        i++;
        setAnnotationText(ANNOTATION_TEXT.slice(0, i));
        if (i >= ANNOTATION_TEXT.length) clearInterval(intervalId);
      }, 28);
    }, 900);
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [pdHovered]);

  const navLinks = [
    { label: "Work", href: "/", active: true, external: false },
    { label: "Side quests", href: "/side-quests", active: false, external: false },
    { label: "About", href: "/about", active: false, external: false },
    { label: "Email", href: "mailto:genchang1@gmail.com", active: false, external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/genchang/", active: false, external: true },
  ];

  const workHistory = [
    {
      year: "2026",
      company: "Independent Practice Designer",
      role: "Product Designer",
    },
    {
      year: "2023",
      company: "Discovery Vitality International",
      role: "Senior Designer",
    },
    {
      year: "2022",
      company: "Saudi Arabia's Vision Bank",
      role: "Senior Designer",
    },
    {
      year: "2021",
      company: "Independent Practice Designer",
      role: "Product Designer",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav
        className="px-4 md:px-6 py-3 md:py-0 md:h-16 shrink-0"
        style={{ borderBottom: "1px solid rgba(50,64,79,0.1)" }}
      >
        <div className="flex items-center justify-between gap-4 md:h-full">
          {/* Left: name + subtitle */}
          <div className="flex items-center gap-3 md:gap-4">
            <span
              className="text-[15px] uppercase leading-[22.5px]"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 500,
                color: "#32404f",
              }}
            >
              Gen Chang
            </span>
            <span
              className="hidden lg:inline text-[15px] uppercase leading-[22.5px]"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 400,
                color: "rgba(50,64,79,0.58)",
              }}
            >
              Product Designer + professional dabbler
            </span>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-x-6 lg:gap-x-8">
            {navLinks.map(({ label, href, active, external }) => (
              <Link
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={`text-[15px] uppercase leading-[22.5px] cursor-pointer inline-flex items-center gap-1.5 transition-colors ${active ? "text-[#e65f2e]" : "text-[rgba(50,64,79,0.58)] hover:text-[#e65f2e]"}`}
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 400,
                }}
              >
                {label}
                {external && <ExternalArrow />}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden text-[#32404f]"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 7H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 17H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className={`${isMenuOpen ? "flex" : "hidden"} md:hidden flex-col items-start gap-2 mt-3`}>
          {navLinks.map(({ label, href, active, external }) => (
            <Link
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              onClick={() => setIsMenuOpen(false)}
              className={`text-[15px] uppercase leading-[22.5px] cursor-pointer inline-flex items-center gap-1.5 transition-colors ${active ? "text-[#e65f2e]" : "text-[rgba(50,64,79,0.58)] hover:text-[#e65f2e]"}`}
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 400,
              }}
            >
              {label}
              {external && <ExternalArrow />}
            </Link>
          ))}
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 px-4 md:px-6">
        {/* Hero section */}
        <section className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 pt-16 md:pt-[180px] pb-8">

          {/* Hover annotation — desktop only */}
          <div className="hidden md:block absolute inset-0 pointer-events-none" aria-hidden="true">

            {/* Annotation text — typewriter in Gaegu, appears on hover */}
            <div
              style={{
                position: "absolute",
                top: "8px",
                left: "26%",
                opacity: pdHovered ? 1 : 0,
                transition: pdHovered ? "opacity 0.1s ease" : "none",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-gaegu)",
                  fontSize: "20px",
                  lineHeight: "27px",
                  color: "rgba(50,64,79,0.42)",
                  whiteSpace: "pre-wrap",
                }}
              >
                {annotationText}
              </span>
              {/* Tomato appears inline once typing finishes */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Annotations/tomato.svg"
                style={{
                  width: 32,
                  height: 24,
                  display: "inline-block",
                  verticalAlign: "middle",
                  opacity: annotationText.length >= ANNOTATION_TEXT.length ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
                alt=""
              />
            </div>

            {/* Curly arrow — stroke-dashoffset draw animation, upward from bottom */}
            <div style={{ position: "absolute", top: "100px", left: "35%" }}>
              <svg width="65" height="86" viewBox="0 0 65 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Curly shaft: path starts at bottom and draws upward to arrowhead */}
                <path
                  d="M 32,82 C 44,66 18,54 34,38 C 50,22 20,11 27,2"
                  stroke="rgba(50,64,79,0.32)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  fill="none"
                  style={{
                    strokeDasharray: 300,
                    strokeDashoffset: pdHovered ? 0 : 300,
                    transition: pdHovered ? "stroke-dashoffset 0.7s ease-in-out 0.1s" : "none",
                  }}
                />
                {/* Arrowhead V at top — pointing toward annotation text */}
                <path
                  d="M 18,12 L 27,2 L 36,12"
                  stroke="rgba(50,64,79,0.32)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  style={{
                    strokeDasharray: 30,
                    strokeDashoffset: pdHovered ? 0 : 30,
                    transition: pdHovered ? "stroke-dashoffset 0.3s ease-in-out 0.75s" : "none",
                  }}
                />
              </svg>
            </div>

          </div>

          {/* Left: heading */}
          <div className="max-w-[700px]">
            <h1
              className="text-[36px] leading-[42px] md:text-[49.9px] md:leading-[57.2px] tracking-[-0.34px] text-[#32404f]"
              style={{ fontFamily: "var(--font-tiempos)", fontWeight: 300 }}
            >
              I&apos;m Gen.{" "}
              <span style={{ display: "inline-block", position: "relative" }}>
                Product designer
                {/* Hearts — visible by default, fade on hover */}
                <span
                  style={{
                    position: "absolute",
                    top: "-20px",
                    left: "100%",
                    marginLeft: "6px",
                    lineHeight: 0,
                    pointerEvents: "none",
                    width: 45,
                    height: 39,
                    display: "block",
                    opacity: pdHovered ? 0 : 1,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/Annotations/annotationAlert.svg" style={{ width: 45, height: 39 }} alt="" />
                </span>
                {/* Expanded hit-area: covers text + hearts above/right */}
                <span
                  onMouseEnter={() => setPdHovered(true)}
                  onMouseLeave={() => setPdHovered(false)}
                  style={{
                    position: "absolute",
                    top: "-30px",
                    left: 0,
                    right: "-55px",
                    bottom: 0,
                    cursor: "default",
                  }}
                />
              </span>
              <br />
              by trade,{" "}
              <em style={{ fontWeight: 400 }}>tinkerer by nature</em>
            </h1>
          </div>

          {/* Right: work history */}
          <div className="flex flex-col gap-4 justify-end pb-1">
            {workHistory.map((item) => (
              <div key={`${item.year}-${item.company}`} className="grid grid-cols-[72px_1fr] md:grid-cols-[104px_1fr_1fr] items-start gap-x-4 md:gap-x-6 gap-y-1">
                <span
                  className="text-[15px] leading-[22.5px] shrink-0"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: 400,
                    color: "rgba(50,64,79,0.58)",
                  }}
                >
                  {item.year}
                </span>
                <span
                  className="text-[15px] leading-[22.5px]"
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                    fontWeight: 400,
                    color: "#32404f",
                  }}
                >
                  {item.company}
                </span>
                <span
                  className="text-[15px] leading-[22.5px] col-start-2 md:col-start-auto"
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                    fontWeight: 400,
                    color: "rgba(50,64,79,0.58)",
                  }}
                >
                  {item.role}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Project cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
          {/* Card 1 - Discovery Vitality */}
          <Link href="/vitality" className="flex flex-col gap-2 group">
            <div
              className="w-full overflow-hidden"
              style={{ border: "1px solid rgba(50,64,79,0.1)" }}
            >
              <div
                className="w-full bg-[#f4f7f9] overflow-hidden"
                style={{ aspectRatio: "16 / 9" }}
              >
                <HoverVideo
                  src="/vitality.mp4"
                  aria="Discovery Vitality project illustration"
                  autoPlayOnMobile
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-1">
              <div className="flex flex-col items-start gap-1">
                <span
                  className="text-[16px] tracking-[0.6px] text-[#32404f] leading-normal"
                  style={{ fontFamily: "var(--font-tiempos)", fontWeight: 300 }}
                >
                  Built Once, Shipped Everywhere
                </span>
                <span
                  className="text-[13px] uppercase leading-[20px]"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: 400,
                    color: "rgba(50,64,79,0.58)",
                    letterSpacing: "0.3px"
                  }}
                >
                  Discovery Vitality • 2025
                </span>
              </div>
              <p
                className="text-[14px] leading-[22px] max-w-[600px]"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontWeight: 400,
                  color: "rgba(50,64,79,0.78)",
                }}
              >
                Scaling a global rewards platform across 10+ markets - from
                adaptive AI goals to localisation-ready design systems.
              </p>
            </div>
          </Link>

          {/* Card 2 - Vision Bank */}
          <Link href="/vision-bank" className="flex flex-col gap-2 group">
            <div
              className="w-full overflow-hidden"
              style={{ border: "1px solid rgba(50,64,79,0.1)" }}
            >
              <div
                className="w-full bg-[#eff2f7] overflow-hidden"
                style={{ aspectRatio: "16 / 9" }}
              >
                <HoverVideo
                  src="/bank.mp4"
                  aria="Vision Bank project illustration"
                  autoPlayOnMobile
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-1">
              <div className="flex flex-col items-start gap-1">
                <span
                  className="text-[16px] tracking-[0.6px] text-[#32404f] leading-normal"
                  style={{ fontFamily: "var(--font-tiempos)", fontWeight: 300 }}
                >
                  Designing the foundations of a digital bank
                </span>
                <span
                  className="text-[13px] uppercase leading-[20px]"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: 400,
                    color: "rgba(50,64,79,0.58)",
                    letterSpacing: "0.3px"
                  }}
                >
                  Vision Bank • 2022
                </span>
              </div>
              <p
                className="text-[14px] leading-[22px] max-w-[600px]"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontWeight: 400,
                  color: "rgba(50,64,79,0.78)",
                }}
              >
                Helping shape customer journeys, white-label systems, and
                reusable design foundations across mobile and tablet
                devices.
              </p>
            </div>
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="flex items-center justify-between px-4 md:px-6 py-[20px] mt-8"
        style={{ borderTop: "1px solid rgba(50,64,79,0.1)" }}
      >
        {/* Left: credit */}
        <div className="flex items-center gap-1">
          <span
            className="text-[15px] uppercase leading-[22.5px]"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 400,
              color: "rgba(50,64,79,0.58)",
            }}
          >
            Designed with
          </span>
          <HeartIcon />
          <span
            className="text-[15px] uppercase leading-[22.5px]"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 400,
              color: "rgba(50,64,79,0.58)",
            }}
          >
            by Gen • Cape Town
          </span>
          <SaFlagIcon />
        </div>

      </footer>
    </div>
  );
}


function HeartIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-1"
      aria-hidden="true"
    >
      <path
        d="M7.5 13C7.5 13 1.5 9.2 1.5 5a3 3 0 0 1 6-0.4A3 3 0 0 1 13.5 5c0 4.2-6 8-6 8Z"
        stroke="rgba(50,64,79,0.58)"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

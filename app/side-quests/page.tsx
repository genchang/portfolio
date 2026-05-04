"use client";

import { useState } from "react";
import Link from "next/link";
import HoverVideo from "../HoverVideo";
import Carousel from "../Carousel";
import StlViewer from "../StlViewer";
import SaFlagIcon from "../SaFlagIcon";

export default function SideQuestsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Work", href: "/", active: false, external: false },
    { label: "Side quests", href: "/side-quests", active: true, external: false },
    { label: "About", href: "/about", active: false, external: false },
    { label: "Email", href: "mailto:genchang1@gmail.com", active: false, external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/genchang/", active: false, external: true },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar — matches home */}
      <nav
        className="px-4 md:px-6 py-3 md:py-0 md:h-16 shrink-0"
        style={{ borderBottom: "1px solid rgba(50,64,79,0.1)" }}
      >
        <div className="flex items-center justify-between gap-4 md:h-full">
          <div className="flex items-center gap-3 md:gap-4">
            <Link
              href="/"
              className="text-[15px] uppercase leading-[22.5px]"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 500,
                color: "#32404f",
              }}
            >
              Gen Chang
            </Link>
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
        {/* Hero */}
        <section className="pt-12 pb-12 max-w-[900px]">
          <h1
            className="text-[36px] leading-[42px] md:text-[49.9px] md:leading-[57.2px] tracking-[-0.34px] text-[#32404f] mb-6"
            style={{ fontFamily: "var(--font-tiempos)", fontWeight: 300 }}
          >
            My showcase of creative detours because{" "}
            <em style={{ fontWeight: 400 }}>side quests &gt; main storyline</em>
          </h1>

          <p
            className="text-[16px] leading-[26px] max-w-[640px]"
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontWeight: 400,
              color: "rgba(50,64,79,0.78)",
            }}
          >
            This is where my curiosity turns into side projects that let me
            explore new tools, technologies, and creative rabbit holes —
            somewhere between inspiration, experimentation, and avoiding
            sleep.
          </p>
        </section>

        {/* Side quest cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
          {/* Card 1 — Life Timeline */}
          <div className="flex flex-col gap-2">
            <div
              className="w-full overflow-hidden"
              style={{ border: "1px solid rgba(50,64,79,0.1)" }}
            >
              <div
                className="w-full bg-[#f4f7f9] overflow-hidden"
                style={{ aspectRatio: "16 / 9" }}
              >
                <HoverVideo
                  src="/lifeTimeline.mp4"
                  aria="Life Timeline web app"
                  poster="/lifeTimelineThumbnail.png"
                  controls
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <a
                  href="https://lifetimeline-navy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px] tracking-[0.6px] text-[#32404f] leading-normal whitespace-nowrap inline-flex items-center gap-1.5 hover:text-[#e65f2e] transition-colors"
                  style={{ fontFamily: "var(--font-tiempos)", fontWeight: 300 }}
                >
                  Life Timeline
                  <ExternalArrow />
                </a>
                <span
                  className="text-[13px] uppercase leading-[20px] ml-auto text-right"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: 400,
                    color: "rgba(50,64,79,0.58)",
                    letterSpacing: "0.3px",
                  }}
                >
                  Web app • Claude • Figma • Vercel • Mar 2026
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
                I wanted a way to map the moments that shaped me
                through an interactive life journal. Inspired by the idea
                that life moves in waves, with every moment leaving its own
                shape on your story.
              </p>
            </div>
          </div>

          {/* Card 2 — Dotty */}
          <div className="flex flex-col gap-2">
            <div
              className="w-full overflow-hidden"
              style={{ border: "1px solid rgba(50,64,79,0.1)" }}
            >
              <div
                className="w-full bg-[#f4f7f9] overflow-hidden"
                style={{ aspectRatio: "16 / 9" }}
              >
                <Carousel
                  images={["/dotty 1.jpg", "/dotty 2.jpg", "/dotty 3.jpg"]}
                  alt="Dotty sticker journal screens"
                  poster="/dottyThumbnail.png"
                  hoverToPlay
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <a
                  href="https://www.figma.com/community/file/1599122581802981200/dotty-cozy-lifestyle-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px] tracking-[0.6px] text-[#32404f] leading-normal whitespace-nowrap inline-flex items-center gap-1.5 hover:text-[#e65f2e] transition-colors"
                  style={{ fontFamily: "var(--font-tiempos)", fontWeight: 300 }}
                >
                  Dotty
                  <ExternalArrow />
                </a>
                <span
                  className="text-[13px] uppercase leading-[20px] ml-auto text-right"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: 400,
                    color: "rgba(50,64,79,0.58)",
                    letterSpacing: "0.3px",
                  }}
                >
                  PWA • Figma Make • Figma Design • Jan 2026
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
                I love a cute, cozy aesthetic, so I wanted to create a
                sticker-based app where I could quickly capture activities,
                events, or habits I care about. It&apos;s built as a complete
                design system, with the Figma file available on the Figma
                Community, and the progressive web app is free to install
                and use on your mobile phone.
              </p>
            </div>
          </div>

          {/* Card 3 — Token Auditor */}
          <div className="flex flex-col gap-2">
            <div
              className="w-full overflow-hidden"
              style={{ border: "1px solid rgba(50,64,79,0.1)" }}
            >
              <div
                className="w-full bg-[#f4f7f9] overflow-hidden"
                style={{ aspectRatio: "16 / 9" }}
              >
                <HoverVideo
                  src="/tokenauditor.mov"
                  aria="Token Auditor Figma plugin"
                  poster="/token_auditor_thumbnail.png"
                  fit="contain"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <span
                  className="text-[16px] tracking-[0.6px] text-[#32404f] leading-normal whitespace-nowrap"
                  style={{ fontFamily: "var(--font-tiempos)", fontWeight: 300 }}
                >
                  Token Auditor
                </span>
                <span
                  className="text-[13px] uppercase leading-[20px] ml-auto text-right"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: 400,
                    color: "rgba(50,64,79,0.58)",
                    letterSpacing: "0.3px",
                  }}
                >
                  Figma plugin • Claude Code • Mar 2026
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
                I built Token Auditor after noticing I was repeatedly
                doing &lsquo;design system hygiene&rsquo; checks with Claude.
                The plugin audits semantic token readability for AI workflows
                by automatically checking variables, flagging potential logic
                issues as pass, warn, or fail, and generating a detailed HTML
                report. It also helps designers keep variables consistent
                across designs by providing clear rules and guidance for
                colours, spacing, and token usage.
              </p>
            </div>
          </div>
        </section>

        {/* 3D Prints section */}
        <section className="pt-20 pb-12">
          <h2
            className="text-[28px] leading-[36px] tracking-[-0.2px] text-[#32404f] mb-2"
            style={{ fontFamily: "var(--font-tiempos)", fontWeight: 300 }}
          >
            3D Prints
          </h2>
          <p
            className="text-[15px] leading-[24px] mb-8 max-w-[640px]"
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontWeight: 400,
              color: "rgba(50,64,79,0.78)",
            }}
          >
            Functional objects designed in Tinkercad and printed on my 3d
            printer. Drag to rotate, scroll to zoom.
          </p>

          {/* Card — Walking pad remote holder */}
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
              <div
                className="w-full overflow-hidden"
                style={{ border: "1px solid rgba(50,64,79,0.1)" }}
              >
                <div
                  className="w-full bg-[#f4f7f9] overflow-hidden"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <StlViewer src="/3dprints/remoteHolder.stl" />
                </div>
              </div>
              <div
                className="w-full overflow-hidden"
                style={{ border: "1px solid rgba(50,64,79,0.1)" }}
              >
                <div
                  className="w-full bg-[#f4f7f9] overflow-hidden"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/3dprints/remoteHolder.png"
                    alt="Walking pad remote holder, printed and installed"
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <span
                  className="text-[16px] tracking-[0.6px] text-[#32404f] leading-normal whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-tiempos)",
                    fontWeight: 300,
                  }}
                >
                  Walking pad remote holder
                </span>
                <span
                  className="text-[13px] uppercase leading-[20px] ml-auto text-right"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: 400,
                    color: "rgba(50,64,79,0.58)",
                    letterSpacing: "0.3px",
                  }}
                >
                  CAD • PLA print
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
                My walking pad&apos;s phone stand never had enough
                space for both my device and the remote, so I designed a
                small slide-on holder that clips neatly onto the edge of the
                stand. Now the remote has its own dedicated spot, my phone or
                tablet fits properly, and I no longer have to awkwardly carry
                the remote in my pocket while walking.
              </p>
            </div>
          </div>

          {/* Card — Bin handle */}
          <div className="flex flex-col gap-2 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
              <div
                className="w-full overflow-hidden"
                style={{ border: "1px solid rgba(50,64,79,0.1)" }}
              >
                <div
                  className="w-full bg-[#f4f7f9] overflow-hidden"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <StlViewer src="/3dprints/binHandle.stl" />
                </div>
              </div>
              <div
                className="w-full overflow-hidden"
                style={{ border: "1px solid rgba(50,64,79,0.1)" }}
              >
                <div
                  className="w-full bg-[#f4f7f9] overflow-hidden"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/3dprints/binHandle.jpg"
                    alt="Bin handle, printed and installed"
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <span
                  className="text-[16px] tracking-[0.6px] text-[#32404f] leading-normal whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-tiempos)",
                    fontWeight: 300,
                  }}
                >
                  Bin handle
                </span>
                <span
                  className="text-[13px] uppercase leading-[20px] ml-auto text-right"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: 400,
                    color: "rgba(50,64,79,0.58)",
                    letterSpacing: "0.3px",
                  }}
                >
                  CAD • PLA print
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
                My bin never had a pedal or proper handle, so I was
                constantly fumbling around the edge of the lid trying to lift
                it open. I designed a curved slip-on handle that hooks neatly
                onto the lip of the lid, making it easier to find, more
                comfortable to grip, and a little nicer to look at too.
              </p>
            </div>
          </div>

          {/* Card — Lamp cable holder */}
          <div className="flex flex-col gap-2 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
              <div
                className="w-full overflow-hidden"
                style={{ border: "1px solid rgba(50,64,79,0.1)" }}
              >
                <div
                  className="w-full bg-[#f4f7f9] overflow-hidden"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <StlViewer src="/3dprints/cableHolder.stl" />
                </div>
              </div>
              <div
                className="w-full overflow-hidden"
                style={{ border: "1px solid rgba(50,64,79,0.1)" }}
              >
                <div
                  className="w-full bg-[#f4f7f9] overflow-hidden"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/3dprints/cableHolder.png"
                    alt="Lamp cable holder, printed and installed"
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <span
                  className="text-[16px] tracking-[0.6px] text-[#32404f] leading-normal whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-tiempos)",
                    fontWeight: 300,
                  }}
                >
                  Lamp cable holder
                </span>
                <span
                  className="text-[13px] uppercase leading-[20px] ml-auto text-right"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: 400,
                    color: "rgba(50,64,79,0.58)",
                    letterSpacing: "0.3px",
                  }}
                >
                  CAD • PLA print
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
                My desk lamp had an overly long cable that always
                looked messy, and the switch ended up too far away to reach
                comfortably. I designed a small desk-mounted cable holder
                that slips onto the edge of the desk, letting me neatly wind
                the excess cable while bringing the switch closer to the
                lamp and easier to find.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer — matches home */}
      <footer
        className="flex items-center justify-between px-6 py-[20px] mt-8"
        style={{ borderTop: "1px solid rgba(50,64,79,0.1)" }}
      >
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

function ExternalArrow() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3 8L8 3M8 3H3.5M8 3V7.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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

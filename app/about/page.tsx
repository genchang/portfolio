"use client";

import { useState } from "react";
import Link from "next/link";
import SaFlagIcon from "../SaFlagIcon";
import ExternalArrow from "../ExternalArrow";

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Work", href: "/", active: false, external: false },
    { label: "Side quests", href: "/side-quests", active: false, external: false },
    { label: "About", href: "/about", active: true, external: false },
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
        <div className="flex items-center justify-between gap-4 h-full">
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

        <div className={`${isMenuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-x-8 md:gap-y-2 mt-3 md:mt-0`}>
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
        <section className="pt-8 md:pt-12 pb-12 max-w-[900px]">
          <div className="flex flex-col gap-8 md:gap-10 items-start">
            <div className="max-w-[640px]">
              <h1
                className="text-[36px] leading-[42px] md:text-[49.9px] md:leading-[57.2px] tracking-[-0.34px] text-[#32404f] mb-8 md:mb-10"
                style={{ fontFamily: "var(--font-tiempos)", fontWeight: 300 }}
              >
                I am a designer, hobbyist, and{" "}
                <em style={{ fontWeight: 400 }}>full-time dog mom</em>
              </h1>

              <div
                className="flex flex-col gap-5 text-[16px] leading-[26px]"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontWeight: 400,
                  color: "rgba(50,64,79,0.78)",
                }}
              >
                <p>
                I&apos;m a UX/UI designer who loves solving problems through
                thoughtful, playful design — whether that&apos;s crafting
                end-to-end product flows, refining and building design
                systems from scratch, or accidentally turning tiny ideas
                into fully functional side projects. Lately I&apos;ve been
                vibe coding my way through app concepts, experimenting with
                3D printing, and hyperfixating on new hobbies and crafts.
              </p>
              <p>
                Outside of design, you&apos;ll usually find me gaming,
                online shopping, failing at{" "}
                <a
                  href="https://www.tiktok.com/@genchang_apps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#e65f2e] transition-colors"
                  style={{ fontWeight: 600, color: "#32404f" }}
                >
                  content creation
                </a>
                , or being emotionally manipulated by my yorkie, Chewie.
              </p>
              <p>
                Want to collaborate, hire me, or exchange niche hobby
                recommendations?
                <br />
                Say hello via{" "}
                <a
                  href="mailto:genchang1@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#e65f2e] transition-colors"
                  style={{ fontWeight: 600, color: "#32404f" }}
                >
                  email
                </a>
                .
              </p>
              </div>
            </div>

            <div
              className="relative"
              style={{
                width: "280px",
                background: "#ffffff",
                padding: "12px 12px 40px",
                boxShadow:
                  "0 18px 32px -16px rgba(50,64,79,0.28), 0 6px 12px -8px rgba(50,64,79,0.18)",
                transform: "rotate(2deg)",
              }}
            >
              {/* Top-left tape */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "-14px",
                  left: "-22px",
                  width: "64px",
                  height: "20px",
                  background:
                    "repeating-linear-gradient(135deg, rgba(255,235,150,0.78) 0 6px, rgba(255,225,120,0.78) 6px 12px)",
                  border: "1px solid rgba(180,150,40,0.18)",
                  transform: "rotate(-32deg)",
                  boxShadow: "0 2px 4px rgba(50,64,79,0.12)",
                }}
              />
              {/* Top-right tape */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "-12px",
                  right: "-26px",
                  width: "64px",
                  height: "20px",
                  background:
                    "repeating-linear-gradient(135deg, rgba(255,235,150,0.78) 0 6px, rgba(255,225,120,0.78) 6px 12px)",
                  border: "1px solid rgba(180,150,40,0.18)",
                  transform: "rotate(28deg)",
                  boxShadow: "0 2px 4px rgba(50,64,79,0.12)",
                }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/about.png"
                alt="Gen Chang"
                className="w-full h-auto"
                style={{ display: "block" }}
              />
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

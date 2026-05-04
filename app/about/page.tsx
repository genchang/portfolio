import Link from "next/link";
import SaFlagIcon from "../SaFlagIcon";
import MobileNav from "../MobileNav";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar — matches home */}
      <nav
        className="flex flex-wrap items-center justify-between px-4 md:px-6 py-3 md:py-0 md:h-16 gap-x-4 gap-y-2 shrink-0"
        style={{ borderBottom: "1px solid rgba(50,64,79,0.1)" }}
      >
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

        <MobileNav
          items={[
            { label: "Work", href: "/" },
            { label: "Side quests", href: "/side-quests" },
            { label: "About", href: "/about", active: true },
            { label: "Email", href: "mailto:genchang1@gmail.com", external: true },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/genchang/", external: true },
          ]}
        />
      </nav>

      {/* Main content */}
      <main className="flex-1 px-4 md:px-6">
        <section className="pt-8 md:pt-12 pb-12 max-w-[1100px]">
          <div className="flex flex-col gap-12 items-start">
            <div className="w-full max-w-[640px]">
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
              className="relative shrink-0 mx-auto"
              style={{
                width: "220px",
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

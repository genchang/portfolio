import Link from "next/link";
import HoverVideo from "./HoverVideo";
import ExternalArrow from "./ExternalArrow";
import SaFlagIcon from "./SaFlagIcon";

export default function Home() {
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
        className="flex flex-wrap items-center justify-between px-4 md:px-6 py-3 md:py-0 md:h-16 gap-x-4 gap-y-2 shrink-0"
        style={{ borderBottom: "1px solid rgba(50,64,79,0.1)" }}
      >
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

        {/* Right: nav links */}
        <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-2">
          {[
            { label: "Work", href: "/", active: true, external: false },
            { label: "Side quests", href: "/side-quests", active: false, external: false },
            { label: "About", href: "/about", active: false, external: false },
            { label: "Email", href: "mailto:genchang1@gmail.com", active: false, external: true },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/genchang/", active: false, external: true },
          ].map(({ label, href, active, external }) => (
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
      </nav>

      {/* Main content */}
      <main className="flex-1 px-4 md:px-6">
        {/* Hero section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 pt-16 md:pt-[180px] pb-8">
          {/* Left: heading */}
          <div className="max-w-[700px]">
            <h1
              className="text-[36px] leading-[42px] md:text-[49.9px] md:leading-[57.2px] tracking-[-0.34px] text-[#32404f]"
              style={{ fontFamily: "var(--font-tiempos)", fontWeight: 300 }}
            >
              I&apos;m Gen. Product designer by trade,{" "}
              <em style={{ fontWeight: 400 }}>tinkerer by nature</em>
            </h1>
          </div>

          {/* Right: work history */}
          <div className="flex flex-col gap-[2px] justify-end pb-1">
            {workHistory.map((item) => (
              <div key={item.year} className="flex flex-wrap items-start gap-x-4 md:gap-x-6 gap-y-1">
                <span
                  className="text-[15px] uppercase leading-[22.5px] min-w-[80px] md:min-w-[104px] shrink-0"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: 400,
                    color: "rgba(50,64,79,0.58)",
                  }}
                >
                  {item.year}
                </span>
                <span
                  className="text-[15px] leading-[22.5px] md:min-w-[282px] md:shrink-0"
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                    fontWeight: 400,
                    color: "#32404f",
                  }}
                >
                  {item.company}
                </span>
                <span
                  className="text-[15px] leading-[22.5px]"
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
          {/* Card 1 — Discovery Vitality */}
          <Link href="/vitality" className="flex flex-col gap-2 group">
            <div
              className="w-full overflow-hidden"
              style={{ border: "1px solid rgba(50,64,79,0.1)" }}
            >
              <div
                className="w-full bg-[#f4f7f9] overflow-hidden"
                style={{ aspectRatio: "16 / 9" }}
              >
                <HoverVideo src="/vitality.mp4" aria="Discovery Vitality project illustration" />
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <span
                  className="text-[16px] tracking-[0.6px] text-[#32404f] leading-normal"
                  style={{ fontFamily: "var(--font-tiempos)", fontWeight: 300 }}
                >
                  Built Once, Shipped Everywhere
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
                Scaling a global rewards platform across 10+ markets — from
                adaptive AI goals to localisation-ready design systems.
              </p>
            </div>
          </Link>

          {/* Card 2 — Vision Bank */}
          <Link href="/vision-bank" className="flex flex-col gap-2 group">
            <div
              className="w-full overflow-hidden"
              style={{ border: "1px solid rgba(50,64,79,0.1)" }}
            >
              <div
                className="w-full bg-[#eff2f7] overflow-hidden"
                style={{ aspectRatio: "16 / 9" }}
              >
                <HoverVideo src="/bank.mp4" aria="Vision Bank project illustration" />
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <span
                  className="text-[16px] tracking-[0.6px] text-[#32404f] leading-normal"
                  style={{ fontFamily: "var(--font-tiempos)", fontWeight: 300 }}
                >
                  Designing the foundations of a digital bank
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

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ExternalArrow from "./ExternalArrow";

export type NavItem = {
  label: string;
  href: string;
  active?: boolean;
  external?: boolean;
};

export default function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* Desktop inline nav */}
      <div className="hidden md:flex flex-wrap items-center gap-x-6 lg:gap-x-8 gap-y-2">
        {items.map(({ label, href, active, external }) => (
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

      {/* Mobile hamburger button (animated) */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="md:hidden relative inline-flex items-center justify-center w-10 h-10 -mr-2"
        style={{ color: "#32404f" }}
      >
        <span
          className="absolute block h-[1.5px] w-[22px] bg-current"
          style={{
            transition: "transform 320ms cubic-bezier(0.65, 0, 0.35, 1)",
            transformOrigin: "center",
            transform: open
              ? "translateY(0) rotate(45deg)"
              : "translateY(-5px) rotate(0deg)",
          }}
        />
        <span
          className="absolute block h-[1.5px] w-[22px] bg-current"
          style={{
            transition: "transform 320ms cubic-bezier(0.65, 0, 0.35, 1)",
            transformOrigin: "center",
            transform: open
              ? "translateY(0) rotate(-45deg)"
              : "translateY(5px) rotate(0deg)",
          }}
        />
      </button>

      {/* Mobile dropdown panel */}
      <div
        className="md:hidden w-full overflow-hidden"
        style={{
          flexBasis: "100%",
          maxHeight: open ? "320px" : "0px",
          opacity: open ? 1 : 0,
          transition:
            "max-height 320ms cubic-bezier(0.65, 0, 0.35, 1), opacity 240ms ease",
        }}
      >
        <div
          className="flex flex-col gap-3 pt-4 pb-1"
          onClick={() => setOpen(false)}
        >
          {items.map(({ label, href, active, external }, i) => (
            <Link
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className={`text-[15px] uppercase leading-[22.5px] inline-flex items-center gap-1.5 transition-colors ${active ? "text-[#e65f2e]" : "text-[rgba(50,64,79,0.58)] hover:text-[#e65f2e]"}`}
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 400,
                transform: open ? "translateY(0)" : "translateY(-6px)",
                opacity: open ? 1 : 0,
                transition: `transform 280ms cubic-bezier(0.33, 1, 0.68, 1) ${i * 30 + 60}ms, opacity 280ms ease ${i * 30 + 60}ms`,
              }}
            >
              {label}
              {external && <ExternalArrow />}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

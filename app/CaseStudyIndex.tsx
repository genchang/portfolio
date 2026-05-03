"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type IndexItem = { id: string; label: string };

export default function CaseStudyIndex({
  items,
  backHref = "/",
  backLabel = "Back",
}: {
  items: IndexItem[];
  backHref?: string;
  backLabel?: string;
}) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (items.length === 0) return;
    const targets = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => !!el);
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the topmost intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0 && visible[0].target.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        // Activate when section's top crosses ~25% from viewport top
        rootMargin: "-15% 0px -70% 0px",
        threshold: 0,
      },
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
    // Update URL hash without jumping
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav
      className="flex flex-col gap-4"
      style={{
        fontFamily: "var(--font-geist-sans)",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "24px",
      }}
    >
      <Link
        href={backHref}
        className="inline-flex items-center gap-2 mb-6 hover:text-[#e65f2e] transition-colors"
        style={{
          fontFamily: "var(--font-geist-mono)",
          fontWeight: 500,
          fontSize: "13px",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
          color: "#32404f",
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M9 3L4 7l5 4"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {backLabel}
      </Link>

      {items.map((item) => {
        const isActive = active === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            className="transition-colors hover:text-[#e65f2e]"
            style={{
              color: isActive ? "#32404f" : "rgba(50,64,79,0.45)",
              fontWeight: isActive ? 500 : 400,
            }}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}

"use client";

import { useEffect, useRef } from "react";

const DURATION = 4000;
const HOLD = 0.85;
const MAX = 300;

export default function VitalityIllustration() {
  const objRef = useRef<HTMLObjectElement>(null);

  useEffect(() => {
    const obj = objRef.current;
    if (!obj) return;
    const start = performance.now();
    const id = setInterval(() => {
      const text = obj.contentDocument?.getElementById("counter-text");
      if (!text) return;
      const t = ((performance.now() - start) % DURATION) / DURATION;
      const p = t < HOLD ? t / HOLD : 1;
      const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      text.textContent = String(Math.round(eased * MAX));
    }, 33);
    return () => clearInterval(id);
  }, []);

  return (
    <object
      ref={objRef}
      data="/vitality-animated.svg"
      type="image/svg+xml"
      aria-label="Discovery Vitality project illustration"
      className="w-full h-full"
      style={{ display: "block" }}
    />
  );
}

"use client";

/**
 * Card positions measured against the source image (1368x756).
 * Expressed as percentages so the overlay stays aligned at any size.
 */
const CARD = {
  leftPct: 30.0,   // 410 / 1368
  topPct: 4.0,     // 30 / 756
  widthPct: 38.0,  // 520 / 1368
  heightPct: 27.0, // 204 / 756
};

export default function VisionBankCard() {
  return (
    <div className="group relative w-full h-full overflow-hidden bg-[#eff2f7]">
      {/* Base layout image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/vision-bank.png"
        alt="Vision Bank card UI"
        className="absolute inset-0 w-full h-full object-cover select-none"
        draggable={false}
      />

      {/* Mask: covers the static middle card so the flipping overlay is the only one visible */}
      <div
        className="absolute bg-[#eff2f7]"
        style={{
          left: `${CARD.leftPct}%`,
          top: `${CARD.topPct}%`,
          width: `${CARD.widthPct}%`,
          height: `${CARD.heightPct}%`,
        }}
      />

      {/* Flipping middle card */}
      <div
        className="vb-flip absolute"
        style={{
          left: `${CARD.leftPct}%`,
          top: `${CARD.topPct}%`,
          width: `${CARD.widthPct}%`,
          height: `${CARD.heightPct}%`,
          perspective: "1200px",
        }}
      >
        <div
          className="vb-flip-inner w-full h-full"
          style={{
            backgroundImage: "url(/vision-bank.png)",
            // Image is laid over a virtual canvas of (100/widthPct) x (100/heightPct)
            // so the middle card fills the element exactly.
            backgroundSize: `${(100 / CARD.widthPct) * 100}% ${
              (100 / CARD.heightPct) * 100
            }%`,
            backgroundPosition: `${
              (CARD.leftPct / (100 - CARD.widthPct)) * 100
            }% ${(CARD.topPct / (100 - CARD.heightPct)) * 100}%`,
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      <style jsx>{`
        .vb-flip-inner {
          transform-origin: center;
          animation: vb-flip-cycle 4.5s ease-in-out infinite;
          animation-play-state: paused;
          will-change: transform, filter;
          backface-visibility: visible;
        }
        .group:hover .vb-flip-inner {
          animation-play-state: running;
        }

        /*
         * Three color states: blue → pink → orange → back to blue.
         * Each transition is a 360° rotateY so the card lands facing forward
         * again. The filter hue-rotate swaps at the mid-flip point (180°)
         * when the card is showing its back (mirrored), so the color change
         * is "revealed" as the card rotates into view.
         */
        @keyframes vb-flip-cycle {
          0% {
            transform: rotateY(0deg);
            filter: hue-rotate(0deg);
          }
          12% {
            transform: rotateY(0deg);
            filter: hue-rotate(0deg);
          }
          /* Flip 1: blue → pink */
          24% {
            transform: rotateY(180deg);
            filter: hue-rotate(0deg);
          }
          24.01% {
            transform: rotateY(180deg);
            filter: hue-rotate(110deg) saturate(1.15);
          }
          36% {
            transform: rotateY(360deg);
            filter: hue-rotate(110deg) saturate(1.15);
          }
          48% {
            transform: rotateY(360deg);
            filter: hue-rotate(110deg) saturate(1.15);
          }
          /* Flip 2: pink → orange */
          60% {
            transform: rotateY(540deg);
            filter: hue-rotate(110deg) saturate(1.15);
          }
          60.01% {
            transform: rotateY(540deg);
            filter: hue-rotate(185deg) saturate(1.3);
          }
          72% {
            transform: rotateY(720deg);
            filter: hue-rotate(185deg) saturate(1.3);
          }
          84% {
            transform: rotateY(720deg);
            filter: hue-rotate(185deg) saturate(1.3);
          }
          /* Flip 3: orange → blue (loop) */
          96% {
            transform: rotateY(900deg);
            filter: hue-rotate(185deg) saturate(1.3);
          }
          96.01% {
            transform: rotateY(900deg);
            filter: hue-rotate(0deg);
          }
          100% {
            transform: rotateY(1080deg);
            filter: hue-rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}

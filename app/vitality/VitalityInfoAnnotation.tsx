"use client";

import { useState, useEffect } from "react";

const ANNOTATION_TEXT =
  "Info icons can either be a pain or completely missable - in this case: they were both!";

// Layout constants — all px relative to the cluster's top-left corner.
// Arrow is left-side; text and icon are to the right with enough horizontal
// clearance so the 107.13° rotated arrow (~70px visual width) never overlaps.
const ARROW_TOP  = 25;
const ARROW_W    = 55;
const ARROW_H    = 65;

const TEXT_LEFT  = 75;   // clears arrow's rotated visual extent (~70px)
const TEXT_TOP   = 0;
const TEXT_W     = 205;

const CLUSTER_H  = TEXT_TOP + 80;  // enough for ~3 lines of text
const CLUSTER_W  = TEXT_LEFT + TEXT_W;      // 280

// Clip-path origin: approximate arrowhead tip position within the
// rotated bounding box (after 107.13° CW rotation the head points right).
const CLIP_X = "85%";
const CLIP_Y = "40%";

export default function VitalityInfoAnnotation({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  const [annotationText, setAnnotationText] = useState("");

  useEffect(() => {
    if (!hovered) {
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
      }, 15);
    }, 700);
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [hovered]);

  return (
    <div className="relative">
      {children}

      {/* Annotation column — hover target (bulb + cluster) */}
      <div
        className="hidden md:block absolute"
        style={{
          left: "calc(100% + 12px)",
          top: 0,
          bottom: 0,
          width: `${CLUSTER_W + 20}px`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-hidden="true"
      >
        {/* ── Default: bulb, vertically centred ── */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Annotations/bulb.svg"
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            width: 66,
            height: 66,
            opacity: hovered ? 0 : 0.5,
            transition: "opacity 0.3s ease",
            pointerEvents: "none",
          }}
          alt=""
        />

        {/* ── Hover cluster — fixed positions, nothing shifts ── */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            marginTop: `-${CLUSTER_H / 2 + 20}px`,
            width: `${CLUSTER_W}px`,
            height: `${CLUSTER_H}px`,
            pointerEvents: "none",
          }}
        >
          {/* 1. Arrow — rotated so arrowhead points toward text */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Annotations/arrow.svg"
            style={{
              position: "absolute",
              top: ARROW_TOP,
              left: 0,
              width: ARROW_W,
              height: ARROW_H,
              transform: "rotate(107.13deg)",
              transformOrigin: "center center",
              opacity: 0.5,
              clipPath: hovered
                ? `circle(150% at ${CLIP_X} ${CLIP_Y})`
                : `circle(0% at ${CLIP_X} ${CLIP_Y})`,
              transition: hovered
                ? "clip-path 0.5s ease-in-out 0.1s"
                : "none",
            }}
            alt=""
          />

          {/* 2. Annotation text */}
          <div
            style={{
              position: "absolute",
              top: TEXT_TOP,
              left: TEXT_LEFT,
              width: TEXT_W,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-gaegu)",
                fontSize: "17px",
                lineHeight: "25px",
                color: "rgba(0,0,0,0.5)",
                whiteSpace: "normal",
                display: "block",
              }}
            >
              {annotationText}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

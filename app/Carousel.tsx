"use client";

import { useEffect, useState } from "react";

export default function Carousel({
  images,
  intervalMs = 1500,
  alt,
  hoverToPlay = false,
  poster,
}: {
  images: string[];
  intervalMs?: number;
  alt: string;
  hoverToPlay?: boolean;
  poster?: string;
}) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(!hoverToPlay);
  const [showPoster, setShowPoster] = useState(!!poster);

  useEffect(() => {
    if (images.length <= 1 || !playing) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs, playing]);

  const handleEnter = () => {
    setPlaying(true);
    setShowPoster(false);
    setIndex((i) => (i + 1) % images.length);
  };

  const handleLeave = () => {
    setPlaying(false);
    if (poster) setShowPoster(true);
  };

  return (
    <div
      style={{ position: "relative", width: "100%", height: "100%" }}
      onMouseEnter={hoverToPlay ? handleEnter : undefined}
      onMouseLeave={hoverToPlay ? handleLeave : undefined}
    >
      {images.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt={i === 0 ? alt : ""}
          aria-hidden={i !== 0}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: i === index ? 1 : 0,
            transition: "opacity 600ms ease-in-out",
          }}
        />
      ))}

      {/* Poster overlay shown when not hovering */}
      {poster && showPoster && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={poster}
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
          }}
        />
      )}

      {/* Dot indicators */}
      <div
        style={{
          position: "absolute",
          bottom: 12,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: 6,
          pointerEvents: "none",
        }}
      >
        {images.map((src, i) => (
          <span
            key={src}
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background:
                i === index ? "#32404f" : "rgba(50,64,79,0.35)",
              transition: "background 300ms ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

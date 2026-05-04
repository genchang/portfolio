"use client";

import { useEffect, useRef, useState } from "react";

export default function HoverVideo({
  src,
  aria,
  className,
  controls = false,
  poster,
  fit = "cover",
  autoPlayOnMobile = false,
}: {
  src: string;
  aria: string;
  className?: string;
  controls?: boolean;
  poster?: string;
  fit?: "cover" | "contain";
  autoPlayOnMobile?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPoster, setShowPoster] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!autoPlayOnMobile) return;
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const setFromMediaQuery = () => setIsMobile(mediaQuery.matches);

    setFromMediaQuery();
    mediaQuery.addEventListener("change", setFromMediaQuery);

    return () => mediaQuery.removeEventListener("change", setFromMediaQuery);
  }, [autoPlayOnMobile]);

  useEffect(() => {
    if (!autoPlayOnMobile || !isMobile) return;

    const v = videoRef.current;
    if (!v) return;

    setShowPoster(false);
    void v.play().catch(() => {});
  }, [autoPlayOnMobile, isMobile]);

  const handleEnter = () => {
    const v = videoRef.current;
    if (!v) return;
    setShowPoster(false);
    void v.play().catch(() => {});
  };

  const handleLeave = () => {
    if (isMobile) return;
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    if (poster) setShowPoster(true);
  };

  return (
    <div
      className={className}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <video
        ref={videoRef}
        src={src}
        aria-label={aria}
        poster={poster}
        muted
        loop
        playsInline
        controls={controls}
        preload="metadata"
        style={{ display: "block", width: "100%", height: "100%", objectFit: fit }}
      />
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
    </div>
  );
}

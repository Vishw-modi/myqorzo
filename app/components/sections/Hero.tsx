"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

const DRUG_IMAGES = [
  { src: "/drug-1.png", alt: "MYQORZO capsules in blister packaging" },
  { src: "/drug-2.png", alt: "MYQORZO medicine bottle" },
  { src: "/drug-3.png", alt: "MYQORZO capsule close-up" },
];

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  /* Staggered entrance animation */
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    const children = el.children;
    Array.from(children).forEach((child, i) => {
      const htmlChild = child as HTMLElement;
      htmlChild.style.opacity = "0";
      htmlChild.style.transform = "translateY(30px)";
      htmlChild.style.transition = `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${
        i * 0.15 + 0.3
      }s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.15 + 0.3}s`;

      requestAnimationFrame(() => {
        htmlChild.style.opacity = "1";
        htmlChild.style.transform = "translateY(0)";
      });
    });

    setImageLoaded(true);
  }, []);

  /* Auto-rotate images */
  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % DRUG_IMAGES.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <section id="hero" className="hero" aria-label="Introduction">
      {/* Background particle effect */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 50%, rgba(201,165,78,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(37,99,235,0.06) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          maxWidth: "var(--content-max-width)",
          padding: "0 2rem",
          alignItems: "center",
          width: "100%",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Left column — Text */}
        <div ref={contentRef}>
          <p className="hero__eyebrow">Bristol-Myers Squibb</p>
          <h1 className="hero__title" style={{ textAlign: "left" }}>
            MYQORZO
            <sup style={{ fontSize: "0.35em", verticalAlign: "super" }}>®</sup>
          </h1>
          <p
            className="hero__subtitle"
            style={{
              textAlign: "left",
              margin: "0 0 2rem",
              fontFamily: "var(--font-body)",
            }}
          >
            Aficamten marks a turning point in cardiac care. As a precision
            myosin inhibitor, it targets the molecular engine of obstructive
            hypertrophic cardiomyopathy, offering patients a path from burden to
            function.
          </p>

          {/* Generic name */}
          <p
            style={{
              fontFamily: "var(--font-data)",
              fontSize: "0.875rem",
              color: "var(--text-on-dark-secondary)",
              letterSpacing: "0.05em",
              marginBottom: "1.5rem",
              textAlign: "left",
            }}
          >
            aficamten · Cardiac Myosin Inhibitor
          </p>

          {/* FDA Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.6rem 1.5rem",
              border: "1px solid rgba(201,165,78,0.3)",
              borderRadius: "100px",
              fontSize: "0.8125rem",
              color: "var(--accent-gold-light)",
              fontFamily: "var(--font-data)",
              letterSpacing: "0.04em",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--accent-gold)",
                display: "block",
                boxShadow: "0 0 8px rgba(201,165,78,0.5)",
              }}
            />
            FDA Approved — December 18, 2025
          </div>
        </div>

        {/* Right column — Drug Image Carousel */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Image container with glow */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 420,
              aspectRatio: "1",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(201,165,78,0.15), 0 0 80px rgba(201,165,78,0.08)",
              border: "1px solid rgba(201,165,78,0.15)",
              background: "linear-gradient(135deg, rgba(17,24,39,0.9) 0%, rgba(11,17,32,0.95) 100%)",
            }}
          >
            {DRUG_IMAGES.map((img, i) => (
              <div
                key={img.src}
                style={{
                  position: i === 0 ? "relative" : "absolute",
                  inset: 0,
                  opacity: currentImage === i ? 1 : 0,
                  transform: currentImage === i ? "scale(1)" : "scale(1.05)",
                  transition: "opacity 1s ease, transform 1s ease",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  sizes="420px"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {/* Carousel dots */}
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              marginTop: "1.5rem",
            }}
          >
            {DRUG_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                aria-label={`View drug image ${i + 1}`}
                style={{
                  width: currentImage === i ? 24 : 8,
                  height: 8,
                  borderRadius: 100,
                  background:
                    currentImage === i
                      ? "var(--accent-gold)"
                      : "rgba(201,165,78,0.3)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator" aria-hidden="true">
        <span>Scroll to explore</span>
        <div className="hero__scroll-line" />
      </div>

      {/* Responsive override */}
      <style jsx>{`
        @media (max-width: 768px) {
          .hero > div:nth-child(2) {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}

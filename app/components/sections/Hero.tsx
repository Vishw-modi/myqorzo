"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const DRUG_IMAGES = [
  { src: "/drug-1.png", alt: "MYQORZO capsules in blister packaging" },
  { src: "/drug-2.png", alt: "MYQORZO medicine bottle" },
  { src: "/drug-3.jpg", alt: "MYQORZO capsule close-up" },
];

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);

  /* Staggered entrance animation for text */
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
  }, []);

  /* Auto-rotate images */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % DRUG_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
          gridTemplateColumns: "1.1fr 0.9fr",
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
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hero__eyebrow"
          >
            Bristol-Myers Squibb
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero__title" 
            style={{ textAlign: "left" }}
          >
            MYQORZO
            <sup style={{ fontSize: "0.35em", verticalAlign: "super" }}>®</sup>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
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
          </motion.p>

          {/* Generic name */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
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
          </motion.p>

          {/* FDA Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.6rem 1.5rem",
              border: "1px solid rgba(201,165,78,0.3)",
              background: "rgba(201,165,78,0.05)",
              backdropFilter: "blur(10px)",
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
          </motion.div>
        </div>

        {/* Right column — Premium Drug Image Composition */}
        <div
          style={{
            position: "relative",
            height: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Main Display Area with Glassmorphism */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Background Glow */}
            <div 
              style={{
                position: "absolute",
                width: "120%",
                height: "120%",
                background: "radial-gradient(circle, rgba(201,165,78,0.15) 0%, transparent 70%)",
                zIndex: -1,
                filter: "blur(40px)",
              }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, scale: 0.9, y: 20, rotateY: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotateY: 0 }}
                exit={{ opacity: 0, scale: 1.1, y: -20, rotateY: 10 }}
                transition={{ 
                  duration: 1, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "400px",
                  aspectRatio: "1",
                  borderRadius: "32px",
                  overflow: "hidden",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.1)",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <Image
                  src={DRUG_IMAGES[currentImage].src}
                  alt={DRUG_IMAGES[currentImage].alt}
                  fill
                  style={{ 
                    objectFit: "cover", 
                    objectPosition: "center",
                    filter: "contrast(1.05) brightness(1.1)",
                  }}
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
                
                {/* Visual Overlay for Depth */}
                <div 
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 40%)",
                    pointerEvents: "none",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Decorative Elements (Floating Images Miniatures) */}
            <div style={{ position: "absolute", width: "100%", height: "100%", pointerEvents: "none" }}>
              {DRUG_IMAGES.map((img, i) => (
                <motion.div
                  key={`mini-${i}`}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute",
                    width: "80px",
                    height: "80px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                    opacity: 0.6,
                    display: i === currentImage ? "none" : "block",
                    left: i === 0 ? "-20px" : i === 1 ? "auto" : "20px",
                    right: i === 1 ? "-20px" : "auto",
                    top: i === 0 ? "40px" : i === 1 ? "160px" : "auto",
                    bottom: i === 2 ? "40px" : "auto",
                    zIndex: 1,
                  }}
                >
                  <Image src={img.src} alt="" fill style={{ objectFit: "cover" }} sizes="80px" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* New Premium Interaction Dots */}
          <div
            style={{
              position: "absolute",
              bottom: "-40px",
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            {DRUG_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                style={{
                  width: currentImage === i ? "40px" : "120px",
                  height: "4px",
                  borderRadius: "4px",
                  background: currentImage === i ? "var(--accent-gold)" : "rgba(255,255,255,0.1)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  padding: 0,
                }}
                aria-label={`Switch to image ${i + 1}`}
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

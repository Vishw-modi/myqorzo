"use client";

import React from "react";
import { useIntersectionObserver } from "@/app/hooks/useIntersectionObserver";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  variant?: "light" | "dark" | "elevated";
  className?: string;
  noPadding?: boolean;
}

export default function Section({
  id,
  children,
  variant = "light",
  className = "",
  noPadding = false,
}: SectionProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.08 });

  const variantClass =
    variant === "dark"
      ? "section--dark"
      : variant === "elevated"
      ? "section--elevated"
      : "";

  return (
    <section
      id={id}
      ref={ref}
      className={`section ${variantClass} ${
        noPadding ? "!py-0" : ""
      } ${className}`}
      aria-label={id.replace(/-/g, " ")}
    >
      <div
        className={`container-main ${isVisible ? "visible" : ""}`}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition:
            "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {children}
      </div>
    </section>
  );
}

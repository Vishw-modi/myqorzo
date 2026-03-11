"use client";

import React, { useRef, useEffect, useState } from "react";

interface ChartContainerProps {
  title?: string;
  source?: string;
  ariaLabel: string;
  children: React.ReactNode;
  className?: string;
  height?: number;
}

export default function ChartContainer({
  title,
  source,
  ariaLabel,
  children,
  className = "",
  height = 320,
}: ChartContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`chart-wrapper ${className}`}
      role="img"
      aria-label={ariaLabel}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.97)",
        transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {title && <h4 className="chart-wrapper__title">{title}</h4>}
      <div style={{ position: "relative", height }}>{isVisible && children}</div>
      {source && <p className="chart-wrapper__source">{source}</p>}
    </div>
  );
}

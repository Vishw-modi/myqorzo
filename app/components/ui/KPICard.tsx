"use client";

import React from "react";
import { useCountUp } from "@/app/hooks/useCountUp";

interface KPICardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  delta?: string;
  deltaType?: "positive" | "negative";
  duration?: number;
  className?: string;
}

export default function KPICard({
  value,
  suffix = "",
  prefix = "",
  label,
  delta,
  deltaType,
  duration = 2000,
  className = "",
}: KPICardProps) {
  const { count, ref } = useCountUp(value, duration);

  return (
    <div className={`card kpi-card ${className}`}>
      <span ref={ref} className="kpi-card__value text-kpi text-gold">
        {prefix}
        {count}
        {suffix}
      </span>
      <span className="kpi-card__label">{label}</span>
      {delta && (
        <span
          className={`kpi-card__delta ${
            deltaType === "positive"
              ? "kpi-card__delta--positive"
              : deltaType === "negative"
              ? "kpi-card__delta--negative"
              : ""
          }`}
        >
          {delta}
        </span>
      )}
    </div>
  );
}

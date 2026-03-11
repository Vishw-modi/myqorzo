"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Section from "@/app/components/ui/Section";
import ChartContainer from "@/app/components/ui/ChartContainer";
import KPICard from "@/app/components/ui/KPICard";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const revenueData = {
  labels: ["2025", "2026", "2027", "2028", "2029", "2030"],
  datasets: [
    {
      label: "MYQORZO Revenue Projection ($M)",
      data: [350, 850, 1400, 2100, 2800, 3500],
      backgroundColor: [
        "rgba(201,165,78,0.3)",
        "rgba(201,165,78,0.45)",
        "rgba(201,165,78,0.55)",
        "rgba(201,165,78,0.7)",
        "rgba(201,165,78,0.8)",
        "rgba(201,165,78,0.9)",
      ],
      borderColor: "rgba(201,165,78,1)",
      borderWidth: 1,
      borderRadius: 6,
    },
  ],
};

const revenueOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: "#0B1120",
      bodyFont: { family: "JetBrains Mono" },
      padding: 12,
      cornerRadius: 8,
      callbacks: {
        label: function (ctx: { raw?: unknown }) {
          return ` $${ctx.raw}M`;
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: { color: "rgba(0,0,0,0.05)" },
      ticks: {
        font: { family: "JetBrains Mono", size: 11 },
        color: "#9CA3AF",
        callback: function (val: string | number) { return `$${val}M`; },
      },
    },
    x: {
      grid: { display: false },
      ticks: { font: { family: "DM Sans", size: 12, weight: 600 as const }, color: "#4B5563" },
    },
  },
  animation: { duration: 1500, easing: "easeOutQuart" as const },
};

export default function CommercialOutlook() {
  return (
    <Section id="commercial" variant="elevated">
      <p className="section__label">Financial Outlook</p>
      <h2 className="section__title">Commercial Projections</h2>
      <hr className="section__divider" />

      <div className="grid-12" style={{ marginBottom: "3rem" }}>
        <div className="col-span-3">
          <KPICard value={3.5} suffix="B" prefix="$" label="Peak Revenue (2030)" />
        </div>
        <div className="col-span-3">
          <KPICard value={58} suffix="%" label="Projected Market Share" />
        </div>
        <div className="col-span-3">
          <KPICard value={18} suffix="K" prefix="$" label="Annual Cost per Patient" />
        </div>
        <div className="col-span-3">
          <KPICard
            value={42}
            suffix="%"
            label="YoY Growth Rate"
            delta="▲ Strong"
            deltaType="positive"
          />
        </div>
      </div>

      <div className="asymmetric-layout">
        <div>
          <ChartContainer
            title="Revenue Projection (2025–2030)"
            ariaLabel="Bar chart showing MYQORZO revenue growing from $350M in 2025 to $3.5B by 2030"
            source="Source: BMS investor guidance; analyst estimates"
            height={320}
          >
            <Bar data={revenueData} options={revenueOptions} />
          </ChartContainer>
        </div>
        <div>
          <p style={{ marginBottom: "1.5rem" }}>
            Bristol-Myers Squibb projects MYQORZO to reach peak annual sales of
            approximately $3.5 billion by 2030, positioning it as a cornerstone
            of the company's cardiovascular franchise.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Revenue growth will be driven by patient uptake in the U.S.,
            followed by approvals and launches in the EU, Japan, and other major
            markets. The pricing strategy balances access with the value
            proposition of avoiding surgical intervention.
          </p>
          <p>
            Additional upside potential exists through label expansion into
            non-obstructive HCM, pediatric indications, and combination therapy
            studies. These could extend the commercial lifecycle well beyond
            the current patent protection period.
          </p>
        </div>
      </div>
    </Section>
  );
}

"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Section from "@/app/components/ui/Section";
import ChartContainer from "@/app/components/ui/ChartContainer";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const marketData = {
  labels: ["2024", "2025", "2026", "2027", "2028", "2029", "2030"],
  datasets: [
    {
      label: "Cardiac Myosin Inhibitor Market ($B)",
      data: [0.4, 1.2, 2.5, 3.8, 5.0, 6.2, 7.5],
      borderColor: "rgba(201,165,78,1)",
      backgroundColor: "rgba(201,165,78,0.12)",
      fill: true,
      tension: 0.4,
      pointRadius: 5,
      pointBackgroundColor: "rgba(201,165,78,1)",
      borderWidth: 2.5,
    },
  ],
};

const marketOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        font: { family: "DM Sans", size: 12 },
        color: "#4B5563",
        usePointStyle: true,
        padding: 20,
      },
    },
    tooltip: {
      backgroundColor: "#0B1120",
      bodyFont: { family: "JetBrains Mono" },
      padding: 12,
      cornerRadius: 8,
      callbacks: {
        label: function (ctx: { raw?: unknown }) {
          return ` $${ctx.raw}B`;
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Revenue ($B)",
        font: { family: "DM Sans", size: 12, weight: 600 as const },
        color: "#6B7280",
      },
      grid: { color: "rgba(0,0,0,0.05)" },
      ticks: {
        font: { family: "JetBrains Mono", size: 11 },
        color: "#9CA3AF",
        callback: function (val: string | number) { return `$${val}B`; },
      },
    },
    x: {
      grid: { display: false },
      ticks: { font: { family: "DM Sans", size: 12, weight: 600 as const }, color: "#4B5563" },
    },
  },
  animation: { duration: 1500, easing: "easeOutQuart" as const },
};

export default function MarketAnalysis() {
  return (
    <Section id="market" variant="dark">
      <p className="section__label">Market Landscape</p>
      <h2 className="section__title">Cardiac Myosin Inhibitor Market</h2>
      <hr className="section__divider" />

      <div className="asymmetric-layout" style={{ marginTop: "3rem" }}>
        <div>
          <ChartContainer
            title="Projected Market Growth (2024–2030)"
            ariaLabel="Area chart showing cardiac myosin inhibitor market growing from $0.4B in 2024 to $7.5B by 2030"
            source="Source: Industry analyst consensus estimates"
            height={320}
            className="card--dark"
          >
            <Line data={marketData} options={marketOptions} />
          </ChartContainer>
        </div>
        <div>
          <p style={{ marginBottom: "1.5rem" }}>
            The cardiac myosin inhibitor segment is projected to grow from
            approximately $400 million in 2024 to $7.5 billion by 2030,
            representing one of the fastest-growing therapeutic categories in
            cardiovascular medicine.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Growth will be driven by three factors: expanding diagnosis of the
            oHCM population through improved screening, increased prescriber
            familiarity with the drug class following commercial launch, and
            potential label expansion into non-obstructive HCM and pediatric
            populations.
          </p>
          <p>
            MYQORZO enters this market with second-mover advantage. While
            mavacamten (CAMZYOS) established the therapeutic category, aficamten
            offers a differentiated pharmacological profile that may broaden the
            addressable patient population and capture meaningful market share.
          </p>
        </div>
      </div>
    </Section>
  );
}

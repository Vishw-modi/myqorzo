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

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const safetyData = {
  labels: [
    "Headache",
    "Dizziness",
    "AF/Atrial Flutter",
    "Reduced LVEF",
    "Fatigue",
    "Nausea",
  ],
  datasets: [
    {
      label: "MYQORZO (%)",
      data: [10.6, 7.8, 5.7, 3.5, 4.3, 3.5],
      backgroundColor: "rgba(201,165,78,0.85)",
      borderRadius: 6,
    },
    {
      label: "Placebo (%)",
      data: [7.1, 5.0, 2.1, 0.7, 3.5, 2.8],
      backgroundColor: "rgba(156,163,175,0.4)",
      borderRadius: 6,
    },
  ],
};

const safetyOptions = {
  indexAxis: "y" as const,
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        font: { family: "DM Sans", size: 12 },
        color: "#F9FAFB",
        usePointStyle: true,
        padding: 20,
      },
    },
    tooltip: {
      backgroundColor: "#1F2937",
      bodyFont: { family: "JetBrains Mono" },
      padding: 12,
      cornerRadius: 8,
      callbacks: {
        label: function (ctx: { dataset?: { label?: string }; raw?: unknown }) {
          return ` ${ctx.dataset?.label}: ${ctx.raw}%`;
        },
      },
    },
  },
  scales: {
    x: {
      grid: { color: "rgba(255,255,255,0.06)" },
      ticks: { font: { family: "JetBrains Mono", size: 11 }, color: "#9CA3AF" },
      title: {
        display: true,
        text: "Incidence (%)",
        font: { family: "DM Sans", size: 12, weight: 600 as const },
        color: "#9CA3AF",
      },
    },
    y: {
      grid: { display: false },
      ticks: { font: { family: "DM Sans", size: 12 }, color: "#D1D5DB" },
    },
  },
  animation: { duration: 1500, easing: "easeOutQuart" as const },
};

export default function SafetyProfile() {
  return (
    <Section id="safety" variant="dark">
      <p className="section__label">Safety</p>
      <h2 className="section__title">Safety &amp; Tolerability</h2>
      <hr className="section__divider" />

      <div className="asymmetric-layout" style={{ marginTop: "3rem" }}>
        <div>
          <ChartContainer
            title="Adverse Events (≥3% Incidence)"
            ariaLabel="Horizontal bar chart comparing adverse event rates between MYQORZO and placebo"
            source="Source: SEQUOIA-HCM safety population"
            height={340}
            className="card--dark"
          >
            <Bar data={safetyData} options={safetyOptions} />
          </ChartContainer>
        </div>
        <div>
          <p style={{ marginBottom: "1.5rem" }}>
            Across the SEQUOIA-HCM trial, aficamten demonstrated a favorable
            safety profile consistent with its mechanism of action. The most
            common adverse events were headache (10.6%), dizziness (7.8%), and
            atrial fibrillation or flutter (5.7%).
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Left ventricular ejection fraction reduction below 50% was observed
            in 3.5% of aficamten-treated patients versus 0.7% on placebo.
            Critically, all cases were reversible upon dose reduction or
            temporary discontinuation, reflecting the predictable pharmacology
            of the compound.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            There were no treatment-related deaths. Discontinuation rates due to
            adverse events were comparable between arms: 4.3% in the aficamten
            group versus 2.1% in placebo.
          </p>
          <p>
            The safety profile supports the need for echocardiographic monitoring
            of LVEF, which is formalized through the MYQORZO REMS program.
          </p>
        </div>
      </div>
    </Section>
  );
}

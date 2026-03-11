"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import Section from "@/app/components/ui/Section";
import ChartContainer from "@/app/components/ui/ChartContainer";

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, BarElement,
  Title, Tooltip, Legend, Filler
);

const lvotData = {
  labels: ["Baseline", "Week 2", "Week 4", "Week 12", "Week 24", "Week 48"],
  datasets: [
    {
      label: "MYQORZO (Aficamten)",
      data: [80, 52, 35, 28, 25, 22],
      borderColor: "rgba(201,165,78,1)",
      backgroundColor: "rgba(201,165,78,0.1)",
      fill: true,
      tension: 0.4,
      pointRadius: 5,
      pointBackgroundColor: "rgba(201,165,78,1)",
      borderWidth: 2.5,
    },
    {
      label: "Placebo",
      data: [78, 76, 74, 73, 72, 71],
      borderColor: "rgba(156,163,175,0.6)",
      backgroundColor: "transparent",
      borderDash: [6, 4],
      tension: 0.4,
      pointRadius: 4,
      pointBackgroundColor: "rgba(156,163,175,0.6)",
      borderWidth: 2,
    },
  ],
};

const lvotOptions = {
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
        label: function (ctx: { dataset?: { label?: string }; raw?: unknown }) {
          return ` ${ctx.dataset?.label}: ${ctx.raw} mmHg`;
        },
      },
    },
  },
  scales: {
    y: {
      title: {
        display: true,
        text: "LVOT Gradient (mmHg)",
        font: { family: "DM Sans", size: 12, weight: 600 as const },
        color: "#6B7280",
      },
      grid: { color: "rgba(0,0,0,0.05)" },
      ticks: { font: { family: "JetBrains Mono", size: 11 }, color: "#9CA3AF" },
    },
    x: {
      grid: { display: false },
      ticks: { font: { family: "DM Sans", size: 12 }, color: "#4B5563" },
    },
  },
  animation: { duration: 1500, easing: "easeOutQuart" as const },
};

const endpointsData = {
  labels: ["pVO₂ Change", "NYHA Improvement", "KCCQ-CSS", "NT-proBNP Reduction"],
  datasets: [
    {
      label: "MYQORZO",
      data: [1.8, 65, 12.2, 45],
      backgroundColor: "rgba(201,165,78,0.85)",
      borderRadius: 6,
    },
    {
      label: "Placebo",
      data: [0.3, 24, 3.1, 8],
      backgroundColor: "rgba(156,163,175,0.4)",
      borderRadius: 6,
    },
  ],
};

const endpointsOptions = {
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
    },
  },
  scales: {
    y: {
      grid: { color: "rgba(0,0,0,0.05)" },
      ticks: { font: { family: "JetBrains Mono", size: 11 }, color: "#9CA3AF" },
    },
    x: {
      grid: { display: false },
      ticks: { font: { family: "DM Sans", size: 11, weight: 600 as const }, color: "#4B5563" },
    },
  },
  animation: { duration: 1500, easing: "easeOutQuart" as const },
};

export default function ClinicalTrials() {
  return (
    <Section id="clinical-trials" variant="light">
      <p className="section__label">The Evidence</p>
      <h2 className="section__title">SEQUOIA-HCM Phase 3 Results</h2>
      <hr className="section__divider" />

      <div className="asymmetric-layout" style={{ marginTop: "3rem" }}>
        <div>
          <ChartContainer
            title="LVOT Gradient Over Time"
            ariaLabel="Line chart showing LVOT gradient reduction over 48 weeks for MYQORZO vs placebo"
            source="Source: SEQUOIA-HCM (NCT05186818)"
            height={320}
          >
            <Line data={lvotData} options={lvotOptions} />
          </ChartContainer>
        </div>
        <div>
          <p style={{ marginBottom: "1.5rem" }}>
            The SEQUOIA-HCM trial enrolled 282 adults with symptomatic obstructive
            HCM across 101 sites in 14 countries. Patients were randomized 1:1 to
            receive aficamten or placebo for 24 weeks, with a 24-week open-label
            extension.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Aficamten achieved its primary endpoint with a mean LVOT gradient
            reduction of 56 mmHg from baseline versus 4 mmHg in the placebo arm
            (p&lt;0.0001). The gradient reduction was evident by Week 2 and
            sustained through Week 48.
          </p>
          <p>
            Secondary endpoints including peak oxygen consumption (pVO₂), NYHA
            functional class improvement, and Kansas City Cardiomyopathy
            Questionnaire scores all demonstrated statistically significant
            benefits favoring aficamten.
          </p>
        </div>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <ChartContainer
          title="Key Efficacy Endpoints"
          ariaLabel="Grouped bar chart comparing MYQORZO versus placebo across four endpoints"
          source="Source: SEQUOIA-HCM primary analysis"
          height={300}
        >
          <Bar data={endpointsData} options={endpointsOptions} />
        </ChartContainer>
      </div>
    </Section>
  );
}

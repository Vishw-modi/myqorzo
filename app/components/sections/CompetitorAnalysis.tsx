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

const compData = {
  labels: [
    "MYQORZO (aficamten)",
    "CAMZYOS (mavacamten)",
    "Disopyramide",
    "Beta-Blockers",
    "Verapamil",
  ],
  datasets: [
    {
      label: "Efficacy Score",
      data: [88, 82, 55, 40, 35],
      backgroundColor: [
        "rgba(201,165,78,0.9)",
        "rgba(37,99,235,0.7)",
        "rgba(156,163,175,0.5)",
        "rgba(156,163,175,0.35)",
        "rgba(156,163,175,0.25)",
      ],
      borderRadius: 6,
    },
  ],
};

const compOptions = {
  indexAxis: "y" as const,
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: "#0B1120",
      bodyFont: { family: "JetBrains Mono" },
      padding: 12,
      cornerRadius: 8,
    },
  },
  scales: {
    x: {
      max: 100,
      grid: { color: "rgba(0,0,0,0.05)" },
      ticks: { font: { family: "JetBrains Mono", size: 11 }, color: "#9CA3AF" },
    },
    y: {
      grid: { display: false },
      ticks: { font: { family: "DM Sans", size: 12, weight: 600 as const }, color: "#4B5563" },
    },
  },
  animation: { duration: 1500, easing: "easeOutQuart" as const },
};

const ADVANTAGES = [
  { label: "Shorter Half-Life", myqorzo: "6–8 hrs", competitor: "~9 days (mavacamten)" },
  { label: "Drug Interactions", myqorzo: "Minimal CYP risk", competitor: "Significant CYP2C19 dependence" },
  { label: "Dose Titration", myqorzo: "Flexible, LVEF-guided", competitor: "Complex, delayed response" },
  { label: "Reversibility", myqorzo: "2–3 weeks", competitor: "4–8 weeks" },
];

export default function CompetitorAnalysis() {
  return (
    <Section id="competitors" variant="light">
      <p className="section__label">Competitive Landscape</p>
      <h2 className="section__title">Differentiated Profile</h2>
      <hr className="section__divider" />

      <div className="asymmetric-layout" style={{ marginTop: "3rem" }}>
        <div>
          <ChartContainer
            title="Comparative Efficacy Profile"
            ariaLabel="Horizontal bar chart comparing efficacy scores of oHCM therapies"
            source="Source: Cross-trial analysis; indirect comparison"
            height={300}
          >
            <Bar data={compData} options={compOptions} />
          </ChartContainer>
        </div>
        <div>
          <p style={{ marginBottom: "1.5rem" }}>
            MYQORZO differentiates itself from mavacamten through pharmacokinetic
            advantages that translate into clinical flexibility. Its shorter
            half-life of 6 to 8 hours enables rapid dose adjustments and quicker
            resolution of any excessive cardiac suppression.
          </p>
          <p style={{ marginBottom: "2rem" }}>
            Unlike mavacamten, aficamten has minimal cytochrome P450 interaction
            risk, simplifying concomitant medication management. This is
            particularly relevant for the oHCM population, who frequently require
            anticoagulants and other cardiac medications.
          </p>

          {/* Comparison table */}
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.875rem",
              }}
            >
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "0.75rem", borderBottom: "2px solid var(--border-light)", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "0.08em" }}>Attribute</th>
                  <th style={{ textAlign: "left", padding: "0.75rem", borderBottom: "2px solid var(--accent-gold)", color: "var(--accent-gold)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "0.08em" }}>MYQORZO</th>
                  <th style={{ textAlign: "left", padding: "0.75rem", borderBottom: "2px solid var(--border-light)", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "0.08em" }}>Competitor</th>
                </tr>
              </thead>
              <tbody>
                {ADVANTAGES.map((row) => (
                  <tr key={row.label}>
                    <td style={{ padding: "0.75rem", borderBottom: "1px solid var(--border-light)", fontWeight: 600, color: "var(--text-primary)" }}>{row.label}</td>
                    <td style={{ padding: "0.75rem", borderBottom: "1px solid var(--border-light)", color: "var(--accent-gold-dark)", fontWeight: 600 }}>{row.myqorzo}</td>
                    <td style={{ padding: "0.75rem", borderBottom: "1px solid var(--border-light)", color: "var(--text-muted)" }}>{row.competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Section>
  );
}

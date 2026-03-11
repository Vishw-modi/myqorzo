"use client";

import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import Section from "@/app/components/ui/Section";
import ChartContainer from "@/app/components/ui/ChartContainer";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const radarData = {
  labels: ["Efficacy", "Safety", "Convenience", "Market Access", "Differentiation", "Pipeline"],
  datasets: [
    {
      label: "MYQORZO",
      data: [90, 78, 88, 72, 85, 70],
      borderColor: "rgba(201,165,78,1)",
      backgroundColor: "rgba(201,165,78,0.2)",
      borderWidth: 2,
      pointBackgroundColor: "rgba(201,165,78,1)",
      pointRadius: 4,
    },
    {
      label: "CAMZYOS",
      data: [82, 68, 60, 85, 65, 75],
      borderColor: "rgba(37,99,235,0.7)",
      backgroundColor: "rgba(37,99,235,0.1)",
      borderWidth: 2,
      pointBackgroundColor: "rgba(37,99,235,0.7)",
      pointRadius: 4,
    },
  ],
};

const radarOptions = {
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
    r: {
      angleLines: { color: "rgba(0,0,0,0.06)" },
      grid: { color: "rgba(0,0,0,0.06)" },
      pointLabels: {
        font: { family: "DM Sans", size: 11, weight: 600 as const },
        color: "#4B5563",
      },
      ticks: { display: false },
      suggestedMin: 0,
      suggestedMax: 100,
    },
  },
  animation: { duration: 1500 },
};

const SWOT = {
  strengths: [
    "Shorter half-life enables rapid dose adjustment",
    "Minimal CYP drug interaction risk",
    "Robust Phase 3 efficacy data (SEQUOIA-HCM)",
    "Favorable reversibility profile",
  ],
  weaknesses: [
    "Second-to-market behind mavacamten",
    "REMS program adds prescribing complexity",
    "Required echocardiographic monitoring",
    "Limited long-term safety data beyond 48 weeks",
  ],
  opportunities: [
    "Label expansion into non-obstructive HCM",
    "Pediatric indication development",
    "Growing diagnostic rates increase addressable population",
    "Ex-US market launches in 2025–2027",
  ],
  threats: [
    "Mavacamten commercial entrenchment",
    "Generic erosion of beta-blocker alternatives",
    "Payer resistance to premium pricing",
    "Emerging pipeline competitors in myosin inhibition",
  ],
};

export default function SWOTAnalysis() {
  return (
    <Section id="swot" variant="dark">
      <p className="section__label">Strategic Assessment</p>
      <h2 className="section__title">SWOT Analysis</h2>
      <hr className="section__divider" />

      <div className="asymmetric-layout" style={{ marginTop: "3rem" }}>
        <div>
          <ChartContainer
            title="Competitive Positioning Radar"
            ariaLabel="Radar chart comparing MYQORZO vs CAMZYOS across 6 strategic dimensions"
            source="Source: Internal strategic assessment"
            height={350}
            className="card--dark"
          >
            <Radar data={radarData} options={radarOptions} />
          </ChartContainer>
        </div>
        <div>
          <div className="swot-grid">
            <div className="swot-card swot-card--strengths" style={{ background: "var(--bg-dark-card)" }}>
              <h4 className="swot-card__title">Strengths</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.875rem", lineHeight: 1.7 }}>
                {SWOT.strengths.map((s) => (
                  <li key={s} style={{ marginBottom: "0.5rem" }}>• {s}</li>
                ))}
              </ul>
            </div>
            <div className="swot-card swot-card--weaknesses" style={{ background: "var(--bg-dark-card)" }}>
              <h4 className="swot-card__title">Weaknesses</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.875rem", lineHeight: 1.7 }}>
                {SWOT.weaknesses.map((s) => (
                  <li key={s} style={{ marginBottom: "0.5rem" }}>• {s}</li>
                ))}
              </ul>
            </div>
            <div className="swot-card swot-card--opportunities" style={{ background: "var(--bg-dark-card)" }}>
              <h4 className="swot-card__title">Opportunities</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.875rem", lineHeight: 1.7 }}>
                {SWOT.opportunities.map((s) => (
                  <li key={s} style={{ marginBottom: "0.5rem" }}>• {s}</li>
                ))}
              </ul>
            </div>
            <div className="swot-card swot-card--threats" style={{ background: "var(--bg-dark-card)" }}>
              <h4 className="swot-card__title">Threats</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.875rem", lineHeight: 1.7 }}>
                {SWOT.threats.map((s) => (
                  <li key={s} style={{ marginBottom: "0.5rem" }}>• {s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

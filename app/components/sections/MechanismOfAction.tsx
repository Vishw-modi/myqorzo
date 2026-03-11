"use client";

import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Section from "@/app/components/ui/Section";
import ChartContainer from "@/app/components/ui/ChartContainer";

ChartJS.register(ArcElement, Tooltip, Legend);

const moaData = {
  labels: [
    "Actin-Myosin Cross-Bridges Inhibited",
    "Remaining Cross-Bridges",
  ],
  datasets: [
    {
      data: [40, 60],
      backgroundColor: ["rgba(201,165,78,0.85)", "rgba(201,165,78,0.15)"],
      borderColor: ["rgba(201,165,78,1)", "rgba(201,165,78,0.3)"],
      borderWidth: 2,
      cutout: "70%",
    },
  ],
};

const moaOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        font: { family: "DM Sans", size: 12 },
        color: "#D1D5DB",
        padding: 16,
      },
    },
    tooltip: {
      backgroundColor: "#0B1120",
      bodyFont: { family: "JetBrains Mono" },
      padding: 12,
      cornerRadius: 8,
      callbacks: {
        label: function (ctx: { label?: string; raw?: unknown }) {
          return ` ${ctx.label}: ${ctx.raw}%`;
        },
      },
    },
  },
  animation: {
    animateRotate: true,
    duration: 1500,
  },
};

const STEPS = [
  {
    num: "01",
    title: "Myosin Heads in Super-Relaxed State",
    desc: "In healthy cardiac tissue, a proportion of myosin heads exist in a 'super-relaxed' conformation where they are folded back and unavailable for contraction.",
    color: "#059669",
  },
  {
    num: "02",
    title: "Hyperactivation in oHCM",
    desc: "In obstructive HCM, genetic mutations shift myosin heads from the super-relaxed state into the active state, creating excessive cross-bridge formation and hypercontractility.",
    color: "#DC2626",
  },
  {
    num: "03",
    title: "Aficamten Binding",
    desc: "MYQORZO binds to cardiac myosin at the catalytic domain, stabilizing the super-relaxed state. This reduces the pool of myosin heads available for cross-bridge cycling.",
    color: "var(--accent-gold)",
  },
  {
    num: "04",
    title: "Gradient Reduction",
    desc: "With fewer active cross-bridges, ventricular contractile force normalizes. The LVOT gradient decreases, relieving obstruction and improving hemodynamic function.",
    color: "var(--accent-blue)",
  },
];

export default function MechanismOfAction() {
  return (
    <Section id="mechanism" variant="dark">
      <p className="section__label">How It Works</p>
      <h2 className="section__title">Mechanism of Action</h2>
      <hr className="section__divider" />

      <div className="asymmetric-layout" style={{ marginTop: "3rem" }}>
        {/* Left: Steps */}
        <div>
          {STEPS.map((step) => (
            <div
              key={step.num}
              style={{
                display: "flex",
                gap: "1.5rem",
                marginBottom: "2.5rem",
              }}
            >
              {/* Step number with colored accent */}
              <div
                style={{
                  position: "relative",
                  minWidth: "3.5rem",
                }}
              >
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "12px",
                    background: `${step.color}15`,
                    border: `1px solid ${step.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-data)",
                      fontSize: "1.125rem",
                      fontWeight: 800,
                      color: step.color,
                    }}
                  >
                    {step.num}
                  </span>
                </div>
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "var(--text-on-dark)",
                    marginBottom: "0.5rem",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.65,
                    color: "var(--text-on-dark-secondary)",
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Chart */}
        <div>
          <ChartContainer
            title="Cross-Bridge Inhibition (Therapeutic Range)"
            ariaLabel="Doughnut chart showing 40% actin-myosin cross-bridges inhibited by MYQORZO"
            source="Source: SEQUOIA-HCM Phase 3 data"
            height={300}
            className="card--dark"
          >
            <Doughnut data={moaData} options={moaOptions} />
          </ChartContainer>

          {/* Key insight card */}
          <div
            style={{
              marginTop: "1.5rem",
              padding: "1.25rem 1.5rem",
              background: "rgba(201,165,78,0.08)",
              border: "1px solid rgba(201,165,78,0.2)",
              borderRadius: "12px",
            }}
          >
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--accent-gold-light)",
                fontWeight: 600,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              💡 Unlike beta-blockers, aficamten acts directly at the sarcomere
              level — addressing the root molecular cause rather than
              downstream hemodynamic compensation.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

"use client";

import React from "react";
import Section from "@/app/components/ui/Section";

const TAKEAWAYS = [
  {
    num: "01",
    title: "A Precision Therapy for oHCM",
    desc: "MYQORZO is the first cardiac myosin inhibitor with a short half-life and minimal drug interaction profile, enabling flexible, patient-centered dosing.",
    accent: "var(--accent-gold)",
  },
  {
    num: "02",
    title: "Compelling Clinical Efficacy",
    desc: "SEQUOIA-HCM demonstrated a 56 mmHg mean reduction in LVOT gradient sustained through 48 weeks, with significant improvements in functional capacity and quality of life.",
    accent: "var(--accent-blue)",
  },
  {
    num: "03",
    title: "Manageable Safety Profile",
    desc: "Adverse events were predominantly mild to moderate, with reversible LVEF reduction as the key monitored endpoint. No treatment-related deaths occurred in pivotal trials.",
    accent: "#059669",
  },
  {
    num: "04",
    title: "Significant Commercial Potential",
    desc: "Projected peak revenue of $3.5 billion by 2030, driven by U.S. launch momentum, global expansion, and potential label extensions into non-obstructive HCM.",
    accent: "#8B5CF6",
  },
  {
    num: "05",
    title: "Competitive Differentiation",
    desc: "Pharmacokinetic advantages over mavacamten, including shorter half-life and lower CYP interaction risk, position MYQORZO favorably for broader clinical adoption.",
    accent: "#D97706",
  },
];

export default function KeyTakeaways() {
  return (
    <Section id="takeaways" variant="dark">
      <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3.5rem" }}>
        <p className="section__label">Summary</p>
        <h2 className="section__title">Key Takeaways</h2>
        <hr className="section__divider" style={{ margin: "2rem auto" }} />
        <p
          style={{
            fontSize: "var(--text-body-lg)",
            color: "var(--text-on-dark-secondary)",
          }}
        >
          MYQORZO represents a meaningful advance in the treatment of obstructive
          hypertrophic cardiomyopathy. Its precision mechanism, clinical evidence,
          and commercial trajectory position it as a transformative therapy in
          cardiovascular medicine.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gap: "1.25rem",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {TAKEAWAYS.map((t) => (
          <div
            key={t.num}
            style={{
              display: "flex",
              gap: "1.5rem",
              alignItems: "flex-start",
              background: "var(--bg-dark-card)",
              border: "1px solid var(--border-dark)",
              borderLeft: `4px solid ${t.accent}`,
              borderRadius: "12px",
              padding: "1.75rem 2rem",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(6px)";
              e.currentTarget.style.boxShadow = `0 4px 20px ${t.accent}20`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Number badge */}
            <div
              style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "12px",
                background: `${t.accent}15`,
                border: `1px solid ${t.accent}30`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-data)",
                  fontSize: "1.125rem",
                  fontWeight: 800,
                  color: t.accent,
                }}
              >
                {t.num}
              </span>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.0625rem",
                  fontWeight: 700,
                  color: "var(--text-on-dark)",
                  marginBottom: "0.5rem",
                }}
              >
                {t.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.65,
                  color: "var(--text-on-dark-secondary)",
                }}
              >
                {t.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

"use client";

import React from "react";
import Section from "@/app/components/ui/Section";

const MILESTONES = [
  { year: "2016", label: "IND Filing", color: "var(--accent-gold)", desc: "Investigational New Drug application submitted to FDA" },
  { year: "2017", label: "Phase 1", color: "var(--accent-gold)", desc: "First-in-human safety and PK study initiated" },
  { year: "2019", label: "REDWOOD-HCM", color: "var(--accent-gold)", desc: "Phase 2 dose-ranging trial demonstrates proof of concept" },
  { year: "2021", label: "SEQUOIA-HCM", color: "var(--accent-blue)", desc: "Pivotal Phase 3 randomized controlled trial begins" },
  { year: "2023", label: "NDA Submission", color: "var(--accent-blue)", desc: "New Drug Application submitted with full clinical package" },
  { year: "2025", label: "FDA Approval", color: "#059669", desc: "18th December approval for symptomatic obstructive HCM" },
  { year: "2026", label: "Commercial Launch", color: "#059669", desc: "U.S. market launch with full specialty distribution" },
];

export default function DevelopmentTimeline() {
  return (
    <Section id="timeline" variant="elevated">
      <p className="section__label">Development History</p>
      <h2 className="section__title">From Bench to Bedside</h2>
      <hr className="section__divider" />
      <p style={{ marginBottom: "3rem", maxWidth: "720px" }}>
        The development of MYQORZO represents a focused eight-year journey from
        investigational compound to approved therapy. Each milestone reflects
        rigorous clinical evaluation through progressively larger and more
        definitive trials.
      </p>

      {/* Timeline container */}
      <div
        style={{
          position: "relative",
          overflowX: "auto",
          paddingBottom: "2rem",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            minWidth: "900px",
            position: "relative",
            paddingTop: "3.5rem",
          }}
        >
          {/* Connecting line */}
          <div
            style={{
              position: "absolute",
              top: "3.5rem",
              left: "2rem",
              right: "2rem",
              height: "3px",
              background:
                "linear-gradient(to right, var(--accent-gold), var(--accent-blue), #059669)",
              borderRadius: "2px",
            }}
            aria-hidden="true"
          />

          {MILESTONES.map((m) => (
            <div
              key={m.year}
              style={{
                flex: 1,
                textAlign: "center",
                position: "relative",
              }}
            >
              {/* Dot with ring */}
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: m.color,
                  margin: "0 auto",
                  position: "relative",
                  zIndex: 2,
                  boxShadow: `0 0 0 5px var(--bg-elevated), 0 0 20px ${m.color}50`,
                  border: "3px solid var(--bg-elevated)",
                }}
              />

              {/* Content card */}
              <div
                style={{
                  marginTop: "1.25rem",
                  padding: "1rem 0.5rem",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-data)",
                    fontSize: "1.125rem",
                    fontWeight: 800,
                    color: m.color,
                    marginBottom: "0.375rem",
                  }}
                >
                  {m.year}
                </span>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    color: "var(--text-primary)",
                    fontWeight: 700,
                    marginBottom: "0.375rem",
                  }}
                >
                  {m.label}
                </span>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.4,
                    maxWidth: "140px",
                    margin: "0 auto",
                  }}
                >
                  {m.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline legend */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          marginTop: "1rem",
          flexWrap: "wrap",
        }}
      >
        {[
          { color: "var(--accent-gold)", label: "Early Development" },
          { color: "var(--accent-blue)", label: "Pivotal Studies" },
          { color: "#059669", label: "Regulatory & Commercial" },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: item.color,
                display: "block",
              }}
            />
            <span
              style={{
                fontSize: "0.8125rem",
                color: "var(--text-secondary)",
                fontWeight: 600,
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}

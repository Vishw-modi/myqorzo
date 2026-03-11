"use client";

import React from "react";
import Section from "@/app/components/ui/Section";
import KPICard from "@/app/components/ui/KPICard";

export default function Epidemiology() {
  return (
    <Section id="epidemiology" variant="light">
      <p className="section__label">Epidemiology</p>
      <h2 className="section__title">Patient Population</h2>
      <hr className="section__divider" />
      <p style={{ marginBottom: "3rem", maxWidth: "720px" }}>
        Hypertrophic cardiomyopathy is far more common than historically
        recognized. Advances in cardiac imaging and genetic screening have
        expanded the identifiable population, revealing a larger addressable
        patient base for targeted therapies.
      </p>

      <div className="grid-12">
        <div className="col-span-3">
          <KPICard value={1} prefix="~" suffix="M" label="Global HCM Prevalence" />
        </div>
        <div className="col-span-3">
          <KPICard value={750} suffix="K" label="U.S. Patients with HCM" />
        </div>
        <div className="col-span-3">
          <KPICard value={500} suffix="K" label="oHCM Subtype (67%)" />
        </div>
        <div className="col-span-3">
          <KPICard value={100} suffix="K" label="Diagnosed & Symptomatic" />
        </div>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <div className="asymmetric-layout">
          <div>
            <p style={{ marginBottom: "1.5rem" }}>
              The diagnosed and treated oHCM population in the United States is
              estimated at approximately 100,000 patients. However, this
              represents only a fraction of the total disease burden. Significant
              underdiagnosis persists across all demographics, with particularly
              wide gaps among women and minority populations.
            </p>
            <p>
              Improved awareness through specialty clinic networks, genetic
              cascade screening of first-degree relatives, and the availability
              of targeted therapy are expected to accelerate diagnosis rates over
              the next decade. The addressable market for cardiac myosin
              inhibitors will expand as identification improves.
            </p>
          </div>
          <div>
            <div className="card card--gold-border" style={{ padding: "2rem" }}>
              <h4
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--accent-gold)",
                  marginBottom: "1.25rem",
                }}
              >
                Prevalence Funnel
              </h4>
              {[
                { label: "Total HCM (Global)", val: "~1,000,000", width: "100%" },
                { label: "U.S. HCM Population", val: "~750,000", width: "75%" },
                { label: "Obstructive Phenotype", val: "~500,000", width: "50%" },
                { label: "Diagnosed & Symptomatic", val: "~100,000", width: "20%" },
                { label: "Currently Treated", val: "~30,000", width: "8%" },
              ].map((row) => (
                <div key={row.label} style={{ marginBottom: "1rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "0.8125rem",
                      marginBottom: "0.25rem",
                    }}
                  >
                    <span style={{ color: "var(--text-secondary)" }}>{row.label}</span>
                    <span
                      style={{
                        fontFamily: "var(--font-data)",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                      }}
                    >
                      {row.val}
                    </span>
                  </div>
                  <div
                    style={{
                      height: 6,
                      borderRadius: 3,
                      background: "var(--bg-elevated)",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: row.width,
                        background:
                          "linear-gradient(to right, var(--accent-gold), var(--accent-gold-light))",
                        borderRadius: 3,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

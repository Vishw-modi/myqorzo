"use client";

import React from "react";
import Section from "@/app/components/ui/Section";

export default function IntroducingMyqorzo() {
  return (
    <Section id="introducing-myqorzo" variant="light">
      <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p className="section__label">The Solution</p>
        <h2 className="section__title">Introducing MYQORZO</h2>
        <hr className="section__divider" style={{ margin: "2rem auto" }} />
        <p style={{ fontSize: "var(--text-body-lg)", marginBottom: "2rem", color: "var(--text-secondary)", margin: "0 auto 2rem" }}>
          MYQORZO (aficamten) is a next-generation, selective cardiac myosin
          inhibitor developed by Bristol-Myers Squibb. Approved by the FDA in
          December 2024, it is indicated for the treatment of symptomatic
          obstructive hypertrophic cardiomyopathy in adults with NYHA class
          II-III symptoms.
        </p>
        <p style={{ marginBottom: "2rem" }}>
          Unlike conventional therapies that modulate heart rate or rhythm,
          aficamten acts directly on the cardiac sarcomere. It reduces the
          number of actin-myosin cross-bridges formed during each contraction,
          decreasing the hypercontractile force that generates LVOT obstruction.
          This precision mechanism allows for gradient reduction without the
          systemic side effects of nonselective negative inotropes.
        </p>
      </div>

      <div
        className="grid-12"
        style={{ marginTop: "3rem" }}
      >
        {[
          { title: "Oral Administration", desc: "Once-daily tablet with flexible dose titration from 5mg to 20mg based on LVEF monitoring." },
          { title: "Rapid Onset", desc: "Significant LVOT gradient reduction observed within 2 weeks of treatment initiation." },
          { title: "Reversible Action", desc: "Cardiac function normalizes within 2–3 weeks of discontinuation, providing a safety buffer." },
          { title: "Durable Response", desc: "Sustained efficacy demonstrated across 48-week pivotal trials with consistent gradient suppression." },
        ].map((item, i) => (
          <div key={i} className="col-span-3">
            <div className="card" style={{ height: "100%" }}>
              <h4
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  fontWeight: 700,
                  color: "var(--accent-gold)",
                  marginBottom: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {item.title}
              </h4>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

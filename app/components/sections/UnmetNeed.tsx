"use client";

import React from "react";
import Section from "@/app/components/ui/Section";
import KPICard from "@/app/components/ui/KPICard";

export default function UnmetNeed() {
  return (
    <Section id="unmet-need" variant="dark">
      <p className="section__label">The Gap</p>
      <h2 className="section__title">Unmet Need in oHCM</h2>
      <hr className="section__divider" />

      <div className="asymmetric-layout--reverse" style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "5fr 7fr", gap: "var(--grid-gap)" }}>
        <div>
          <div style={{ display: "grid", gap: "1.5rem" }}>
            <KPICard
              value={70}
              suffix="%"
              label="Remain symptomatic on current therapy"
              className="card--dark"
            />
            <KPICard
              value={50}
              suffix="%"
              label="Experience activity limitation"
              className="card--dark"
            />
            <KPICard
              value={30}
              suffix="%"
              label="Progress to NYHA Class III/IV"
              className="card--dark"
            />
          </div>
        </div>
        <div>
          <p style={{ marginBottom: "1.5rem" }}>
            Conventional pharmacological management of obstructive HCM has
            remained largely unchanged for decades. Beta-blockers and
            nondihydropyridine calcium channel blockers reduce heart rate and
            contractility, but they do not address the fundamental
            hypercontractile state caused by excessive actin-myosin cross-bridge
            formation.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Disopyramide, the only drug with a specific indication for LVOT
            gradient reduction, carries significant anticholinergic side effects
            and is poorly tolerated by many patients. Its use remains limited and
            often abandoned.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            For patients who fail medical management, septal reduction therapy
            through surgical myectomy or alcohol septal ablation offers gradient
            relief. These invasive procedures require specialized centers and
            carry inherent procedural risks including heart block, ventricular
            septal defect, and mortality.
          </p>
          <p>
            The clinical community has long recognized the need for a targeted,
            well-tolerated oral therapy that addresses the root cause of
            obstruction rather than its downstream consequences. MYQORZO
            represents the answer to this unmet need.
          </p>
        </div>
      </div>
    </Section>
  );
}

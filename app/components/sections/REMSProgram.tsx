"use client";

import React from "react";
import Section from "@/app/components/ui/Section";

const REMS_ITEMS = [
  {
    title: "Prescriber Certification",
    desc: "Healthcare providers must complete certification acknowledging the risk of heart failure associated with reduced LVEF and the requirement for regular echocardiographic monitoring.",
    icon: "🩺",
  },
  {
    title: "Pharmacy Certification",
    desc: "Pharmacies dispensing MYQORZO must be enrolled in the REMS program and verify prescriber certification before dispensing each prescription.",
    icon: "💊",
  },
  {
    title: "LVEF Monitoring Schedule",
    desc: "Echocardiographic assessment of left ventricular ejection fraction is required at baseline, at weeks 4, 8, and 12 during titration, and every 12 weeks thereafter during maintenance therapy.",
    icon: "📊",
  },
  {
    title: "Dose Modification Protocol",
    desc: "If LVEF falls below 50%, the dose must be reduced. If LVEF is below 40%, treatment must be temporarily suspended until recovery is confirmed on repeat imaging.",
    icon: "⚙️",
  },
];

export default function REMSProgram() {
  return (
    <Section id="rems" variant="elevated">
      <p className="section__label">Risk Management</p>
      <h2 className="section__title">REMS Program</h2>
      <hr className="section__divider" />
      <p style={{ marginBottom: "3rem", maxWidth: "720px" }}>
        The MYQORZO Risk Evaluation and Mitigation Strategy ensures that the
        benefits of treatment outweigh the potential risk of reduced cardiac
        function. The program centers on systematic LVEF monitoring and
        structured dose management protocols.
      </p>

      <div className="grid-12">
        {REMS_ITEMS.map((item, i) => (
          <div key={i} className="col-span-6">
            <div
              className="card card--gold-border"
              style={{ height: "100%", display: "flex", gap: "1.25rem" }}
            >
              <span style={{ fontSize: "2rem", lineHeight: 1 }}>{item.icon}</span>
              <div>
                <h4
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.title}
                </h4>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

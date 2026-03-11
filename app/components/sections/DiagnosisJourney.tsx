"use client";

import React from "react";
import Section from "@/app/components/ui/Section";

const STEPS = [
  {
    year: "Year 0",
    title: "Symptom Onset",
    desc: "Patients first notice exertional dyspnea, palpitations, or exercise intolerance. Symptoms are often attributed to anxiety, deconditioning, or asthma.",
    icon: "🫀",
  },
  {
    year: "Year 2–5",
    title: "Initial Misdiagnosis",
    desc: "Primary care workups frequently yield non-specific findings. Echocardiography is not routinely ordered. Many patients receive incorrect diagnoses including mitral valve disease or hypertensive heart disease.",
    icon: "🔍",
  },
  {
    year: "Year 5–10",
    title: "Progressive Decline",
    desc: "Functional capacity deteriorates. Patients reduce physical activity. Syncope or near-syncope episodes may prompt emergency visits. Family screening is rarely initiated.",
    icon: "📉",
  },
  {
    year: "Year 10–15",
    title: "Specialist Referral",
    desc: "Referral to a cardiologist identifies left ventricular hypertrophy on imaging. Genetic testing and family history evaluation confirm the diagnosis of HCM.",
    icon: "🏥",
  },
  {
    year: "Year 15+",
    title: "Confirmed Diagnosis",
    desc: "Provocative testing reveals the obstructive phenotype. By this stage, significant myocardial remodeling has occurred. Treatment options become more limited.",
    icon: "✅",
  },
];

export default function DiagnosisJourney() {
  return (
    <Section id="diagnosis" variant="elevated">
      <p className="section__label">The Patient Journey</p>
      <h2 className="section__title">A Diagnosis Delayed</h2>
      <hr className="section__divider" />
      <p style={{ marginBottom: "3rem", maxWidth: "720px" }}>
        The average patient with hypertrophic cardiomyopathy waits over a decade
        between initial symptoms and a confirmed diagnosis. This delay compounds
        disease progression, erodes quality of life, and narrows the window for
        effective intervention.
      </p>

      {/* Timeline container */}
      <div className="timeline">
        {STEPS.map((step) => (
          <div
            key={step.year}
            className="timeline__item"
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
              }}
            >
              <span
                style={{
                  fontSize: "1.5rem",
                  lineHeight: 1,
                  flexShrink: 0,
                  marginTop: "0.125rem",
                }}
                aria-hidden="true"
              >
                {step.icon}
              </span>
              <div>
                <span className="timeline__year">{step.year}</span>
                <h3 className="timeline__title">{step.title}</h3>
                <p className="timeline__desc">{step.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call-out stat */}
      <div
        style={{
          marginTop: "3rem",
          padding: "2rem",
          background: "var(--bg-primary)",
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          maxWidth: "600px",
          border: "1px solid var(--border-dark)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-data)",
            fontSize: "3rem",
            fontWeight: 800,
            color: "var(--accent-gold)",
            lineHeight: 1,
            flexShrink: 0,
          }}
        >
          7+
        </span>
        <div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              fontWeight: 700,
              color: "var(--text-on-dark)",
              marginBottom: "0.25rem",
            }}
          >
            Years Average Diagnostic Delay
          </p>
          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--text-on-dark-secondary)",
              lineHeight: 1.5,
            }}
          >
            HCM patients visit an average of 3.7 physicians before receiving a
            correct diagnosis.
          </p>
        </div>
      </div>
    </Section>
  );
}

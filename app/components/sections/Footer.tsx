"use client";

import React from "react";

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        background: "var(--bg-primary)",
        color: "var(--text-on-dark-secondary)",
        padding: "4rem 0 2rem",
        fontSize: "0.8125rem",
        lineHeight: 1.7,
      }}
    >
      <div className="container-main">
        <div className="grid-12" style={{ marginBottom: "3rem" }}>
          <div className="col-span-4">
            <h4
              style={{
                fontFamily: "var(--font-headline)",
                fontSize: "1.5rem",
                color: "var(--text-on-dark)",
                marginBottom: "1rem",
                fontWeight: 700,
              }}
            >
              MYQORZO<sup style={{ fontSize: "0.5em" }}>®</sup>
            </h4>
            <p style={{ marginBottom: "1rem" }}>
              (aficamten) tablets, for oral use
            </p>
            <p style={{ color: "var(--text-muted)" }}>
              A next-generation cardiac myosin inhibitor for the treatment of
              symptomatic obstructive hypertrophic cardiomyopathy.
            </p>
          </div>
          <div className="col-span-4">
            <h4
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8125rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--accent-gold)",
                marginBottom: "1rem",
                fontWeight: 700,
              }}
            >
              References
            </h4>
            <ol
              style={{
                paddingLeft: "1.25rem",
                margin: 0,
                color: "var(--text-muted)",
                fontSize: "0.75rem",
                lineHeight: 1.8,
              }}
            >
              <li>Maron BJ, et al. Circulation. 2022;145(6):e906–e937.</li>
              <li>SEQUOIA-HCM Trial. NCT05186818. ClinicalTrials.gov.</li>
              <li>BMS MYQORZO Prescribing Information. December 2024.</li>
              <li>Ommen SR, et al. J Am Coll Cardiol. 2024;83(22):2214.</li>
              <li>Industry analyst estimates. 2024–2030 market projections.</li>
            </ol>
          </div>
          <div className="col-span-4">
            <h4
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8125rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--accent-gold)",
                marginBottom: "1rem",
                fontWeight: 700,
              }}
            >
              Important Safety Information
            </h4>
            <p style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>
              MYQORZO can cause heart failure due to systolic dysfunction.
              Prescribers must be certified in the MYQORZO REMS. Assess LVEF by
              echocardiography before and during treatment. This website is for
              educational purposes only and does not constitute medical advice.
            </p>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--border-dark)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>
            © {new Date().getFullYear()} Bristol-Myers Squibb Company. All rights
            reserved. MYQORZO is a registered trademark.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>
            For U.S. Healthcare Professionals Only
          </p>
        </div>
      </div>
    </footer>
  );
}

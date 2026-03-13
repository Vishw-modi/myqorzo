"use client";

import React, { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hero", label: "Introduction" },
  { id: "disease", label: "Disease" },
  { id: "diagnosis", label: "Diagnosis" },
  { id: "unmet-need", label: "Unmet Need" },
  { id: "introducing-myqorzo", label: "MYQORZO" },
  { id: "mechanism", label: "Mechanism" },
  { id: "timeline", label: "Timeline" },
  { id: "clinical-trials", label: "Clinical Trials" },
  { id: "safety", label: "Safety" },
  { id: "rems", label: "REMS" },
  { id: "epidemiology", label: "Epidemiology" },
  { id: "market", label: "Market" },
  { id: "competitors", label: "Competitors" },
  { id: "commercial", label: "Commercial" },
  { id: "swot", label: "SWOT" },
  { id: "takeaways", label: "Takeaways" },
];

export default function ScrollProgress() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="scroll-nav" aria-label="Page sections">
      {SECTIONS.map((s) => (
        <div key={s.id} className="scroll-nav__item">
          <span className="scroll-nav__label">{s.label}</span>
          <button
            className={`scroll-nav__dot ${
              activeSection === s.id ? "scroll-nav__dot--active" : ""
            }`}
            onClick={() => scrollTo(s.id)}
            aria-label={`Navigate to ${s.label}`}
            aria-current={activeSection === s.id ? "true" : undefined}
          />
        </div>
      ))}
    </nav>
  );
}

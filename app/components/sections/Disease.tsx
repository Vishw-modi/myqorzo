"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Section from "@/app/components/ui/Section";
import KPICard from "@/app/components/ui/KPICard";
import ChartContainer from "@/app/components/ui/ChartContainer";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const prevalenceData = {
  labels: ["United States", "Europe", "Japan", "Rest of World"],
  datasets: [
    {
      label: "Estimated HCM Prevalence (per 100,000)",
      data: [200, 170, 160, 140],
      backgroundColor: [
        "rgba(201, 165, 78, 0.85)",
        "rgba(201, 165, 78, 0.65)",
        "rgba(201, 165, 78, 0.45)",
        "rgba(201, 165, 78, 0.3)",
      ],
      borderColor: "rgba(201, 165, 78, 1)",
      borderWidth: 1,
      borderRadius: 6,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: "#0B1120",
      titleFont: { family: "var(--font-dm-sans)" },
      bodyFont: { family: "var(--font-jetbrains)" },
      padding: 12,
      cornerRadius: 8,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: { color: "rgba(0,0,0,0.05)" },
      ticks: {
        font: { family: "JetBrains Mono", size: 11 },
        color: "#9CA3AF",
      },
    },
    x: {
      grid: { display: false },
      ticks: {
        font: { family: "DM Sans", size: 12, weight: 600 as const },
        color: "#4B5563",
      },
    },
  },
  animation: {
    duration: 1500,
    easing: "easeOutQuart" as const,
  },
};

export default function Disease() {
  return (
    <Section id="disease" variant="light">
      <p className="section__label">The Disease</p>
      <h2 className="section__title">Obstructive Hypertrophic Cardiomyopathy</h2>
      <hr className="section__divider" />

      <div className="asymmetric-layout" style={{ marginTop: "3rem" }}>
        <div>
          <p style={{ marginBottom: "1.5rem" }}>
            Hypertrophic cardiomyopathy is the most prevalent inherited cardiac
            disorder, affecting roughly 1 in 500 individuals worldwide. The
            disease thickens the heart's ventricular walls, often the
            interventricular septum, creating a structural obstruction that
            impedes blood flow through the left ventricular outflow tract.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Among those diagnosed, approximately two-thirds develop the
            obstructive phenotype. These patients experience progressive exertional
            dyspnea, chest pain, syncope, and a diminished capacity for daily
            activities. The hemodynamic consequence is a pressure gradient across
            the LVOT that worsens with physical effort, forcing the heart into a
            cycle of compensatory hypertrophy.
          </p>
          <p>
            Current first-line therapies, primarily beta-blockers and calcium
            channel blockers, address symptoms without targeting the underlying
            pathology. Septal reduction therapies carry procedural risk and are
            reserved for refractory cases. The therapeutic landscape has long
            demanded a precision approach.
          </p>
        </div>
        <div>
          <ChartContainer
            title="HCM Prevalence by Region (per 100,000)"
            source="Source: Maron et al., Circulation 2022; internal estimates"
            ariaLabel="Bar chart showing HCM prevalence across four global regions"
            height={280}
          >
            <Bar data={prevalenceData} options={chartOptions} />
          </ChartContainer>
        </div>
      </div>

      <div
        className="grid-12"
        style={{ marginTop: "3rem" }}
      >
        <div className="col-span-3">
          <KPICard value={1} prefix="1:" suffix="" label="Prevalence (in 500)" />
        </div>
        <div className="col-span-3">
          <KPICard value={67} suffix="%" label="Obstructive Phenotype" />
        </div>
        <div className="col-span-3">
          <KPICard value={750} suffix="K+" label="Affected in the U.S." />
        </div>
        <div className="col-span-3">
          <KPICard value={15} suffix=" yrs" label="Avg. Diagnosis Delay" />
        </div>
      </div>
    </Section>
  );
}

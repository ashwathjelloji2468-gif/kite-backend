import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register ChartJS core modules
ChartJS.register(ArcElement, Tooltip, Legend);

// 🎯 ZERODHA DESIGN SYSTEM DESIGN CONFIGURATIONS
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: "75%",
  plugins: {
    legend: {
      position: "right",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        padding: 20,
        color: "#444444",
        font: {
          size: 13,
          family: '"Inter", "Segoe UI", sans-serif',
        },
      },
    },
    tooltip: {
      backgroundColor: "#1f1f1f",
      titleFont: { size: 13, family: "sans-serif", weight: "600" },
      bodyFont: { size: 12, family: "sans-serif" },
      padding: 10,
      cornerRadius: 4,
      displayColors: true,
    },
  },
};

export function DoughnutChart({ data }) {
  const styledData = {
    ...data,
    datasets:
      data?.datasets?.map((dataset) => ({
        ...dataset,
        borderWidth: 2,
        borderColor: "#ffffff",
        hoverOffset: 4,
      })) || [],
  };

  return (
    <div style={{ width: "100%", height: "260px", padding: "10px" }}>
      <Doughnut options={options} data={styledData} />
    </div>
  );
}

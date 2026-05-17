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

// Register ChartJS core modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

// 🎯 ZERODHA DESIGN SYSTEM STYLING CONFIGURATIONS
export const options = {
  responsive: true,
  maintainAspectRatio: false, // Allows you to control the container height easily
  plugins: {
    legend: {
      display: false, // Zerodha generally hides the legend for single-dataset holdings graphs
    },
    title: {
      display: true,
      text: "Holdings Breakdown",
      align: "start", // Left-aligned header titles
      color: "#444444",
      font: {
        size: 16,
        weight: "500",
        family: '"Inter", "Segoe UI", sans-serif',
      },
      padding: {
        bottom: 20,
      },
    },
    tooltip: {
      backgroundColor: "#1f1f1f", // Dark flat sleek tooltips
      titleFont: { size: 13, family: "sans-serif", weight: "600" },
      bodyFont: { size: 12, family: "sans-serif" },
      padding: 10,
      cornerRadius: 4,
      displayColors: false, 
    },
  },
  scales: {
    x: {
      grid: {
        display: false, 
      },
      ticks: {
        color: "#999999", 
        font: {
          size: 11,
          family: "sans-serif",
        },
      },
      border: {
        display: false, 
      },
    },
    y: {
      grid: {
        color: "#f3f3f3", 
        drawTicks: false,
      },
      ticks: {
        color: "#999999",
        font: {
          size: 11,
          family: "sans-serif",
        },
      },
      border: {
        display: false, 
      },
    },
  },
};

export function VerticalGraph({ data }) {
  
  const styledData = {
    ...data,
    datasets:
      data?.datasets?.map((dataset) => ({
        ...dataset,
        label: "Current Value",
        backgroundColor: "#4185f4", 
        hoverBackgroundColor: "#3570d4", 
        borderRadius: 4, 
        borderSkipped: false,
        barThickness: 25, 
      })) || [],
  };

  return (
    <div style={{ width: "100%", height: "320px", padding: "10px" }}>
      <Bar options={options} data={styledData} />
    </div>
  );
}

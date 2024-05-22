import { useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
} from "chart.js";
import { Wrapper } from "./styles";

// Register necessary components
Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Title);

interface iProps {
  data: iFinalObj[] | null;
}

interface iFinalObj {
  year: number;
  lowerVariable: number;
  higherVariable: number;
}

export default function Graph({ data }: iProps) {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    // Cleanup chart instance on component unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  if (data) {
    const chartData = {
      labels: data.map((item) => item.year),
      datasets: [
        {
          label: "High",
          data: data.map((item) => item.higherVariable),
          backgroundColor: "#35C769",
          hoverBackgroundColor: "#35C769",
          barPercentage: 0.5, // Adjust bar percentage for spacing
          categoryPercentage: 0.5, // Adjust category percentage for spacing
          order: 1, // Draw this dataset first
        },
        {
          label: "Low",
          data: data.map((item) => item.lowerVariable),
          backgroundColor: "#6D3FCA",
          hoverBackgroundColor: "#6D3FCA",
          barPercentage: 0.5, // Adjust bar percentage for spacing
          categoryPercentage: 0.5, // Adjust category percentage for spacing
          order: 0, // Draw this dataset second, so it appears in front
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context: any) {
              let label = context.dataset.label || "";
              if (label) {
                label += ": £";
              }
              if (context.parsed.y !== null) {
                label += new Intl.NumberFormat().format(
                  Number(context.parsed.y)
                );
              }
              return label;
            },
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Year",
          },
          stacked: true, // Stack bars on the x-axis to overlap
        },
        y: {
          title: {
            display: true,
            text: "Value (£)",
          },
          stacked: false, // Ensure bars start from zero
          ticks: {
            beginAtZero: true,
            callback: function (value: any) {
              return "£" + value;
            },
          },
        },
      },
    };

    return (
      <Wrapper>
        <div style={{ position: "relative", height: "100%", width: "100%" }}>
          <Bar ref={chartRef} data={chartData} options={options} />
        </div>
      </Wrapper>
    );
  } else {
    return <p>No data...</p>;
  }
}

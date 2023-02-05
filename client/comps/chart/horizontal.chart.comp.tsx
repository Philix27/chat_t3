import React from "react";
import {
  Chart as ChartJS,
  ChartData,
  registerables,
  scales,
} from "chart.js/auto";
import { Bar, Chart } from "react-chartjs-2";
import { bgColors } from "../../constants/chart_color";
import styles from "./chart.module.scss";

interface ChartProperties {
  title: string;
}

export default function HorizontalChartComp(props: ChartProperties) {
  ChartJS.register(...registerables);
  // Chart.defaults.scale.gridLines.drawOnChartArea = false;

  const label = ["APC", "PDP", "LP", "NNPP", "Others"];
  const numericValues = [700, 250, 445, 667, 900];

  const chartData: ChartData<"bar", number[], string> = {
    labels: label,
    datasets: [
      {
        indexAxis: "y",
        label: "Title - change",
        data: numericValues,
        backgroundColor: bgColors,
        minBarLength: 1,
        xAxisID: "States",
        yAxisID: "Agent count",
      },
    ],
  };

  const options: any = {
    responsive: true,
    plugins: {
      responsive: true,

      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: props.title,
      },

      scales: {
        y: {
          beginAtZero: true,
        },
        x: {
          grid: {
            display: false,
          },
        },
        yAxes: [
          {
            gridLines: {
              lineWidth: 0,
            },
          },
        ],
      },
    },
  };
  return (
    <div className={styles.container}>
      <Bar data={chartData} options={options} />
    </div>
  );
}

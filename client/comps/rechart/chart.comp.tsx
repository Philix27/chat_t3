import React from "react";
import { Chart as ChartJS, ChartData, registerables } from "chart.js/auto";
import { Bar, Chart } from "react-chartjs-2";
import { bgColors } from "../../constants/chart_color";
import styles from "./chart.module.scss";

interface ChartProperties {
  title: string;
}

export default function ChartComp(props: ChartProperties) {
  ChartJS.register(...registerables);
  const label = ["APC", "PDP", "LP", "NNPP", "Others"];
  const numericValues = [700, 250, 445, 667, 900];

  const chartData: ChartData<"bar", number[], string> = {
    labels: label,
    datasets: [
      {
        indexAxis: "y",
        // axis: "y",
        label: "Title - change",
        data: numericValues,
        backgroundColor: bgColors,
        minBarLength: 1,
        xAxisID: "States",
        yAxisID: "Agent count",
        // scaleShowValues: true,

        // scales: {
        //   x: {
        //     ticks: {
        //       autoSkip: false,
        //       maxRotation: 90,
        //       minRotation: 90,
        //     },
        //   },
        // },
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
      },
    },
  };
  return (
    <div className={styles.container}>
      <Bar data={chartData} options={options} />
    </div>
  );
}

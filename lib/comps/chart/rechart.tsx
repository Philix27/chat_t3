import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { bgColors } from "../../constants/chart_color";
import styles from "./chart.module.scss";

interface ChartProperties {
  title: string;
  data: any[];
}
// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, ...];
export default function RechartComp(props: ChartProperties) {
  return (
    <div className={styles.container}>
      <BarChart width={730} height={250} data={props.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}

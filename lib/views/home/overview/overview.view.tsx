import React, { useState } from "react";
import StatusBar from "../../../comps/statusBar/statusBar.comp";
import styles from "./overview.module.scss";
import ChartComp from "../../../comps/chart/chart.comp";
import HorizontalChartComp from "../../../comps/chart/horizontal.chart.comp";

export default function OverviewView() {
  const labels = ["APC", "PDP", "LP", "NNPP", "Others"];
  const numericValues = [700, 250, 445, 667, 500];
  return (
    <div className={styles.statePage}>
      {/* <StatusBar /> */}

      <HorizontalChartComp title="Votes accross all parties" />

      <ChartComp
        title="Agents in the various LGAs"
        labels={labels}
        numericValues={numericValues}
      />
    </div>
  );
}

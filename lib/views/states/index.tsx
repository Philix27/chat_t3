import Link from "next/link";
import React from "react";
import ChartComp from "../../comps/chart/chart.comp";
import HorizontalChartComp from "../../comps/chart/horizontal.chart.comp";
import StatusBar from "../../comps/statusBar/statusBar.comp";
import styles from "../states/states.module.scss";
import dummyStates from "./data";

export default function HomeView() {
  const labels = ["Abia", "Adamawa", "Borno", "Jigawa", "Zamfara"];
  const numericValues = [700, 250, 445, 667, 900];
  return (
    <div className={styles.statePage}>
      <StatusBar
        leftContent={
          <div className={styles.title}>
            <h4>Selectted State</h4>
          </div>
        }
      />
      <ChartComp
        title="All States"
        labels={labels}
        numericValues={numericValues}
      />
      {/* // TODO: USE IMAGE ICON */}
      <div className={styles.contents}>
        {dummyStates.map((state, index) => (
          <Link href={`states/${state.name}`} key={index}>
            <div className={styles.card}>
              <h4>{state.name}</h4>
              <p>APC: {state.apc}</p>
              <p>PDP: {state.pdp}</p>
              <p>NNPP: {state.nnpp}</p>
              <p>LP{state.labourParty}</p>
              <p>others - 600</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

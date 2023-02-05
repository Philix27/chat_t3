import React, { useState } from "react";
import ChartComp from "../../comps/chart/chart.comp";
import HorizontalChartComp from "../../comps/chart/horizontal.chart.comp";
import StatusBar from "../../comps/statusBar/statusBar.comp";
import styles from "./states.module.scss";
import dummyLgas from "./data";
import { FaFingerprint } from "react-icons/fa";
import { useRouter } from "next/dist/client/router";
import NavBar from "../../comps/navbar/navbar.comp";

export default function OneState() {
  const router = useRouter();
  const _path = router.pathname;
  const [user, setUser] = useState(null);

  const labels = ["LGA 1", "LGA 2", "LGA 3", "LGA 4", "LGA 5"];
  const numericValues = [700, 250, 445, 667, 900];
  return (
    <div className={styles.statePage}>
      <NavBar title={"Willi"} subtitle={""} rightText={""} subRightText={""} />
      <StatusBar
        leftContent={
          <div className={styles.title}>
            <h4>Selectted State</h4>
          </div>
        }
      />
      <div className={styles.voteInfo}>
        <div className={styles.card}>
          <div>
            <h4>14,890</h4>
            <h6>Total Voters</h6>
          </div>
          <div>
            <FaFingerprint size={30} />
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <h4>14,890</h4>
            <h6>Valid Voters</h6>
          </div>
          <div>
            <FaFingerprint size={30} />
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <h4>14,890</h4>
            <h6>Accredited Votes</h6>
          </div>
          <div className={styles.fingerprint}>
            <FaFingerprint size={30} />
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <h4 className={styles.validFontColor}>14,890</h4>
            <h6>Valid Votes</h6>
          </div>
          <div className={styles.fingerprint_valid}>
            <FaFingerprint size={30} />
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <h4 className={styles.rejFontColor}>14,890</h4>
            <h6>Rejected Votes</h6>
          </div>
          <div className={styles.fingerprint_rej}>
            <FaFingerprint size={30} />
          </div>
        </div>
      </div>

      <ChartComp
        title="All States"
        labels={labels}
        numericValues={numericValues}
      />

      <div className={styles.contents}>
        <div className={styles.tableSection}>
          <table>
            <thead>
              <tr>
                <th>All </th>
                <th>PDP</th>
                <th>APC</th>
                <th>LP</th>
                <th>NNPC</th>
                <th>Others</th>
              </tr>
            </thead>
            <tbody>
              {dummyLgas.map((lga, index) => (
                <tr key={index}>
                  <td>{lga.name}</td>
                  <td>{lga.apc}</td>
                  <td>{lga.pdp}</td>
                  <td>{lga.labourParty}</td>
                  <td>{lga.nnpp}</td>
                  <td>100</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

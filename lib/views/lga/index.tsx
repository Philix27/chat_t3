import React from "react";
import StatusBar from "../../comps/statusBar/statusBar.comp";
import styles from "./states.module.scss";
import dummyStates from "./data";

// ./state2.module.scss
export default function HomeView() {
  return (
    <div className={styles.statePage}>
      {/* <StatusBar
        title={"Name of LGAs"}
        subtitle={""}
        rightText={""}
        subRightText={""}
      /> */}
      <div className={styles.contents}>
        <div className={styles.tableSection}>
          <table>
            <thead>
              <tr>
                <th>Wards</th>
                <th>APC</th>
                <th>PDP</th>
                <th>Labour Party</th>
                <th>NNPC</th>
                <th>Others</th>
              </tr>
            </thead>
            <tbody>
              {dummyStates.map((state, index) => (
                <tr key={index}>
                  <td>{state.name}</td>
                  <td>{state.apc}</td>
                  <td>{state.pdp}</td>
                  <td>{state.labourParty}</td>
                  <td>{state.nnpp}</td>
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

import React from "react";
import AnalyticsDataType from "./analytics.type";
import dummyData from "./data";
import styles from "./table.module.scss";

interface Props {
  data: AnalyticsDataType[];
}

export const TableComp: React.FC<Props> = (props) => {
  const { data } = props;
  return (
    <div className={styles.contents}>
      <div className={styles.tableSection}>
        <table>
          <thead>
            <tr>
              <th>State </th>
              <th>PDP</th>
              <th>APC</th>
              <th>LP</th>
              <th>Others</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((state, index) => (
              <tr key={index}>
                <td>{state.name}</td>
                <td>{state.apc}</td>
                <td>{state.pdp}</td>
                <td>{state.lp}</td>
                <td>{state.others}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComp;

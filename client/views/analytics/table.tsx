import Image from "next/image";
import React from "react";
import AnalyticsDataType from "./analytics.type";
import dummyData from "./data";
import partyData from "./partyData";
import styles from "./table.module.scss";

interface Props {
  data: AnalyticsDataType[];
}

export const TableComp: React.FC<Props> = (props) => {
  const { data } = props;

  const sortedParty = Array.from(partyData).sort((a, b) => {
    return a.name.localeCompare(b.name, "en", { sensitivity: "base" });
  });
  return (
    <div className={styles.contents}>
      <div className={styles.tableSection}>
        <table>
          <thead>
            <tr>
              <th></th>
              {sortedParty.map((_party, index) => (
                <th key={index}>
                  <div className={styles.heads}>
                    <h4>{_party.name}</h4>
                    <img alt="partylogo" src={_party.logoUrl} />
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {/* <th>States</th> */}
            {/* {sortedParty.map((_party, index) => (
              <th key={index}>
                <img
                  alt="partylogo"
                  src={_party.logoUrl}
                  height={20}
                  width={20}
                />
              </th>
            ))} */}

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

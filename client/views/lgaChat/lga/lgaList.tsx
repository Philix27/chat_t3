import React from "react";
import styles from "./accounts.module.scss";

interface Props {
  lga: {
    wards: string[];
    name: string;
  }[];
}
export default function LgaList(props: Props): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h5>LGAs</h5>
      </div>
      <ul>
        {props.lga.map((lga, index) => {
          return (
            <li key={index}>
              <a>{lga.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

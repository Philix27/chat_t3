import React from "react";
import styles from "./agentlist.module.scss";

interface Props {
  lga: {
    wards: string[];
    name: string;
  }[];
}
export default function LgaAgentList(props: Props): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h4>Agents in space</h4>
      </div>
      <ul>
        <li>
          <a>Tony Pounds</a>
        </li>
        <li>
          <a>Tony Pounds</a>
        </li>
        <li>
          <a>Tony Pounds</a>
        </li>
        <li>
          <a>Tony Pounds</a>
        </li>
        <li>
          <a>Tony Pounds</a>
        </li>
      </ul>
    </div>
  );
}

import React from "react";
import styles from "./LeftBarComp.module.scss";

interface Props {
  titles: string[];
}

export default function LeftBarComp(props: Props): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h5>States</h5>
      </div>
      <ul>
        {props.titles.map((item, index) => {
          return (
            <li key={index}>
              <a>{item}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// content: {
//     title: string;
//     subtitle?: string;
//   }[];

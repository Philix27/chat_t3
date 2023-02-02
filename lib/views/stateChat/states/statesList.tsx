import React from "react";
import styles from "./accounts.module.scss";

const listOfStates = [
  "ABIA",
  "ADAMAWA",
  "EDO",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
];

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
        <h5>States</h5>
      </div>
      <ul>
        {listOfStates.map((state, index) => {
          return (
            <li key={index}>
              <a>{state}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

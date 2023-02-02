import React from "react";
import styles from "./accounts.module.scss";

interface Props {}
export default function Accounts() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h4>Name of state</h4>
      </div>
      <ul>
        <li>
          <a>LGA 1</a>
        </li>
        <li>
          <a>LGA 2</a>
        </li>
        <li>
          <a>LGA 3</a>
        </li>
        <li>
          <a>LGA 4</a>
        </li>
        <li>
          <a>LGA 5</a>
        </li>
        <li>
          <a>LGA 6</a>
        </li>
        <li>
          <a>LGA 7</a>
        </li>
        <li>
          <a>LGA 8</a>
        </li>
        <li>
          <a>LGA 9</a>
        </li>
        <li>
          <a>LGA 10</a>
        </li>
      </ul>
    </div>
  );
}

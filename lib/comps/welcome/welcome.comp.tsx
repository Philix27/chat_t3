import React from "react";
import styles from "./welcome.comp.module.scss";

export default function WelcomeComp() {
  return (
    <div className={styles.container}>
      <h3>Input Map of the nation </h3>
      <p>Using Mapbox</p>
    </div>
  );
}

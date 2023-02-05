import React from "react";
import styles from "./statusBar.module.scss";

interface StatusBarProperties {
  rightContent?: React.ReactNode;
  midContent?: React.ReactNode;
  leftContent: React.ReactNode;
}
export default function StatusBar(props: StatusBarProperties) {
  return (
    <div className={styles.statusBar}>
      <div>{props.leftContent}</div>
      <div>{props.midContent}</div>
      <div>{props.rightContent}</div>
    </div>
  );
}

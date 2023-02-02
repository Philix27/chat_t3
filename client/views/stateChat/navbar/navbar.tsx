import React from "react";
import styles from "./navbar.module.scss";

interface Props {
  state: string;
}

export default function StateChatNavbar(props: Props): JSX.Element {
  return (
    <div className={styles.navbar}>
      <h3 className={styles.title}>{props.state}</h3>
    </div>
  );
}

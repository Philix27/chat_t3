import Link from "next/link";
import React from "react";
import styles from "./allstates.module.scss";

export default function AllStates() {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <Link href="/">
          <div>
            <h3>ABIA</h3>
            <p>States info</p>
          </div>
        </Link>
        <Link href="/">
          <div>
            <h3>ADAMAWA</h3>
            <p>States info</p>
          </div>
        </Link>
        <Link href="/">
          <div>
            <h3>AKWA IBOM</h3>
            <p>States info</p>
          </div>
        </Link>
        <Link href="/">
          <div>
            <h3>AKWA IBOM</h3>
            <p>States info</p>
          </div>
        </Link>
        <Link href="/">
          <div>
            <h3>AKWA IBOM</h3>
            <p>States info</p>
          </div>
        </Link>
        <Link href="/">
          <div>
            <h3>AKWA IBOM</h3>
            <p>States info</p>
          </div>
        </Link>
        <Link href="/">
          <div>
            <h3>AKWA IBOM</h3>
            <p>States info</p>
          </div>
        </Link>
        <Link href="/">
          <div>
            <h3>AKWA IBOM</h3>
            <p>States info</p>
          </div>
        </Link>
        <Link href="/">
          <div>
            <h3>AKWA IBOM</h3>
            <p>States info</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

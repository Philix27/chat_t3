import React from "react";
import { FaFingerprint } from "react-icons/fa";
import styles from "./voteinfo.module.scss";

export default function VoteInfoComp() {
  return (
    <div className={styles.voteInfo}>
      <div className={styles.card}>
        <div>
          <h4>14,890</h4>
          <h6>Total Voters</h6>
        </div>
        <div>
          <FaFingerprint size={30} />
        </div>
      </div>
      <div className={styles.card}>
        <div>
          <h4>14,890</h4>
          <h6>Valid Voters</h6>
        </div>
        <div>
          <FaFingerprint size={30} />
        </div>
      </div>
      <div className={styles.card}>
        <div>
          <h4>14,890</h4>
          <h6>Accredited Votes</h6>
        </div>
        <div className={styles.fingerprint}>
          <FaFingerprint size={30} />
        </div>
      </div>
      <div className={styles.card}>
        <div>
          <h4 className={styles.validFontColor}>14,890</h4>
          <h6>Valid Votes</h6>
        </div>
        <div className={styles.fingerprint_valid}>
          <FaFingerprint size={30} />
        </div>
      </div>
      <div className={styles.card}>
        <div>
          <h4 className={styles.rejFontColor}>14,890</h4>
          <h6>Rejected Votes</h6>
        </div>
        <div className={styles.fingerprint_rej}>
          <FaFingerprint size={30} />
        </div>
      </div>
    </div>
  );
}

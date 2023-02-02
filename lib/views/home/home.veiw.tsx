import Link from "next/link";
import React from "react";
import styles from "./home.module.scss";

export default function HomeView() {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <Link href="/allstates">
          <div>
            <h3>All States</h3>
            <p>All the 36 states and capital.</p>
          </div>
        </Link>
        <Link href="/statechat/ABIA">
          <div>
            <h3>All States Admin</h3>
            <p>Admin for all the various states.</p>
          </div>
        </Link>

        <Link href="/lgachat/ABIA">
          <div>
            <h3>LGA Admins</h3>
            <p>
              All LGA Chats, view all LGA admins and see activities in the
              respective LGAs.
            </p>
          </div>
        </Link>

        <Link href="/chat">
          <div>
            <h3>Ward Chat</h3>
            <p>For Ward agents and Polling Unit agents. </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

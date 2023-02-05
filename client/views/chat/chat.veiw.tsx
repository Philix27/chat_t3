import Link from "next/link";
import React from "react";
import { SideBar } from "../../comps/sidebar/sidebar";
import styles from "./chat.module.scss";

export default function HomeView() {
  return (
    <div>
      <SideBar />
      <div className={styles.container}>
        <h2 className={styles.title}>Chat Section</h2>
        <div className={styles.cards}>
          <Link href="/allstates">
            <div>
              <h3>All States</h3>
              <p>All the 36 states and capital.</p>
            </div>
          </Link>
          <Link href="/national">
            <div>
              <h3>National</h3>
              <p>Admin for all the various states. All States Admin</p>
            </div>
          </Link>

          <Link href="/statechat/ABIA">
            <div>
              <h3>State</h3>
              <p>
                All LGA Chats, view all LGA admins and see activities in the
                respective LGAs.
              </p>
            </div>
          </Link>

          <Link href="/chat">
            <div>
              <h3>LGA Chat</h3>
              <p>For all ward agents in the LGA. </p>
            </div>
          </Link>

          <Link href="/lga/ABIA">
            <div>
              <h3>Ward</h3>
              <p>For all polling unit agents in the ward.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

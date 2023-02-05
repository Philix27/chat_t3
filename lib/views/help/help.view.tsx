import React from "react";
import styles from "./help.module.scss";
import Link from "next/link";
import { FaRegAddressCard, FaRegRegistered } from "react-icons/fa";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { FcBarChart, FcDataSheet, FcFaq } from "react-icons/fc";
import NavBar from "../../comps/navbar/navbar.comp";
import { TiGroup } from "react-icons/ti";

export default function HelpView() {
  return (
    <div>
      <NavBar title={"Willi"} subtitle={""} rightText={""} subRightText={""} />
      <div className={styles.help}>
        {/* <NavBar title={"Title"} /> */}
        <div className={styles.container}>
          <h1>Help Section</h1>
          <div className={styles.gridContainer}>
            <Link href="/help/result">
              <div>
                <FcDataSheet className={styles.icon} />
                <h3>Upload Result</h3>
                <p>Subtitle</p>
              </div>
            </Link>
            <Link href="/help/reg">
              <div>
                {/* <FaRegRegistered className={styles.icon} /> */}
                <FaRegAddressCard className={styles.icon} />
                <h3>Register</h3>
                <p>Subtitle</p>
              </div>
            </Link>
            <Link href="/help/chat">
              <div>
                <BsFillChatLeftDotsFill className={styles.icon} />
                <h3>Chat</h3>
                <p>Subtitle</p>
              </div>
            </Link>
            <Link href="/help/visualize">
              <div>
                <FcBarChart className={styles.icon} />
                {/* <TiGroup className={styles.icon} /> */}
                <h3>Visualize</h3>
                <p>Subtitle</p>
              </div>
            </Link>
            <Link href="/help/faq">
              <div>
                <FcFaq className={styles.icon} />
                <h3>FAQ</h3>
                <p>Subtitle</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

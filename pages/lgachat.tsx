import React from "react";
import Accounts from "../client/comps/accounts/accounts";
import MsgSection from "../client/comps/msgs/msgSection";
import styles from "../styles/chatpage.module.scss";

export default function ChatPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>Navbar</div>
      <div className={styles.body}>
        <div className={styles.users}>
          <Accounts />
        </div>
        <div className={styles.chat}>
          <MsgSection roomId={"ABA"} />
        </div>
        <div className={styles.highlight}>Highlight div</div>
      </div>
    </div>
  );
}

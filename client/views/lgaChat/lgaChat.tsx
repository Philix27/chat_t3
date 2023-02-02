import React, { FC } from "react";
import LgaList from "./lga/lgaList";
import MsgSection from "../../comps/msgs/msgSection";
import styles from "./stateChat.module.scss";

import StateChatNavbar from "./navbar/navbar";
import LgaAgentList from "./agentList/agentList";

interface Props {
  userState: string;
}

export default function LgaComp(props: Props): JSX.Element {
  const selectedLg = data.states.filter((val) =>
    val.state.toLowerCase().includes(props.userState?.toLowerCase())
  );

  return (
    <div className={styles.wrapper}>
      <StateChatNavbar state={selectedLg[0].state} />
      <div className={styles.body}>
        <div className={styles.lgas}>
          <LgaList lga={selectedLg[0].lga} />
        </div>
        <div className={styles.chat}>
          <MsgSection />
        </div>

        <LgaAgentList lga={selectedLg[0].lga} />
      </div>
    </div>
  );
}

import React, { FC } from "react";
import MsgSection from "../../comps/msgs/msgSection";
import styles from "./stateChat.module.scss";
import { State } from "@prisma/client";
import LeftBarComp from "./LeftBar/LeftBarComp";

interface Props {
  states?: State[];
}

export default function GChatView(props: Props): JSX.Element {
  let listOfStates: string[] = [];
  props.states?.forEach((val) => {
    listOfStates.push(val.name);
  });
  return (
    <div className={styles.wrapper}>
      {/* <StateChatNavbar state={props.states} /> */}
      <div className={styles.body}>
        {/* <LeftBarComp titles={props.states?.map((val) => val.name)} /> */}
        <LeftBarComp titles={listOfStates} />
        <MsgSection />
        {/* <LgaAgentList lga={selectedLg[0].lga} /> */}
      </div>
    </div>
  );
}

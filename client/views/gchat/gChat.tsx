import React, { FC } from "react";
import MsgSection from "../../comps/msgs/msgSection";
import styles from "./gchat.module.scss";
import { State } from "@prisma/client";
import LeftBarComp from "./LeftBar/LeftBarComp";
import GChatNavbar from "./navbar/navbar";

interface Props {
  states?: State[];
  chatId: string;
}

export default function GChatView(props: Props): JSX.Element {
  let listOfStates: string[] = [];
  props.states?.forEach((val) => {
    listOfStates.push(val.name);
  });
  return (
    <div className={styles.wrapper}>
      <GChatNavbar state="All States" />
      <div className={styles.body}>
        {/* <LeftBarComp titles={props.states?.map((val) => val.name)} /> */}
        <LeftBarComp titles={listOfStates.sort((a, b) => a.localeCompare(b))} />
        <MsgSection roomId={props.chatId} />
        {/* <LgaAgentList lga={selectedLg[0].lga} /> */}
      </div>
    </div>
  );
}

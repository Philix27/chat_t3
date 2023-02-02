import React, { FC } from "react";
import LgaList from "./states/statesList";
import MsgSection from "../../comps/msgs/msgSection";
import styles from "./stateChat.module.scss";
// import { data } from "../../../constants/states";
import StateChatNavbar from "./navbar/navbar";
import LgaAgentList from "./agentList/agentList";

interface Props {
  userState: string;
}

export default function CardsComp(props: Props): JSX.Element {
  // const selectedLg = data.states.filter((val) =>
  //   val.state.toLowerCase().includes(props.userState?.toLowerCase())
  // );

  return (
    <div className={styles.wrapper}>
      {/* <StateChatNavbar state={selectedLg[0].state} /> */}
      <div className={styles.body}>
        {/* <LgaList lga={selectedLg[0].lga} /> */}
        <MsgSection />
        {/* <LgaAgentList lga={selectedLg[0].lga} /> */}
      </div>
    </div>
  );
}

// function preventScroll(e: Document) {
//   e.preventDefault();
//   e.stopPropagation();

//   return false;
// }

// function disable() {
//   document
//     .querySelector(".scrollable")
//     ?.addEventListener("wheel", preventScroll);
// }

// function enable() {
//   document
//     .querySelector(".scrollable")
//     ?.removeEventListener("wheel", preventScroll);
// }

// document.querySelector("#prevent").addEventListener("click", disable);
// document.querySelector("#allow").addEventListener("click", enable);

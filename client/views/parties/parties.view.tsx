import React, { useEffect, useState } from "react";
import styles from "./analytics.module.scss";

import ChartComp from "./chart";
import CardsComp from "./cards";
import TableComp from "./table";
import {
  collection,
  DocumentData,
  getDocs,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import { firestoreDb } from "../../../config/firebase";
import AnalyticsDataType from "./analytics.type";
import VoteInfoComp from "../../comps/voteinfo/voteinfo.comp";
import StatusBar from "../../comps/statusBar/statusBar.comp";
import { SideBar } from "../../comps/sidebar/sidebar";

type ElectionResultType = {
  data: DocumentData;
  id: string;
};
export default function PartiesView() {
  const [view, setView] = useState("CHART");
  const [electionResult, setElectionResult] = useState<AnalyticsDataType[]>([]);

  useEffect(() => {
    const presidentialCollRef = collection(firestoreDb, "presidential23");
    // addDoc(presidentialCollRef);
    const unsubscribe = onSnapshot(presidentialCollRef, (snapshot) => {
      const res = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          state: doc.data().state,
          A: Number(doc.data().partyVotes.A),
          AA: Number(doc.data().partyVotes.AA),
          AAC: Number(doc.data().partyVotes.AAC),
          ADC: Number(doc.data().partyVotes.ADC),
          ADP: Number(doc.data().partyVotes.ADP),
          APC: Number(doc.data().partyVotes.APC),
          APGA: Number(doc.data().partyVotes.APGA),
          APM: Number(doc.data().partyVotes.APM),
          APP: Number(doc.data().partyVotes.APP),
          BP: Number(doc.data().partyVotes.BP),
          LP: Number(doc.data().partyVotes.LP),
          NNPP: Number(doc.data().partyVotes.NNPP),
          NRM: Number(doc.data().partyVotes.NRM),
          PDP: Number(doc.data().partyVotes.PDP),
          PRP: Number(doc.data().partyVotes.PRP),
          SDP: Number(doc.data().partyVotes.SDP),
          YPP: Number(doc.data().partyVotes.YPP),
          ZLP: Number(doc.data().partyVotes.ZLP),
        };
      });

      res.forEach((val) => {
        let _uniqueStates: string[] = [];
        let stateIndex = [];
        if (!_uniqueStates.includes(val.state)) {
          _uniqueStates.push(val.state);
        }
        _uniqueStates.sort();
      });
      console.log(res);
      setElectionResult(res);
    });

    // addDoc(presidentialCollRef, { data }).then((response) => {
    //   console.log(response);
    // });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <SideBar />
      <div className={styles.statePage}>
        <StatusBar
          leftContent={
            <div className={styles.title}>
              <h4>Election Info</h4>
            </div>
          }
          rightContent={
            <div className={styles.dropdown}>
              <select
                onChange={(e) => {
                  setView(e.target.value);
                  console.log(e.target.value);
                }}
              >
                <option value="CHART">Chart</option>
                {/* <option value="CARDS">Cards</option> */}
                <option value="TABLE">Table</option>
              </select>
            </div>
          }
        />
        <VoteInfoComp />

        {/* <h2>Party leading by 25%</h2> */}
        {view == "CHART" && <ChartComp data={electionResult} />}
        {/* <h2>Leading Parties</h2> */}
        {view == "TABLE" && <TableComp data={electionResult} />}
      </div>
    </div>
  );
}

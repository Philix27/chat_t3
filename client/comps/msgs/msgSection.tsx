import React, { useEffect, useState } from "react";
import styles from "./msgsection.module.scss";

import {
  collection,
  DocumentData,
  getDocs,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import MessageDtoType from "./msgType";
import TimeAgo from "timeago-react";
import { firestoreDb } from "../../utils/firebse";

type MessageInputType = {
  message: string;
  imageUrl?: string;
  agentId: string;
  messageType: string;
  timeSent: string;
};

interface Props {
  roomId: string;
}

export default function MsgSection(props: Props): JSX.Element {
  const roomCollection = props.roomId;
  const roomCollectionRef = collection(firestoreDb, roomCollection);

  const [messages, setMessages] = useState<MessageDtoType[]>([]);
  const [newMessage, setNewMessage] = useState<String>("New Msg");

  function sendMsg() {
    console.log("Send msg");
    const _msgParams: MessageInputType = {
      message: newMessage as string,
      agentId: "agntIdsfm23",
      messageType: "MSG",
      timeSent: Date(),
    };
    addDoc(roomCollectionRef, { ..._msgParams }).then((response) => {
      console.log(response);
    });
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(roomCollectionRef, (snapshot) => {
      let res = snapshot.docs.map((doc) => {
        return {
          chatRoomId: doc.id,
          message: doc.data().message as string,
          messageType: doc.data().messageType as string,
          agentId: doc.data().agentId as string,
          timeSent: new Date(doc.data().timeSent),
          imageUrl: doc.data().imageUrl as string,
        };
      });

      res = res.sort((_msg1, _msg2) => +_msg1.timeSent - +_msg2.timeSent);
      setMessages(res);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.bubbleSection}>
        {messages.map((msg, index) => (
          <div className={styles.othersChatBubble} key={index}>
            <div className={styles.title}>
              <div className={styles.time}>
                <TimeAgo live={true} datetime={msg.timeSent.toString()} />
              </div>
              <h5>{msg.agentId}</h5>
            </div>
            <p>{msg.message}</p>
          </div>
        ))}
        {messages.map((msg, index) => (
          <div className={styles.myChatBubbleContainer} key={index}>
            <div></div>
            <div className={styles.myChatBubble} key={index}>
              <div className={styles.title}>
                <h5>{msg.agentId}</h5>
                <div className={styles.time}>
                  <TimeAgo datetime={msg.timeSent.toString()} />
                </div>
              </div>
              <p>{msg.message}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className={styles.textField}>
          {/* <form onSubmit={(e) => e.preventDefault()}> */}
          <div>
            <input
              type="text"
              onChange={(e) => setNewMessage(e.target.value)}
            />
          </div>
          <div>
            <input
              value="Send"
              type="button"
              onSubmit={(e) => sendMsg()}
              onClick={(e) => sendMsg()}
            />
          </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}

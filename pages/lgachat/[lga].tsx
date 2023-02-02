import { useRouter } from "next/router";
import React from "react";
import LgaChat from "../../src/views/lgaChat/lgaChat";
import StateChat from "../../src/views/stateChat/stateChat";

export default function ChatPage() {
  const router = useRouter();
  const query = router.query;
  const userState = query.lga as string;
  console.log(userState);
  return <LgaChat userState={userState} />;
}

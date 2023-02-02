import { useRouter } from "next/router";
import React from "react";
import StateChat from "../../src/views/stateChat/stateChat";

export default function ChatPage() {
  const router = useRouter();
  const query = router.query;
  const userState = query.state as string;
  console.log(userState);
  return <StateChat userState={userState} />;
}

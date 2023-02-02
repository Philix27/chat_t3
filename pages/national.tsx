import React from "react";
import GChatView from "../client/views/gchat/gChat";
import { api } from "../client/utils/api";

export default function ChatPage() {
  const { data, isLoading, error } = api.state.getAll.useQuery();
  if (isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h3>Error...</h3>
      </div>
    );
  }
  if (data) {
    return <GChatView states={data} chatId="all_states" />;
  }
}

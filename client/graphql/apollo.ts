import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { createContext } from "react";
import { io, Socket } from "socket.io-client";

export const socket = io("http://localhost:3800");
export const WebSocketContext = createContext<Socket>(socket);
export const WebSocketProvider = WebSocketContext.Provider;

const graphqlClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL,
  cache: new InMemoryCache(),
});

export default graphqlClient;

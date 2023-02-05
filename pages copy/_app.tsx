import Layout from "../lib/comps/global/Layout";
import type { AppProps } from "next/app";
import "../styles/index.scss";
import { ApolloProvider } from "@apollo/client";
import graphqlClient from "../config/apollo";
import { WebSocketProvider, socket } from "../contexts/ws";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={graphqlClient}>
      <WebSocketProvider value={socket}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WebSocketProvider>
    </ApolloProvider>
  );
}

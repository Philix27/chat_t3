import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "../client/utils/api";
import "../styles/index.scss";
import "../styles/globals.css";
import graphqlClient, {
  socket,
  WebSocketProvider,
} from "../client/graphql/apollo";
import { ApolloProvider } from "@apollo/client";
import Layout from "../client/comps/global/Layout";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={graphqlClient}>
        <WebSocketProvider value={socket}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </WebSocketProvider>
      </ApolloProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);

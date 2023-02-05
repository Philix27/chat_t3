import React from "react";
import Head from "next/head";
import { SideBar } from "../sidebar/sidebar";
import NavBar from "../navbar/navbar.comp";

export default function Layout(props: any) {
  return (
    <>
      <Head>
        <title>APCAIMS </title>
        <meta name="apcsituationroom" content="Created by Eligbue" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      {/* <NavBar title={"Willi"} subtitle={""} rightText={""} subRightText={""} /> */}
      {/* <SideBar /> */}
      {props.children}
      {/* <Footer /> */}
    </>
  );
}

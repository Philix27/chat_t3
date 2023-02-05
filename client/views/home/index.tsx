import React, { useState } from "react";
import StatusBar from "../../comps/statusBar/statusBar.comp";
import styles from "../home/home.module.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { FullscreenControl, Marker, ScaleControl } from "react-map-gl";
import useAllStates from "../../graphql/createstate";
import MapComp from "./map.comp";
import OverviewView from "./overview/overview.view";
import { SideBar } from "../../comps/sidebar/sidebar";
import NavBar from "../../comps/navbar/navbar.comp";

export default function HomeView(): JSX.Element {
  const [view, setView] = useState("MAP");

  const { error, loading, data } = useAllStates();
  const indicatorStyle = {
    justifyContent: "center",
    width: "100%",
    height: "100px",
    alignItems: "center",
    padding: "20px",
    marginLeft: "250px",
    backgroundColor: "#FFF",
  };
  // if (error)
  //   return (
  //     <div style={indicatorStyle}>Oops, something went wrong .... Error</div>
  //   );
  // if (loading) return <div style={indicatorStyle}>Loading....</div>;
  // console.log(error, loading, data);
  return (
    <div>
      <SideBar />
      {/* <NavBar title={"Willi"} subtitle={""} rightText={""} subRightText={""} /> */}
      <div className={styles.homePage}>
        <StatusBar
          leftContent={
            <div className={styles.title}>
              <h4>Welcome</h4>
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
                <option value="MAP">Map</option>
                <option value="CHART">Chart</option>
              </select>
            </div>
          }
        />

        {view == "MAP" && <MapComp />}
        {view == "CHART" && <OverviewView />}
      </div>
    </div>
  );
}

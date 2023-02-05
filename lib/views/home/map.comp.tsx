import React, { useState } from "react";
import styles from "./map.module.scss";
import Map, { FullscreenControl, Marker, ScaleControl } from "react-map-gl";
import useAllStates from "../../../graphql/createstate";
import statesInfo from "./data";
import mapboxgl from "mapbox-gl";

const mapStyle: React.CSSProperties = {
  width: "100%",
  height: "calc(100vh - 100px)",
  borderRadius: "10px",
  marginTop: "10px",
};
const markerStyle: React.CSSProperties = {
  backgroundColor: "#0886082",
  height: "30px",
  width: "30px",
  borderRadius: "15px",
  color: "#fff",
  textAlign: "center",
  lineHeight: "30px",
};

export default function MapComp() {
  const [navTitle, setNavTitle] = useState("Welcome");
  const [lng, setLng] = useState(8.675277000000051);
  const [lat, setLat] = useState(9.081999);

  return (
    <div className={styles.contents}>
      <Map
        style={mapStyle}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          bounds: [3, 4, 14, 14],
          fitBoundsOptions: {
            linear: true,
            maxZoom: 15,
          },
        }}
        onZoom={(e) => {
          // e.viewState.latitude;
          // e.viewState.longitude;
          let zoomNumb = e.target.getZoom();
          console.log("Zoom no:", zoomNumb);
        }}
        // zoom={5}
        maxBounds={[1, 1, 18, 18]}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken="pk.eyJ1IjoicGhpbGl4IiwiYSI6ImNsZDA3bWVjOTE0MXgzd3FsYng1aWRsNTkifQ.iA4WJBKJ9zj3zcWVrr5nQA"
      >
        {statesInfo.map((state: any, index: number) => (
          <Marker
            key={index}
            longitude={state.latitude}
            latitude={state.longnitude}
            anchor="center"
            onClick={() => setNavTitle(state.name.toUpperCase())}
            color="#177ED3"
          >
            {/* <div style={markerStyle}> */}

            <div className={styles.marker}>
              <span>{index + 1}</span>
            </div>
          </Marker>
        ))}
        <FullscreenControl />
      </Map>
    </div>
  );
}

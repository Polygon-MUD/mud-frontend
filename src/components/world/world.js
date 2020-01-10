import React from "react";
import Map from "../map/map";
import Player from "../player/player";

function World(props) {
  return (
    <div
    //   style={{
    //     position: "relative",
    //     width: "800px",
    //     height: "400px",
    //     margin: "20px auto"
    //   }}
    >
      <Map />
      <Player />
    </div>
  );
}

export default World;

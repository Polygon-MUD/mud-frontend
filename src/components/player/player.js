import React from "react";
import { connect } from "react-redux";
import walkSprite from "./player_assets/f-sprite.png";
import handleMovement from "./move";

function Player(props) {
  return (
    <div
      style={{
        position: "absolute",
        top: props.position[1],
        left: props.position[0],
        backgroundImage: `url('${walkSprite}')`,
        backgroundPosition: props.spriteLocation,
        width: "40px",
        height: "40px"
      }}
    />
  );
}

function mapStateToProps(state) {
  return {
    ...state.character
  };
}

export default connect(mapStateToProps)(handleMovement(Player));

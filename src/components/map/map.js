import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { SPRITE_SIZE } from '../../config/constants'
import './styles.css'
import './Map.css'
import Player from '../../components/player/player'

const Map = (props) => {
  return (
    <div
      style={{
        position: "relative",
        top: "0px",
        left: "0px",
        width: "70vw",
        height: "82vh",
        // backgroundColor: "#9b7653",
        // border: "4px solid beige"
      }}>
      {
        props.tiles.map((row, index) => <MapRow key={index} tiles={row} />)
      }
      <Player />
    </div>
  )
}

const getTileSprite = (type) => {
  switch (type) {
    case 0:
      return 'store'
    default:
      console.log('GET TILE SPRITE NOT GOTTEN')
  }
}

const MapTile = (props) => {
  return <div
    className={`tile ${getTileSprite(props.tile)}`}
    style={{
      height: SPRITE_SIZE,
      width: SPRITE_SIZE
    }}
  />
}

const MapRow = (props) => {
  return <div
    className="row"
    style={{
      height: SPRITE_SIZE
    }}
  >{
      props.tiles.map((tile, index) => <MapTile key={index} tile={tile} />)
    }
  </div>
}

const mapStateToProps = (state) => {
  return {
    tiles: state.map.tiles
  }
}

export default connect(mapStateToProps)(Map)
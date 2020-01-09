import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { SPRITE_SIZE } from '../../config/constants'
import './styles.css'
import './Map.css'
import axios from 'axios'
import RoomMap from './roomMap'

const Map = () => {
    const [room, setRooms] = useState([])
    let key = 'Token ' + localStorage.getItem('key')


    useEffect(() => {
        axios.get(
            'https://mud-build.herokuapp.com/api/adv/rooms',
            {
                headers: {
                    "Authorization": key
                }
            })
            .then(res => {
                console.log('GET ROOMS: ', res.data)
                const rooms = res.data;
                setRooms(rooms)

            })
            .catch(err => console.log('ROOMS GET ERROR:  ', err))

    }, [])

    //  roomsList = room.map((index) => { <RoomMap
    // title = {index.title}
    // />
    // });


    return (
        <div className = 'mapWrapper'>
            {/* <h1>Map</h1> */}
            {/* <div>
                {room.map((index) => <RoomMap
                    title={index.title}
                />)}
            </div> */}

            <div
                style={{
                    position: "relative",
                    top: "0px",
                    left: "0px",
                    width: "70vw",
                    height: "82vh",
                    backgroundColor: "#9b7653",
                    border: "4px solid beige"
                }}
            />

        </div>

    )


}

export default Map

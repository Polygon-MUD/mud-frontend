import React, {useState, useEffect} from 'react'
import axios from 'axios'

import '../css/Map.css'

const Map = () =>{
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        axios.get('https://mud-build.herokuapp.com/api/adv/rooms')
        .then(res=>{
            console.log('res',res.data)
            setRooms(res.data)
            console.log(rooms)
        })
        .catch(err => {
            console.log("error", err)
        })
    }, [rooms])
    return(
        <div className="mapWrapper">
            {rooms.map(room => <div>{room.title}</div>)} 
        </div>
    )
}

export default Map
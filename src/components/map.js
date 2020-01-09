import React, {useState, useEffect} from 'react'
import axios from 'axios'

import '../css/Map.css'

const Map = (rooms) =>{
    return(
        <div className="mapWrapper">
            {rooms.name} 
        </div>
    )
}

export default Map
import React, {useEffect, useState} from 'react'
import axios from 'axios'

// import Map from './map.js'
import Nav from './nav.js'
import SidePanel from './sidePanel.js'
import World from './world/world'

const Home = () =>{       
    return(
        <div className="App">
            <Nav /> 
            <div className="main">
                {/* <Map /> */}
                <World/>
                <SidePanel />
            </div>
        </div>
    )
}

export default Home
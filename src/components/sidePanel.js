import React, {useState, useEffect} from 'react'

import Inventory from './inventory.js'
import Chat from './chat.js'
import Directions from './directions.js'

const SidePanel = () =>{
    return(
        <div className="sidePanel">
            <div className="sidePanelItem"><Inventory /></div>
            <div className="sidePanelItem"><Chat /></div>
            <div className="sidePanelItem"><Directions /></div>
        </div>
    )
}

export default SidePanel
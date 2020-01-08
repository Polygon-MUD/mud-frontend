import React from 'react';
import './css/App.css';

//Components
import Map from './components/map.js'
import Inventory from './components/inventory.js'
import Chat from './components/chat.js'
import Directions from './components/directions.js'
import Nav from './components/nav.js'

function App() {
  return (
    <div className="App">
      <Nav /> 
      <div className="main">
        <Map />
        <div className="sidePanel">
        <div className="sidePanelItem"><Inventory /></div>
        <div className="sidePanelItem"><Chat /></div>
        <div className="sidePanelItem"><Directions /></div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './css/App.css';

//Components
import Map from './components/map.js'
import Inventory from './components/inventory.js'
import Chat from './components/chat.js'
import Directions from './components/directions.js'
import Login from './components/login.js'
import Register from './components/register.js';
import Initialize from './Init/init';
import Nav from './components/nav.js'

function App() {
  return (
    <div className="App">
      <Login/>
      <Register/>
      <Initialize/>
      {/* <Map /> */}
      {/* <Inventory />*/}
      {/* <Chat />*/}
      {/* <Directions />*/}
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

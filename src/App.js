import React from 'react';
import logo from './logo.svg';
import './App.css';

//Components
import Map from './components/map.js'
import Inventory from './components/inventory.js'
import Chat from './components/chat.js'
import Directions from './components/directions.js'

function App() {
  return (
    <div className="App">
      <Map />
      <Inventory />
      <Chat />
      <Directions />
    </div>
  );
}

export default App;

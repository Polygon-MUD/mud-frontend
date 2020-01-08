import React from 'react';
// import logo from './logo.svg';
import './App.css';

//Components
import Map from './components/map.js'
import Inventory from './components/inventory.js'
import Chat from './components/chat.js'
import Directions from './components/directions.js'
import Login from './components/login.js'
import Register from './components/register.js';
import Initialize from './Init/init';

function App() {
  return (
    <div className="App">
      <Login/>
      <Register/>
      <Initialize/>
      <Map />
      <Inventory />
      <Chat />
      <Directions />
    </div>
  );
}

export default App;

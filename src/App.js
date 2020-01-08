import React from 'react';
import {Route} from 'react-router-dom' 
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
      <Nav /> 
      <div className="main">
        <Map />
        <div className="sidePanel">
        <div className="sidePanelItem"><Inventory /></div>
        <div className="sidePanelItem"><Chat /></div>
        <div className="sidePanelItem"><Directions /></div>
        </div>
      </div>

      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
    </div>
  );
}

export default App;

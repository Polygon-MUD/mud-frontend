import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Route} from 'react-router-dom' 
import './css/App.css';

//Components
import Map from './components/map.js'
import Inventory from './components/inventory.js'
import Chat from './components/chat.js'
import Directions from './components/directions.js'
import Login from './components/login.js'
import Register from './components/register.js';
import Nav from './components/nav.js'

function App() {
  const [rooms, setRooms] = useState([])
  useEffect(() => {
      init()
    },[])

  const init = () => {
    let key = 'Token ' + localStorage.getItem('key')
    console.log(key)
    axios.get(
      'https://mud-build.herokuapp.com/api/adv/init/',
      {headers: {
          "Authorization" : key
      }})
    .then(res => {           
      console.log('GET ROOMS: ', res.data)
      setRooms(res.data)
      console.log(rooms)
    })
    .catch(err => console.log('INIT GET ERROR:  ', err))
  }
  
  return (
    <div className="App">
      <Nav /> 
      <div className="main">
        <Map rooms={rooms}/>
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

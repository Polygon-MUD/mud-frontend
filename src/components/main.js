import React, {Component} from 'react';
// import logo from '../logo.svg';
import '../css/App.css'
import Authentication from './authentication'
//import axios from 'axios';
import {NavLink} from 'react-router-dom'

class Main extends Component {
  handleLogout = () => {
    localStorage.removeItem('key')
    window.location.reload()
  }

  render() {
    return (
      <div>
        <div>
          {/* <img src={logo} className="Main-logo" alt="logo" /> */}
          <NavLink className='start-game-button' to='/play'>Enter Game</NavLink>
          {/* <button className='main-logout' onClick={this.handleLogout}>Logout</button> */}
        </div>
          
      </div>
    );
  } 
  }
  
  export default Authentication(Main);
  
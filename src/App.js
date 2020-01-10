import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Route} from 'react-router-dom' 
import './css/App.css';

//Components
// import Home from './components/home.js'
import Login from './components/login.js'
import Register from './components/register.js';
import Main from './components/main'
import Play from './components/play/play'

function App() {
  return (
    <> 
    <div className = 'body'>
      <Route exact path='/auth' component={Main}/>
      <Route path='/' component={Login}/>
      <Route path='/register' component={Register}/> 
      <Route exact path='/play' component={Play} />
    </div>
    </> 
  );
}

export default App;

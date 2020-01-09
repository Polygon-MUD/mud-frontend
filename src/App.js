import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Route} from 'react-router-dom' 
import './css/App.css';

//Components
import Home from './components/home.js'
import Login from './components/login.js'
import Register from './components/register.js';

function App() {
  return (
    <> 
      <Route exact path='/' component={Home}/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/> 
    </> 
  );
}

export default App;

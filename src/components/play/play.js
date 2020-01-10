import React, {Component} from 'react';
import Authentication from '../authentication'
import axios from 'axios'
import {connect} from 'react-redux'
import {initialize, move} from '../actions/initialize'
import Map from '../map/map'
import store from '../../config/store'
import { tiles } from '../map/mapStructure/data'
import Nav from '../nav';
import '../../css/Play.css'


class Play extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  handleLogout = () => {
    localStorage.removeItem('key')
    window.location.reload()
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  componentDidMount() {
    this.props.initialize()
    store.dispatch({ type: 'ADD_TILES', payload: {
      tiles
    }})
  }

  move = (e) => {
     this.props.move(e) 
  }

 
  render() {
    return (
      <div>
     <Nav/>
      <div className="main">
      <Map />
        <div className="sidePanel">

          <div className="sidePanelItem">
            <div>
              <h3>Player: {this.props.playerInfo.player.name}</h3>
            </div>
            <div className = 'opponent1'> Opponents: {this.props.playerInfo.player.players.map((player, index) => {
              return <p className = 'opponent' key={index}>{player}//</p>
            })}</div>
          </div>

          <div className="sidePanelItem">
            <h3>{this.props.playerInfo.player.title}</h3>
            <h4>{this.props.playerInfo.player.description}</h4>
            <h5>{this.props.playerInfo.player.error_msg}</h5>
          </div>

          <div className='sidePanelItem'>
            <div className="directions">
              <button direction='n' className='button' onClick={this.move}>N</button>
              <button direction='w' className='button' onClick={this.move}>W</button>
              {/* <button>&#9679;</button> */}
              <button direction='e' className='button' onClick={this.move}>E</button>
              <button direction='s' className='button' onClick={this.move}>S</button>
            </div>
          </div>

        </div>

      </div>
      <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
  }

  const mapStateToProps = (state) => {
    return {
      playerInfo: state.play
    }
  }
  
  export default connect(mapStateToProps, {initialize, move})(Authentication(Play))  
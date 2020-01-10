import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Nav.css';
import Logo from '../image/finalFantasyLogo.png'

function Nav(){
    return(
        <div className='navWrapper'>
            <img src={Logo} alt="websiteLogo"/>
            {/* <ul>
                <li><Link to="/login" style={{textDecoration: 'none', color: 'black'}}>Login</Link></li>
                <li><Link to="/register" style={{textDecoration: 'none', color: 'black'}}>Register</Link></li>
            </ul> */}
        </div>
    )
}

export default Nav
import React from 'react'
import '../css/Nav.css';
import Logo from '../image/finalFantasyLogo.png'

function Nav(){
    return(
        <div className='navWrapper'>
            <img src={Logo} alt="websiteLogo"/>
            <ul>
                <li><a>Login</a></li>
                <li><a>Register</a></li>
            </ul>
        </div>
    )
}

export default Nav
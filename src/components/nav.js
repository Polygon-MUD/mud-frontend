import React from 'react'
import '../css/Nav.css';

function Nav(){
    return(
        <div className='navWrapper'>
            <h1>Title</h1>
            <ul>
                <li><a>Login</a></li>
                <li><a>Register</a></li>
            </ul>
        </div>
    )
}

export default Nav
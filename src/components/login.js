import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Register from './register';
import Nav from './nav';

export default function Login(props) {
    const [user, setUser] = useState({ username: '', password: '' });

    const handleChange = (event) => {
        event.persist();
        setUser(user => ({...user, [event.target.name] : event.target.value }))
    }
    

    function submitHandler(event) {
        event.preventDefault()

        axios.post('https://mud-build.herokuapp.com/api/login/', user)
            .then(res => {
                console.log(res.status)
                if (res.status === 200 && res.data) {
                    console.log('LOGIN SUCCESS!!',res.data.key)
                    localStorage.setItem('key', res.data.key)
                    props.history.push('/auth')
                }
            })
            .catch(err => {
                console.log('LOGIN ERROR: ', err)
            })
    }

    return (
        <div className = 'login'>
            <Nav/>
            <div>
            <form className = 'login-container' onSubmit={submitHandler}>
                <legend> Welcome Back </legend>
                <span> Log in to your Account </span>

                <label htmlFor='username'>Username</label>
                <input
                    type='text'
                    id='username'
                    name='username' required
                    value={user.email}
                    onChange={handleChange}
                />

                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    id='password'
                    name='password' required
                    value={user.password}
                    onChange={handleChange}
                />

                <button type='submit'>Enter</button>
            </form>
            </div>
            <div className ='login-registration'>Need an account?<Link to="/register">Register Here</Link></div>

        </div>
    )
}
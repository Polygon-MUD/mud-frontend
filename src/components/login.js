import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function Login(props) {
    const [user, setUser] = useState({ username: '', password: '' });

    const handleChange = (event) => {
        event.persist();
        setUser(user => ({...user, [event.target.name] : event.target.value }))
    }
    

    function submitHandler(event) {
        event.preventDefault()

        axios.post('https://lambda-mud-test.herokuapp.com/api/login/', user)
            .then(res => {
                if (res.status === 200 && res.data) {
                    console.log('LOGIN SUCCESS!!',res.data.key)
                    localStorage.setItem('key', res.data)
                    // props.history.push('##game screen#')
                }
            })
            .catch(err => {
                console.log('LOGIN ERROR: ', err)
            })
    }

    return (
        <div>

            <form onSubmit={submitHandler}>
                <legend> Welcome Back </legend>
                <span> Log in to your Account </span>

                <label htmlFor='username'>Email</label>
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

            <div className ='login-registration'>Need an account?<Link to="/register">Register Here</Link></div>

        </div>
    )
}
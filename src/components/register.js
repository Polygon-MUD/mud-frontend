import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Nav from './nav';

const Register =  (props) => {
    const [inputs, setInputs] = useState({username: '', email: '', password1: '', password2: ''});

    const registerUser = (newUser) => {

        axios.post('https://mud-build.herokuapp.com/api/registration/', newUser)
        .then(res => {
            console.log('REGISTRATION RESPONSE:', res.data)
            if (res.status === 201 && res.data){
                console.log('REGISTRATION SUCCESS!!!')
                localStorage.setItem('key', res.data.key)
                props.history.push('/auth')
            }
        })
        .catch(err => {
            console.log('REGISTRATION ERROR: ', err)
        })
    }

    const handleSubmit = (e) => {
        if (e) {
            e.preventDefault();
            registerUser(inputs)
        }
    }

    const handleChange = (e) => {
        e.persist();
        setInputs(inputs => ({...inputs, [e.target.name] : e.target.value}))
    }

    return(
        <div className = 'register'>
            <Nav/>
        <form className = 'register-container' onSubmit={handleSubmit}>
            <legend> Create an Account </legend>
            <span> Join the Fun </span>

            <label htmlFor='username'>Username</label>
            <input
                type='text'
                id='username'
                name='username' required
                value={inputs.username}
                onChange={handleChange}
            />

            <label htmlFor='username'>Email</label>
            <input
                type='text'
                id='email'
                name='email' required
                value={inputs.email}
                onChange={handleChange}
            />

            <label htmlFor='password1'>Password</label>
            <input
                type='password1'
                id='password1'
                name='password1' required
                value={inputs.password}
                onChange={handleChange}
            />

            <label htmlFor='password2'>Password</label>
            <input
                type='password2'
                id='password2'
                name='password2' required
                value={inputs.confirm_password}
                onChange={handleChange}
            />

            <button type='submit'>Sign Up</button>
        </form>

        <div className ='login-registration'>Already have an account?<Link to="/login"> Login Here</Link></div>

    </div>

    )

}

export default Register
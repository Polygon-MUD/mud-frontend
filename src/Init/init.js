import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Rooms from './rooms'
import axiosWithAuth from '../utils/axiosWithAuth'

//=========With Auth ===========

// export default Initialize

// function Initialize() {
//     const [data, setData] = useState([])
//     let key = 'Token' + localStorage.getItem('key')
//     useEffect(() => {
//             //https://lambda-mud-test.herokuapp.com/api/adv/rooms
//         const axiosAuth = axiosWithAuth();
//         axiosAuth.get('https://lambda-mud-test.herokuapp.com/api/adv/init')
//         .then(res => {
            
//             console.log('GET ROOMS: ', res.data)
//             // const rooms = res.data.rooms
//             // const[,[...fields]] = rooms
//             // console.log('SPREAD ROOMS: ', fields)
//             // setData(...rooms)
//         })
//         .catch(err => console.log('GET ERROR:  ', err))


//     }, [])

//     return (
//         <div>
//             <h1>Initialize</h1>
//             {/* <div>

//                 {data.map((item) => <Rooms
//                 name={item.name}
//                 gender={item.gender}/>)}
                
                   
//             </div> */}
//         </div>
//     )

// }
// export default Initialize


function Initialize() {
        // const [data, setData] = useState([])
        let key = 'Token ' + localStorage.getItem('key')
        console.log(key)
        //useEffect(() => {
                //https://lambda-mud-test.herokuapp.com/api/adv/rooms
            //const axiosAuth = axiosWithAuth();
            axios.get(
                'https://lambda-mud-test.herokuapp.com/api/adv/init/',
                {headers: {
                    "Authorization" : key
                }})
            .then(res => {
                
                console.log('GET ROOMS: ', res.data)
                // const rooms = res.data.rooms
                // const[,[...fields]] = rooms
                // console.log('SPREAD ROOMS: ', fields)
                // setData(...rooms)
            })
            .catch(err => console.log('INIT GET ERROR:  ', err))
    
    
        //}, [])
    
        const handleSubmit = (e) => {
            if (e) {
                e.preventDefault();
                Initialize()
            }
        }
        return (
            <div>
                <form onSubmit = {handleSubmit}>
                 <button>Initialize</button>
                </form>
                {/* <div>
    
                    {data.map((item) => <Rooms
                    name={item.name}
                    gender={item.gender}/>)}
                    
                       
                </div> */}
            </div>
        )
    
    }
    export default Initialize
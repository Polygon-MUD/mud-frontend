import React, {useEffect, useState} from 'react'
import axios from 'axios'
const Inventory = () =>{
    const [rooms, setRooms] = useState([])
    useEffect(() => {
          init()
    },[])


    const init = () => {
        let key = 'Token ' + localStorage.getItem('key')
        console.log(key)
        axios.get(
          'https://mud-build.herokuapp.com/api/adv/init/',
          {headers: {
              "Authorization" : key
          }})
        .then(res => {           
          console.log('GET ROOMS: ', res.data)
          setRooms(res.data)
          console.log(rooms)
        })
        .catch(err => console.log('INIT GET ERROR:  ', err))
      }
    return(
        <div>
            Inventory
        </div>
    )
}

export default Inventory
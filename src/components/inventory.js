import React, {useEffect, useState} from 'react'
import axios from 'axios'
const Inventory = () =>{
    const [player, setPlayer] = useState({})
    let key = 'Token ' + localStorage.getItem('key')
      useEffect(() => {
        console.log("key_inventory",   key)
          axios.get('https://mud-build.herokuapp.com/api/adv/init/',
            {headers: {
                Authorization : key
            }})
          .then(res => {           
            console.log('GET INIT: ', res.data)
            setPlayer(res.data)
          })
          .catch(err => console.log('INIT GET ERROR:  ', err)) 
      },[])
   
    return(
        <div>
            {player.name}
            {player.description}
            {player.players}
            {player.title}
        </div>
    )
}

export default Inventory
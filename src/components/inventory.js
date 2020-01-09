import React, {useEffect, useState} from 'react'
import axios from 'axios'
const Inventory = () =>{
    const [player, setPlayer] = useState({})
    let key = 'Token ' + localStorage.getItem('key')
      useEffect(() => {
        console.log(key)
          axios.get(
            'https://mud-build.herokuapp.com/api/adv/init/',
            {headers: {
                "Authorization" : key
            }})
          .then(res => {           
            console.log('GET ROOMS: ', res.data)
            console.log("PLAYER  ",player)
            return setPlayer(res.data)
          })
          .catch(err => console.log('INIT GET ERROR:  ', err)) 
      },[key,player])
   
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
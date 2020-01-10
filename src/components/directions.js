import React, {useState} from 'react'
import axios from 'axios'

const Directions = () =>{
    const [direction, setDirection] = useState({})
    let key = 'Token ' + localStorage.getItem('key')
    console.log(key, "KEY")


    const getDirection = (value) => {
        axios.post('https://mud-build.herokuapp.com/api/adv/move/', value,
            {headers: {Authorization : key,
                       "Content-Type": "application/json"
            }  
        })
        .then(res=>{
            console.log('res',res.data)
            setDirection(res.data)
        })
        .catch(err => {
            console.log("error", err)
        })
    } 

    const handleSubmit = (e) => {
        if (e) {
            e.preventDefault();
            console.log('TARGET', e.target.value)
            let value = {"direction": e.target.value}
            getDirection(value)
        }
    }
    
    return(
        <div className="directions">
            <button onClick={handleSubmit} type='submit' value="n" class="button">N</button>
            <button onClick={handleSubmit} type='submit' value="s" class="button">S</button>
            <button onClick={handleSubmit} type='submit' value="e" class="button">E</button>
            <button onClick={handleSubmit} type='submit' value="w" class="button">W</button>
        </div>
    )
}

export default Directions
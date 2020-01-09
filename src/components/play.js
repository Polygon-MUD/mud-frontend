import React, { useEffect } from 'react'
import store from '../config/store'

const Play = (props) =>{

    // function handleLogOut() {
    //     localStorage.removeItem('key')
    //     window.location.reload
    // }

    // useEffect((props) => {
    //     console.log('PLAY PROPS: ', props)
    //     props.initailize()
    //     // store.dispatch({type: 'ADD_TILES', payload: {
    //     //     tiles
    //     // }})
    //     document.body.classList.add('new-tile')

    // })
    return(
        <div>
            Play
            <div>
                <button>Log Out</button>
                <span> Come Back Soon </span>
            </div>
            
        </div>
    )
}

export default Play
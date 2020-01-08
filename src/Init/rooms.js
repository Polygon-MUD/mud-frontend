import React from 'react';

function Rooms(props){
    console.log('ROOMS PROPS: ', props)
    return(
        <div>
            <h2>{props.name}</h2>
            <h3>{props.gender}</h3>
        </div>
    )
}

export default Rooms
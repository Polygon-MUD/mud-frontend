import axios from 'axios'

//Initailize

export const initialize = () => {
    let key = 'Token ' + localStorage.getItem('key')

    const request = axios
      .get('https://mud-build.herokuapp.com/api/adv/init/', {
        headers: {
          "Authorization": key
        }

      })

    return (dispatch) => {
        dispatch({type: 'INITIALIZING'})
        request.then(response => {
            dispatch({type: 'INITIALIZED', payload: response.data})      
        }).catch(error => {
            dispatch({type: 'ERROR', payload: error})
        })
    }
}

//Move

export const move = (e) => {
  const direction = e.target.getAttribute('direction')
  const token = 'Token ' + localStorage.getItem('key')
  const request = axios.post('https://mud-build.herokuapp.com/api/adv/move/', 
    {"direction": direction}, {
        headers: {
            Authorization: token,
            "Content-Type": "application/json"
        }
    })

  return (dispatch) => {
    request.then(response => {
      dispatch({type: 'MOVE', payload: response.data})
    })
    .catch(error => {
      dispatch({type: 'ERROR', payload: error})
    })
  }
}
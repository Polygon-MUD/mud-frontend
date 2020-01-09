import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
// import playReducer from '../components/Play/reducer'
// import playerReducer from '../components/Player/reducer'
import mapReducer from '../components/map/mapReducer'
import Thunk from 'redux-thunk'
import logger from 'redux-logger'
import playerReducer from '../components/player/playerReducer'

const rootReducer = combineReducers({
    // play: playReducer,
    // character: playerReducer,
    player: playerReducer,
    map: mapReducer
})

const store = createStore(
    rootReducer, compose(applyMiddleware(Thunk, logger))
) 

export default store
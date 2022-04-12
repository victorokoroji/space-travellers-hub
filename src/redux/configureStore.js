import { createStore, combineReducers, applyMiddleware } from 'redux'
import missionReducer from './missions/mission'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
const rootReducer = combineReducers({ missionReducer })
const store = createStore(rootReducer, applyMiddleware(logger, thunk))
export default store

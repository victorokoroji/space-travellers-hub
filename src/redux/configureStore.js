import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionReducer from './missions/mission';
import rocketReducer from './rockets/rockets';

const rootReducer = combineReducers({
  missionReducer,
  rockets: rocketReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export default store;

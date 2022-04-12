import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import missionReducer from "./missions/mission";
import { GET_MISSIONS } from "./missions/mission";

const logger = createLogger({
	predicate: (getState, action) => action.type !== GET_MISSIONS,
})
const rootReducer = combineReducers({ missionReducer })
const store = createStore(rootReducer, applyMiddleware(logger))
export default store
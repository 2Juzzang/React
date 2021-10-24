import { createStore, combineReducers, applyMiddleware } from "redux";
import post from "./modules/post";
import logger from "redux-logger";

const rootReducer = combineReducers({
  post,
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;

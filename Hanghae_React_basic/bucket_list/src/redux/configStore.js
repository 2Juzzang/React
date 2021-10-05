
import {createStore, combineReducers} from "redux";
import bucket from "./modules/bucket"

// 모든 리듀서들의 묶음
const rootReducer = combineReducers({bucket});

// 스토어
const store = createStore(rootReducer);

export default store;
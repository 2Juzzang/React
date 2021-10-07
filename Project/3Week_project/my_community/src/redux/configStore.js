import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import post from "./modules/post";
import thunk from "redux-thunk";

// 미들웨어 묶음
const middlewares = [thunk];
// thunk가 하나밖에 없긴하지만 여러개 있을 때 아래와 같이 spread 문법으로 써주면 된다.
const enhancer = applyMiddleware(...middlewares);
// 모든 리듀서들의 묶음
const rootReducer = combineReducers({post});

// 스토어 // optional한 것들의 집합 enhancer 추가 > 미들웨어 적용완료
const store = createStore(rootReducer, enhancer);

export default store;
// 유저이름 넣기
// 이름 바꾸기

const SET_NAME = "user/SET_NAME";

export const setName = (name) => {
    return {type: SET_NAME, name};
}
const initialState = {
    user_name: "",
}

export default function reducer(state = initialState, action = {})
{
    switch(action.type) {
        case "user/SET_NAME": {
            return {...state, user_name: action.name};
        }
        default:
            return state;
    }
}


const ADD_ANSWER = "quiz/ADD_ANSWER";

export const addAnswer = (user_answer) => {
    return {type: ADD_ANSWER, user_answer};
}

const initialState = {
    quiz_list : [
            {question: "이지훈은 27살이다.", answer: true},
            {question: "이지훈은 29살이다.", answer: true},
            {question: "이지훈은 28살이다.", answer: true},
            {question: "이지훈은 25살이다.", answer: true},
            {question: "이지훈은 30살이다.", answer: true},
    ],
    user_answer_list: [], 
}

export default function reducer(state = initialState, action={}){
    switch(action.type) {
        case "quiz/ADD_ANSWER":{
            const new_user_answer_list = [...state.user_answer_list, action.user_answer];
            return {...state, user_answer_list: new_user_answer_list};
        }
        default:
            return state;
    }
}
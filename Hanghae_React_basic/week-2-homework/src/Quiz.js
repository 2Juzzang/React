import React from "react";
import rtan from "./scc_img01.png"
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAnswer } from "./redux/modules/quiz";

const Quiz = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    
    const quiz_list = useSelector(state => state.quiz.quiz_list);
    const user_answer_list = useSelector(state => state.quiz.user_answer_list);
    //퀴즈 리스트
    // const quiz_list = [
    //     {question: "이지훈은 27살이다.", answer: true},
    //     {question: "이지훈은 29살이다.", answer: true},
    //     {question: "이지훈은 28살이다.", answer: true},
    //     {question: "이지훈은 25살이다.", answer: true},
    //     {question: "이지훈은 30살이다.", answer: true},
    // ];

    // const [user_answer_list, setAnswerList] = React.useState([]);

    const setAnswer = (user_answer) => {
        dispatch(addAnswer(user_answer));
    } 

    React.useEffect(() => {
        if(user_answer_list.length === quiz_list.length){

            // const _score =(100/quiz_list.length) * quiz_list.filter((q, idx) => {
            //     return q.answer === user_answer_list[idx];
            // }).length;
            // const score = Math.round(_score);
            // console.log(_score,score)
            history.push("/score");
            return;
        }
    }, [user_answer_list]);

    if(user_answer_list.length === quiz_list.length){
        return null;
    }
    return (
        <div>
            <p>{user_answer_list.length + 1}번 문제</p>
            <h3>{quiz_list[user_answer_list.length].question}</h3>
            <img src={rtan} />

            <div>
                <button onClick={() => {
                    setAnswer(true);
                }}style={{width:'100px', height:'50px', margin: '16px'}}>O</button>
                <button onClick={() => {
                    setAnswer(false);
                }}style={{width:'100px', height:'50px', margin: '16px'}}>X</button>
            </div>

        </div>
    )
}

export default Quiz;
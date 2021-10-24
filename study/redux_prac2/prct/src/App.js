import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, updatePost, deletePost } from "./redux/modules/post";
function App() {
  const dispatch = useDispatch();
  const [text, setText] = React.useState();
  const [update, setUpdate] = React.useState(false);

  const edit = () => {
    setUpdate(!update);
  };

  const postData = useSelector((state) => state.post.current);
  console.log("포스트데이터", postData);

  return (
    <div className="App">
      <h1>redux 2 use immer</h1>
      <input
        value={text}
        placeholder="post"
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          dispatch(addPost({ text: text, postId: Date.now() }));
          setText("");
        }}
      >
        제출
      </button>
      <div>
        결과 =
        {postData.map((a, i) => {
          console.log("에이", a.postId);
          return (
            <React.Fragment>
              {(
                postData.find((p) => p.postId === a.postId) ? update : false
              ) ? (
                <div>
                  <input
                    type="text"
                    value={text || ""}
                    onChange={(e) => {
                      setText(e.target.value);
                    }}
                  ></input>
                  <button
                    onClick={() => {
                      dispatch(updatePost({ text: text, postId: a.postId }));
                      setUpdate(!update);
                    }}
                  >
                    수정하기
                  </button>
                  <button>삭제</button>
                </div>
              ) : (
                <div>
                  {a.text} //
                  {a.postId}
                  <button
                    onClick={
                      edit
                      // dispatch(updatePost(a, i));
                    }
                  >
                    수정
                  </button>
                  <button
                    onClick={() => {
                      dispatch(deletePost(a.postId));
                    }}
                  >
                    삭제
                  </button>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createPost,
  loadPost,
  deletePost,
  editPost,
} from "./redux/modules/post";

function App() {
  // 리액트 상태관리
  const [post, setPost] = React.useState("");
  const dispatch = useDispatch();

  // 리덕스 구독
  const post_data = useSelector((state) => state.post.list);
  console.log("포스트데이터", post_data);

  //로드
  const w = { post: "aaaa" };
  React.useEffect(() => {
    console.log("로드2");
    dispatch(loadPost(w));
  }, []);
  // 포스트 입력값
  const typing = (e) => {
    setPost(e.target.value);
  };
  const write = () => {
    dispatch(createPost({ post: post, id: Date.now() }));
    setPost("");
  };
  const del = (e) => {
    return dispatch(deletePost(e));
  };
  // post_data.find((p) => p.id === a.id) ? modal : false
  //수정하기
  //수정 버튼을 누르기 전엔 보이지 않아야 하므로 false
  const [modal, setModal] = useState(false);
  const update = () => {
    console.log("수정하기가 true");
    setModal(true);
  };
  const updateSubmit = (id) => {
    dispatch(editPost({ id: id, post: post }));
    // console.log("수정버튼", { id: id, post: post });
    setModal(false);
  };
  return (
    <>
      <div>안녕하세요 리덕스를 통한 CRUD 구현을 할겁니다</div>
      {/* <div>들어가기전에 리액트로 바꿔보고 </div> */}
      <input onChange={typing}></input>
      <button
        onClick={() => {
          write();
        }}
      >
        버튼을 누르면 글을 등록합니다.
      </button>
      {post_data.map((a, i) => {
        return (
          <div key={i}>
            {
              (post_data.find((p) => p.id === a.id) ? modal : false) ? (
                <li style={{ marginLeft: "20px" }}>
                  <input
                    type="text"
                    value={post}
                    placeholder="수정할 내용을 입력하세요"
                    onChange={typing}
                  ></input>
                  <button
                    onClick={() => {
                      // e.preventDefault();
                      // e.stopPropagation();
                      console.log("수정제출", a.id);
                      updateSubmit(a.id, post);
                      console.log("수정본 제출 id", a.id);
                    }}
                  >
                    수정완료
                  </button>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      del(a.id);
                    }}
                  >
                    X
                  </button>
                </li>
              ) : (
                <li style={{ marginLeft: "20px" }}>
                  {a.post}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      update();
                      console.log("수정하기 클릭");
                    }}
                  >
                    수정하기
                  </button>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      del(a.id);
                    }}
                  >
                    X
                  </button>
                </li>
              )
              // {modal === true ? console.log("a") : console.log("ww")}
            }
          </div>
        );
      })}
    </>
  );
}

export default App;

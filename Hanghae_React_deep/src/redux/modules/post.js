import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore, storage } from "../../shared/firebase";
import "moment";
import moment from "moment";
import { history } from "../configureStore";
import { actionCreators as imageActions } from "./image";

//액션 타입
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const LOADING = "LOADING";
const DELETE_POST = "DELETE_POST";


//액션 크리에이터
const setPost = createAction(SET_POST, (post_list, paging) => ({ post_list, paging }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({
  post_id,
  post,
}));
const loading = createAction(LOADING, (is_loading) => ({is_loading}))
const deletePost = createAction(DELETE_POST, (post_id) => ({post_id}));

const initialState = {
  list: [],
  paging: {start: null, next: null, size: 3},
  is_loading: false,
};

const initialPost = {
  // id: 0,
  // user_info: {
  //   user_name: "mean0",
  //   user_profile: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
  // },
  image_url: "https://images.velog.io/images/2_juzzang/post/2ce983c1-59a5-4d62-9b2c-03a00886bbdd/0e591dbc52cf7697b6ecd779955f715b.jpg",
  contents: "",
  comment_cnt: 0,
  insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
};
const deletePostFB = (x) => {
  return function (dispatch, getState, {histroy}){
    //x가 없으면 종료
    if(!x){
      window.alert("삭제할 수 없는 게시글입니다");
      return;
    }
    const postDB = firestore.collection("post");

    //게시글 x를 선택해서 삭제
    postDB.doc(x).delete().then(res => {
      dispatch(deletePost(x));
      history.replace("/");
    }).catch(err => {
      console.log("에러", err)
    })
  }
};
const editPostFB = (post_id = null, post = {}) => {
  return function (dispatch, getState, { history }) {
    if (!post_id) {
      console.log("게시물 정보가 없어요!");
      return;
    }

    const _image = getState().image.preview;

    const _post_idx = getState().post.list.findIndex((p) => p.id === post_id);
    const _post = getState().post.list[_post_idx];

    console.log(_post);

    const postDB = firestore.collection("post");

    if (_image === _post.image_url) {
      postDB
        .doc(post_id)
        .update(post)
        .then((doc) => {
          dispatch(editPost(post_id, { ...post }));
          history.replace("/");
        });

      return;
    } else {
      const user_id = getState().user.user.uid;
      const _upload = storage
        .ref(`images/${user_id}_${new Date().getTime()}`)
        .putString(_image, "data_url");

      _upload.then((snapshot) => {
        snapshot.ref
          .getDownloadURL()
          .then((url) => {
            console.log(url);

            return url;
          })
          .then((url) => {
            postDB
              .doc(post_id)
              .update({ ...post, image_url: url })
              .then((doc) => {
                dispatch(editPost(post_id, { ...post, image_url: url }));
                history.replace("/");
              });
          })
          .catch((err) => {
            window.alert("앗! 이미지 업로드에 문제가 있어요!");
            console.log("앗! 이미지 업로드에 문제가 있어요!", err);
          });
      });
    }
  };
};

const addPostFB = (contents = "") => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection("post");

    const _user = getState().user.user;

    const user_info = {
      user_name: _user.user_name,
      user_id: _user.uid,
      user_profile: _user.user_profile,
    };

    const _post = {
      ...initialPost,
      contents: contents,
      insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
    };

    const _image = getState().image.preview;

    console.log(_image);
    console.log(typeof _image);

    const _upload = storage
      .ref(`images/${user_info.user_id}_${new Date().getTime()}`)
      .putString(_image, "data_url");

    _upload.then((snapshot) => {
      snapshot.ref
        .getDownloadURL()
        .then((url) => {
          console.log(url);

          return url;
        })
        .then((url) => {
          postDB
            .add({ ...user_info, ..._post, image_url: url })
            .then((doc) => {
              let post = { user_info, ..._post, id: doc.id, image_url: url };
              dispatch(addPost(post));
              history.replace("/");

              dispatch(imageActions.setPreview(null));
            })
            .catch((err) => {
              window.alert("앗! 포스트 작성에 문제가 있어요!");
              console.log("post 작성에 실패했어요!", err);
            });
        })
        .catch((err) => {
          window.alert("앗! 이미지 업로드에 문제가 있어요!");
          console.log("앗! 이미지 업로드에 문제가 있어요!", err);
        });
    });
  };
};

const getPostFB = (start = null, size = 3) => {
  return function (dispatch, getState, { history }) {

    let _paging = getState().post.paging;
    if(_paging.start && !_paging.next){
      return;
    }

    dispatch(loading(true));   

    const postDB = firestore.collection("post");
    
    let query = postDB.orderBy("insert_dt", "desc");

    if(start){
      query = query.startAt(start);
    }

    query
      .limit(size + 1)
      .get()
      .then((docs) => {
        let post_list = [];

        //페이징정보
        let paging = {
          start: docs.docs[0],
          next: docs.docs.length === size + 1? docs.docs[docs.docs.length -1] : null, 
          size: size, 
        }

      docs.forEach((doc) => {
        let _post = doc.data();

        // ['commenct_cnt', 'contents', ..]
        let post = Object.keys(_post).reduce(
          (acc, cur) => {
            if (cur.indexOf("user_") !== -1) {
              return {
                ...acc,
                user_info: { ...acc.user_info, [cur]: _post[cur] },
              };
            }
            return { ...acc, [cur]: _post[cur] };
          },
          { id: doc.id, user_info: {} }
        );

        post_list.push(post);
      });
      post_list.pop();

      console.log(post_list);

      dispatch(setPost(post_list, paging));
    });
  };
};

//댓글기능 1
//하나를 특정해서 가져오기 때문에 id 사용
const getOnePostFB = (id) => {
  return function(dispatch, getState, {history}){
    //파이어스토어 데이터 가져오기 postDetail copy
    const postDB = firestore.collection("post");
    postDB.doc(id).get().then(doc => {
      console.log("독", doc);
      console.log("독데이터", doc.data());
      let _post = doc.data();

      let post = Object.keys(_post).reduce(
          (acc, cur) => {
            if (cur.indexOf("user_") !== -1) {
              return {
                ...acc,
                user_info: { ...acc.user_info, [cur]: _post[cur] },
              };
            }
            return { ...acc, [cur]: _post[cur] };
          },
          { id: doc.id, user_info: {} }
        );
        // 게시글 하나의 정보, 페이징정보는 defalut값 (3단계에서 삭제)
        dispatch(setPost([post]));
    });
  }
}

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.post_list);
        //댓글 2, 위에서 포스트를 가져왔지만 글목록에서 중복이 생길 수 있으므로 reduce 사용해서 중복을 삭제 
        draft.list = draft.list.reduce((acc, cur) => {
          //중복된 값이 없을 때
          if(acc.findIndex(a => a.id === cur.id) === -1){
            return [...acc, cur];
          }else{
            //중복됐을 때
            acc[acc.findIndex((a) => a.id === cur.id)] = cur;
            return acc;
          }
        }, []);

        //댓글 3, 페이징이 없을 땐 건드리지 않고 페이징이 있을 때만 밑의 구문 실행
        //댓글 1의 페이징 default값 삭제
        if(action.payload.paging){
          draft.paging = action.payload.paging;
        }
        draft.is_loading = false;
      }),

    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),
    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);

        draft.list[idx] = { ...draft.list[idx], ...action.payload.post };
      }),
    [LOADING] : (state, action) => produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      }),
    [DELETE_POST] : (state, action) => produce(state, (draft) => { 
      let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);

      if(idx !== -1){
        // 배열에서 idx 위치의 요소 1개를 지웁니다.
        draft.list.splice(idx, 1);
      }
  })
 }, initialState
);

const actionCreators = {
  setPost,
  addPost,
  editPost,
  getPostFB,
  addPostFB,
  editPostFB,
  getOnePostFB,
  deletePostFB
};

export { actionCreators };

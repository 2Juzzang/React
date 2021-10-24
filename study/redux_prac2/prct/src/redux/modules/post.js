import { produce } from "immer";

const POST = "post/POST";
const LOAD = "post/LOAD";
const UPDATE = "post/UPDATE";
const DELETE = "DELETE";

export const addPost = (post) => ({
  type: POST,
  payload: post,
});
const loadPost = (post) => ({
  type: POST,
  payload: post,
});
export const updatePost = (post) => ({
  type: UPDATE,
  payload: post,
});
export const deletePost = (postId) => ({
  type: DELETE,
  payload: postId,
});

const initialState = {
  postList: [],
  current: [],
};

export default function postReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case POST: {
        console.log("포스트", action.payload);
        console.log("스테이트", state.postList);
        return { current: [...state.current, action.payload] };
      }
      case UPDATE: {
        console.log(state.current);
        console.log("업데이트", action.payload);
        console.log("아이디", action.id);
        const idx = state.current.findIndex(
          (a) => a.postId === action.payload.postId
        );
        console.log("ㅁ", idx);
        draft.current[idx] = action.payload;
      }
      case DELETE: {
        const newPost = state.current.filter(
          (a) => a.postId !== action.payload
        );
        return { current: newPost };
      }

      default:
        break;
    }
  });
}

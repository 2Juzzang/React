//초기값
const initailState = {
  list: [],
};

//액션
const CREATE = "post/CREATE";
const LOAD = "post/LOAD";
const DELETE = "post/DELETE";
const EDIT = "post/EDIT";

//액션크리에이터

export function createPost(post) {
  return { type: CREATE, post };
}
export function loadPost(post) {
  return { type: LOAD, post };
}
export function deletePost(id) {
  return { type: DELETE, id };
}
export function editPost(id) {
  console.log("디스패치 에딧", id);
  return { type: EDIT, id };
}

//리듀서
export default function reducer(state = initailState, action = {}) {
  switch (action.type) {
    case "post/CREATE": {
      return { list: [...state.list, action.post] };
    }
    case "post/LOAD": {
      return { list: [action.post] };
    }
    case "post/DELETE": {
      //   let idx = state.list.findIndex((d) => d.id === action.post);
      console.log("하", action);
      const arr = state.list.filter((d) => d.id !== action.id);
      return { list: arr };
    }
    case "post/EDIT": {
      console.log("스테이트 리스트", state.list);
      console.log("액션아이디", action.id.post);
      const list = state.list.map((item) => {
        if (item.id === action.id.id) {
          console.log("우석이", item);
          return { ...item, ...action.id };
        } else {
          console.log("빌런", action.id);
          return item;
        }
      });
      console.log("빌런우석", list);
      return { ...state, list: list };
    }

    default:
      return state;
  }
}

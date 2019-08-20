const initialState = {
  username: "",
  name: ""
};
//constants
const UPDATE_USERNAME = "UPDATE_USERNAME";
const UPDATE_NAME = "UPDATE_NAME";
//action creators
export function updateUsername(username) {
  return {
    type: UPDATE_USERNAME,
    payload: username
  };
}
export function updateName(name) {
  return {
    type: UPDATE_NAME,
    payload: name
  };
}
//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USERNAME:
      return {
        ...state,
        username: action.payload
      };
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
}

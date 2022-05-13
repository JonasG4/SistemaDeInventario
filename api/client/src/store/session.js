import { csrfFetch } from "./csrf";

const SET_USER = "auth/login/login";
const REMOVE_USER = "auth/logout";

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const removerUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const login = (user) => async (dispatch) => {
  const { email, password } = user;
  const response = await csrfFetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();
  dispatch(setUser(data.usuario));
  return response;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export const restoreUser = () => async (dispatch) => {
  const response = await csrfFetch("/api/auth");
  const data = await response.json();
  dispatch(setUser(data.usuario));
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch("api/auth", {
    method: "DELETE",
  });

  dispatch(removerUser);
  return response;
};

export default sessionReducer;

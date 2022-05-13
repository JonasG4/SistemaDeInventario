import { csrfFetch } from "./csrf";

const LOAD_ALL_USERS = "users/";
const SET_USER = "user/create";

export const loadUsers = (usuarios) => {
  return {
    type: LOAD_ALL_USERS,
    usuarios,
  };
};

export const setUser = (newUser) => {
  return {
    type: SET_USER,
    newUser,
  };
};

export const getAllUsers = () => async (dispatch) => {
  const response = await csrfFetch("/api/usuarios");

  if (response.ok) {
    const data = await response.json();
    dispatch(loadUsers(data.message));
  }
};

export const createUser = (newUser) => async (dispatch) => {
  const { nombre, apellido, email, password, confirmPassword, id_rol, estado } =
    newUser;
    console.log(newUser)
    const response = await csrfFetch("/api/usuarios", {
      method: "POST",
      body: JSON.stringify({
        nombre,
        apellido,
        email,
        password,
        confirmPassword,
        id_rol,
        estado,
      }),
    });
    
  const data = await response.json();
  dispatch(setUser(data));
  return response;
};

const initialState = {};

export default function usersReducer(state = initialState, action) {
  let updatedState = { ...state };

  switch (action.type) {
    case LOAD_ALL_USERS:
      const newState = {};
      action.usuarios.forEach((usuario) => {
        newState[usuario.id_usuario] = usuario;
      });
      return newState;
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

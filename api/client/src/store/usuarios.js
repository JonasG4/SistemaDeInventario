import { csrfFetch } from "./csrf";

const LOAD_ALL_USERS = "users/";
const LOAD_SINGLE_USER = "users/id";
const SET_USER = "user/create";

export const loadUsers = (usuarios) => {
  return {
    type: LOAD_ALL_USERS,
    usuarios,
  };
};

export const loadSingleUser = (usuario) => {
  return {
    type: LOAD_SINGLE_USER,
    usuario,
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

export const getSingleUser = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/usuarios/${userId}`);
  
  const data = await response.json();
  if (response.ok) {
    dispatch(loadSingleUser(data.usuario));
  }
  return response
};

export const createUser = (newUser) => async (dispatch) => {
  const { nombre, apellido, email, password, confirmPassword, id_rol, estado } =
    newUser;
  console.log(newUser);
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

export const deleteUsuario = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/usuarios/${id}`, {
    method: "DELETE",
  });

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
    case LOAD_SINGLE_USER:
      updatedState[action.usuario.id_usuario] = action.usuario;
      return updatedState;
    default:
      return state;
  }
}

import { csrfFetch } from "./csrf";

const LOAD_ALL_CATEGORIAS = "categorias/";

export const loadUsers = (categorias) => {
  return {
    type: LOAD_ALL_CATEGORIAS,
    categorias,
  };
};

export const getAllCategorias = () => async (dispatch) => {
  const response = await csrfFetch("/api/categorias");

  if (response.ok) {
    const data = await response.json();
    console.log(data.message)
    dispatch(loadUsers(data.message));
  }
};

const initialState = {};

export default function categoriasReducer(state = initialState, action) {
  let updatedState = { ...state };

  switch (action.type) {
    case LOAD_ALL_CATEGORIAS:
      const newState = {};
      action.categorias.forEach((categoria) => {
        newState[categoria.id_usuario] = categoria;
      });
      return newState;
    default:
      return state;
  }
}

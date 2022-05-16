import { csrfFetch } from "./csrf";
import { createSlice } from "@reduxjs/toolkit";

export const categoriaSlice = createSlice({
  name: "categorias",
  initialState: {
    listCategorias: [],
    singleCategoria: [],
  },
  reducers: {
    setCategorias: (state, action) => {
      state.listCategorias = action.payload;
    },
    setNewCategoria: (state, action) => {
      state.listCategorias.concat(action.payload);
    },
    setSingleCategoria: (state, action) => {
      state.singleCategoria = action.payload;
    },
    setModifyCategoria: (state, action) => {
      const index = state.listCategorias.findIndex(
        (categoria) => categoria.id_categoria === action.payload.id_categoria
      );
      state.listCategorias[index] = action.payload;
    },
    removeCategoria: (state, action) => {
      state.listCategorias = state.listCategorias.filter(
        (categoria) => categoria.id_categoria !== action.payload
      );
    },
  },
});
export const {
  setCategorias,
  setNewCategoria,
  setSingleCategoria,
  setModifyCategoria,
  removeCategoria,
} = categoriaSlice.actions;

export const getAllCategorias = () => async (dispatch) => {
  const response = await csrfFetch("/api/categorias");
  if (response.ok) {
    const data = await response.json();
    dispatch(setCategorias(data.message));
  }
};

export const getSingleCategoria = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/categorias/${id}`);

  const data = await response.json();
  if (response.ok) {
    dispatch(setSingleCategoria(data.categoria));
  }

  return data;
};

export const createCategoria = (categoria) => async (dispatch) => {
  const { nombre, descripcion } = categoria;
  const response = await csrfFetch("/api/categorias", {
    method: "POST",
    body: JSON.stringify({
      nombre,
      descripcion,
    }),
  });

  const data = await response.json();
  if (response.ok) {
    dispatch(setNewCategoria(data));
  }

  return data;
};

export const updateCategoria = (categoria) => async (dispatch) => {
  const { id_categoria, nombre, descripcion } = categoria;

  const response = csrfFetch(`/api/categorias/${id_categoria}`, {
    method: "PUT",
    body: JSON.stringify({
      nombre,
      descripcion,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setModifyCategoria(data.categoria));
  }
};

export const deleteCategoria = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/categorias/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();
  dispatch(removeCategoria(data.payload));

  return response;
};

export default categoriaSlice.reducer;

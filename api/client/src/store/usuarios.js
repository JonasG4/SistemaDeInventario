import { csrfFetch } from "./csrf";
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "usuarios",
  initialState: {
    list: [],
    singleUsuario: [],
  },
  reducers: {
    setUsuarios: (state, action) => {
      state.list = action.payload;
    },
    setNewUsuario: (state, action) => {
      state.list.concat(action.payload);
    },
    setSingleUsuario: (state, action) => {
      state.singleUsuario = action.payload;
    },
    setModifyUsuario: (state, action) => {
      const index = state.list.findIndex(
        (usuario) => usuario.id_usuario === action.payload.id_usuario
      );
      state.list[index] = action.payload;
    },
    removeUsuario: (state, action) => {
      state.list = state.list.filter(
        (usuario) => usuario.id_usuario !== action.payload
      );
    },
  },
});

export const {
  setUsuarios,
  setNewUsuario,
  removeUsuario,
  setModifyUsuario,
  setSingleUsuario,
} = userSlice.actions;

export const getAllUsers = () => async (dispatch) => {
  const response = await csrfFetch("/api/usuarios");

  if (response.ok) {
    const data = await response.json();
    dispatch(setUsuarios(data.message));
  }
};

export const getSingleUsuario = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/usuarios/${id}`);

  const data = await response.json();
  if (response.ok) {
    dispatch(setSingleUsuario(data.usuario));
  }
  return data;
};

export const createUsuario = (usuario) => async (dispatch) => {
  const { nombre, apellido, email, password, confirmPassword, id_rol, estado } =
    usuario;

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

  if (response.status === 201) {
    const data = await response.json();
    dispatch(setNewUsuario(data.usuario));
  }

  return response;
};

export const deleteUsuario = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/usuarios/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();
  dispatch(removeUsuario(data.payload));

  return response;
};

export const updateUsuario = (usuario) => async (dispatch) => {
  const {
    id_usuario,
    nombre,
    apellido,
    email,
    password,
    confirmPassword,
    id_rol,
    estado,
  } = usuario;

  const response = csrfFetch(`/api/usuarios/${id_usuario}`, {
    method: "PUT",
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

  if (response.ok) {
    const data = await response.json();
    dispatch(setModifyUsuario(data.usuario));
  }

  return response;
};

export default userSlice.reducer;

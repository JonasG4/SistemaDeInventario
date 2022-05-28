import { csrfFetch } from "./csrf";
import { createSlice } from "@reduxjs/toolkit";

export const sesionSlice = createSlice({
  name: "sesion",
  initialState: {
    usuario: null,
  },
  reducers: {
    setUsuario: (state, action) => {
      state.usuario = action.payload;
    },
    removerUser: (state, action) =>{
      state.usuario = null;
    }
  },
});

export const { setUsuario, removerUser } = sesionSlice.actions;

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
  dispatch(setUsuario(data.usuario));
  return response;
};

export const restoreUser = () => async (dispatch) => {
  const response = await csrfFetch("/api/auth");
  
  if(response.ok){
    const data = await response.json();
    dispatch(setUsuario(data));
  }
  
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch("api/auth/logout", {
    method: "DELETE",
  });

  dispatch(removerUser());
  return response;
};



export default sesionSlice.reducer;

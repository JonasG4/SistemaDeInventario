import { csrfFetch } from "./csrf";

const LOAD_ALL_PROVEEDORES = "proveedores/";
const SET_PROVEEDOR = "proveedores/create";
const DELETE_PROVEEDOR = "proveedores/delete";

export const loadProveedores = (proveedores) => {
  return {
    type: LOAD_ALL_PROVEEDORES,
    proveedores
  };
}

export const setProveedor = (newProveedor) => {
  return {
    type: SET_PROVEEDOR,
    newProveedor 
  }
}

export const deleteProveedor = () => {
  return {
    type: DELETE_PROVEEDOR,
  }
}

export const getAllProveedores = () => async(dispatch) => {
  const response = await csrfFetch("/api/proveedores");
  if(response.ok) {
    const data = await response.json();
    dispatch(loadProveedores(data.message));
  }
};

export const createProveedor = (newProveedor) => async(dispatch) => {
  const {nom_proveedor,tel_fijo,tel_personal} = newProveedor;
  const response = await csrfFetch("/api/proveedores", {
    method: "POST",
    body: JSON.stringify({
      nom_proveedor,
      tel_fijo,
      tel_personal
    })
  });

  const data = await response.json();
  dispatch(setProveedor(data));
  return response;
}

export const removeProveedor = (id) => async(dispatch) => {
  const response = await csrfFetch(`/api/proveedores/${id}`, {
    method: "DELETE"
  })
  return response;
}

const initialState = {};

export default function proveedorReducer(state = initialState, action) {
  let updateState = {...state};
  switch(action.type) {
    case LOAD_ALL_PROVEEDORES:
      const newState = {};
      action.proveedores.forEach((proveedor) => {
        newState[proveedor.id_proveedor] = proveedor;
      })
      return newState;
    case SET_PROVEEDOR:
      return {...state, proveedor: action.payload}    
    default:
      return state
  }
}
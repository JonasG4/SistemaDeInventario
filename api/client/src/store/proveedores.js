import { csrfFetch } from "./csrf";
import { createSlice } from "@reduxjs/toolkit";

export const supplierSlice = createSlice({
  name: "proveedores",
  initialState: {
    list: [],
    singleSupplier: []
  },
  reducers: {
    setSupplier: (state,action) => {
      state.list = action.payload;
    },
    setNewSupplier: (state,action) => {
      state.list.concat(action.payload);
    },
    removeSupplier: (state,action) => {
      state.list = state.list.filter(
        (supplier) => supplier.id_proveedor !== action.payload 
      );
    },
    setSingleSupplier: (state,action) => {
      state.singleSupplier = action.payload;
    },
    setModifySuppler: (state,action) => {
      const index = state.list.findIndex(
        (suppler) => suppler.id_proveedor === action.payload.id_proveedor 
      );
      state.list[index] = action.payload;
    }
  }
});

export const { setSupplier,setNewSupplier,removeSupplier,setSingleSupplier,setModifySuppler } = supplierSlice.actions;

export const getAllSuppliers = () => async(dispatch) => {
  const response = await csrfFetch("/api/proveedores");
  if(response.ok) {
    const data = await response.json();
    dispatch(setSupplier(data.message));
  }else {
    console.log('Hubo un error')
  }
}

export const createSupplier = (supplier) => async(dispatch) => {
  const {nom_proveedor, tel_fijo, tel_personal} = supplier;

  const response = await csrfFetch("/api/proveedores", {
    method: "POST",
    body: JSON.stringify({
      nom_proveedor,
      tel_fijo,
      tel_personal
    })
  });

  if(response.status === 201) {
    const data = await response.json();
    dispatch(setNewSupplier(data))
  }
}

export const deleteSupplier = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/proveedores/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();
  dispatch(removeSupplier(data.payload));

  return response;
}

export const getSingleSupplier = (id) => async(dispatch) => {
  const response = await csrfFetch(`/api/proveedores/${id}`);

  const data = await response.json();
  if(response.ok) {
    dispatch(setSingleSupplier(data))
  }

  return data;
}

export const updateSupplier = (supplier) => async (dispatch) => {
  const {
    id_proveedor,
    nom_proveedor,
    tel_fijo,
    tel_personal
  } = supplier;

  const response = csrfFetch(`/api/proveedores/${id_proveedor}`, {
    method: "PUT",
    body: JSON.stringify({
      nom_proveedor,
      tel_fijo,
      tel_personal
    })
  });

  if(response.ok) {
    const data = await response.json();
    dispatch(setModifySuppler(data));
  }
}


export default supplierSlice.reducer;

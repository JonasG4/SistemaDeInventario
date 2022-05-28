import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  materialList: [],
  singleMaterial: []
}

export const materialSlice = createSlice({
  name: 'material',
  initialState: initialState,
  reducers: {
    getMaterials: (state,action) => {
      state.materialList = action.payload;
    },
    setMaterial: (state,action) => {
      state.materialList = [...state.materialList, action.payload];
    },
    getSingleMaterial: (state,action) => {
      state.singleMaterial = action.payload;
    },
    setModifyMaterial: (state,action) => {
      const index = state.materialList.findIndex(material =>
        material.id_material === action.payload.id_material
      );
      state.materialList[index] = action.payload;
    },
    removeMaterial: (state,action) => {
      state.materialList = state.materialList.filter(material => material.id_material !== action.payload)
    }
  }
})

export const { getMaterials,setMaterial,getSingleMaterial,setModifyMaterial,removeMaterial } = materialSlice.actions;

export default materialSlice.reducer;
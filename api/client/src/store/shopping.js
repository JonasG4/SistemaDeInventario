import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listShopping: []
}

export const shoppingSlice = createSlice({
  name: 'shopping',
  initialState: initialState,
  reducers: {
    getShopping: (state,action) => {
      state.listShopping = action.payload;
    },
    setShopping: (state,action) => {
      state.listShopping = state.listShopping.concat(action.payload)
    },
    removeShopping: (state,action) => {
      state.listShopping = state.listShopping.filter(buy => buy.id_compra !== action.payload)
    },
    updateShopping: (state,action) => {
      const index = state.listShopping.findIndex(buy => buy.id_compra === action.payload.id_compra);
      state.listShopping[index] = action.payload;
    }
    
  }
})

export const { getShopping, setShopping, removeShopping,updateShopping } = shoppingSlice.actions;

export default shoppingSlice.reducer;
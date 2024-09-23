import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    }
  }
});

// this is the example of the return value of cartSlice
// {
//   actions: {
//     addItem
//   },
//   reducer
// }

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

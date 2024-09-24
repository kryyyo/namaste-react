import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {

      // Vanilla (older) Redux => Don't mutate state and returning was kind of mandatory
      // Old Implementation:
      // const newState = [...state];
      // newState.items.push(action.payload);
      // return newState;

      // Redux Toolkit (latest)
      // We HAVE to mutate the state (the old implementation is already abstracted by RTX)
      // Redux uses Immer package behind the scenes
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // Redux Toolkit (latest)
      // Either Mutate the existing state or return a new state

      // Mutating existing state
      // state.items.length = 0;

      // This will not work: state = { item: [] };
      // You must return the new state if you want to modify the state
      return { items: [] };
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

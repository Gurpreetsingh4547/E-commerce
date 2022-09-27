import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  cartProducts: [],
  isLoader: false,
};

/**
 * Cart Reducer To increment or decrement cart count
 */
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      state.value -= 1;
      state.cartProducts.splice(action.payload, true);
    },
    cartProducts: (state, action) => {
      state.cartProducts.push(action.payload);
    },
    showLoader: (state) => {
      state.isLoader = !state.isLoader;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment, decrement, cartProducts, showLoader
} = cartSlice.actions;

export default cartSlice.reducer;

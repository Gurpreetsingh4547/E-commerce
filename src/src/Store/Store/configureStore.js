import { configureStore } from "@reduxjs/toolkit";

// Reducers
import cartSliceReducer from "../ReducersAndActions";

/**
 * Redux Store
 */
export const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
  },
});

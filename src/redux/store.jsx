import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import productSlice from "./productSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
    product: productSlice,
  },
});

export default store;

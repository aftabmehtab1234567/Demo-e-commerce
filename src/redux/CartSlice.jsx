import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  searchTerm: "",  // Adding searchTerm to state
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) item.quantity += 1;
    },
    decrementQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

// Selector for calculating total revenue
export const getTotalRevenue = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity * parseFloat(item.price.replace("$", "")), 0);

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart, setSearchTerm } = CartSlice.actions;
export default CartSlice.reducer;

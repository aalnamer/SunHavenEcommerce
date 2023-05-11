import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIdx = state.cartItems.findIndex(
        (item) => item.product_id === action.payload.id
      );

      if (itemIdx >= 0) {
        state.cartItems[itemIdx].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
    },
    removeFromCart(state, action) {
      const itemIdx = state.cartItems.findIndex(
        (item) => item.product_id === action.payload.id
      );

      if (itemIdx >= 0) {
        state.cartItems[itemIdx].cartQuantity -= 1;
      } else {
        state.cartItems.splice(itemIdx, 1);
      }
    },
    updateCartItems(state, action) {
      state.cartItems = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, updateCartItems } = cartSlice.actions;

export default cartSlice.reducer;

export const selectCartItems = (state) => state.cart.cartItems;

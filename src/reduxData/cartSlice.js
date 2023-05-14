import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

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
        state.cartItems[itemIdx].cartQuantity += action.payload.quantity;
      } else {
        const tempProduct = {
          ...action.payload,
          cartQuantity: action.payload.quantity,
          cartId: generateCartId(),
        };
        state.cartItems.push(tempProduct);
      }
    },
    removeFromCart(state, action) {
      const cartId = action.payload;
      const itemIdx = state.cartItems.findIndex(
        (item) => item.cartId === cartId
      );

      if (itemIdx >= 0) {
        state.cartItems.splice(itemIdx, 1);
      }
    },

    updateCartItems(state, action) {
      state.cartItems = action.payload;
    },
  },
});
function generateCartId() {
  return uuidv4();
}

export const { addToCart, removeFromCart, updateCartItems } = cartSlice.actions;

export default cartSlice.reducer;

export const selectCartItems = (state) => state.cart.cartItems;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItems: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const itemId = action.payload.id;
      const itemExists = state.wishlistItems.some(
        (item) => item.product_id === itemId
      );

      if (!itemExists) {
        state.wishlistItems.push(action.payload);
      }
    },
    removeFromWishlist(state, action) {
      const itemId = action.payload;
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.product_id !== itemId && item.id !== itemId
      );
    },

    updateWishlistItems(state, action) {
      state.wishlistItems = action.payload;
    },
  },
});

export const { addToWishlist, removeFromWishlist, updateWishlistItems } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;

export const selectWishlistItems = (state) => state.wishlist.wishlistItems;

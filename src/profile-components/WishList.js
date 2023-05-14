import React, { useState, useEffect } from "react";
import "./Wishlist.css";
import { onAuthStateChanged } from "../firebase";
import { database } from "../firebase";
import { useSelector } from "react-redux";
import userSlice, { selectUser } from "../reduxData/userSlice";
import { selectWishlistItems } from "../reduxData/wishlistSlice";
import Product from "../homePageComponents/Product";

function WishList() {
  const user = useSelector(selectUser);
  const wishlist = useSelector(selectWishlistItems);

  return (
    <div className="wishlist-items">
      <h2>Wish List</h2>
      <ul>
        {wishlist?.map((item) => {
          return (
            <Product
              wishlist={true}
              productData={item}
              key={item.wishlist_id}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default WishList;

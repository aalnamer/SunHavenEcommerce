import React, { useEffect, useState } from "react";
import "./Product.css";
import axios from "axios";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../reduxData/userSlice";
import SunHavenApi from "../backendApi";
import { addToCart, updateCartItems } from "../reduxData/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
  selectWishlistItems,
  updateWishlistItems,
} from "../reduxData/wishlistSlice";

function Product({ wishlist, productData, category, sort }) {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlistItems = useSelector(selectWishlistItems);

  const [products, setProducts] = useState([]);

  async function handleAddToCart(id) {
    if (localStorage.getItem("username")) {
      const username = localStorage.getItem("username");
      const data = {
        username: username,
        quantity: 1,
        size: "S",
        color: "Black",
        productId: id,
      };
      const req = await SunHavenApi.addToCart(data);
      const cart = await SunHavenApi.getCart(localStorage.getItem("username"));
      dispatch(updateCartItems([...cart.products]));
    } else {
      const req = await SunHavenApi.getProduct(id);
      const data = {
        quantity: 1,
        size: "S",
        color: "Black",
      };
      dispatch(addToCart({ ...req.products, ...data }));
    }
    navigate("/cart");
  }

  async function handleAddToWishlist(id) {
    if (localStorage.getItem("username")) {
      const username = localStorage.getItem("username");

      const data = {
        username: username,
        itemId: id,
      };
      const req = await SunHavenApi.addToWishList(data);
      let wishlistData = await SunHavenApi.getWishList(username);
      dispatch(updateWishlistItems([...wishlistData.wishlistItems]));
    } else {
      const req = await SunHavenApi.getProduct(id);
      dispatch(addToWishlist(req.products));
    }
  }

  async function handleRemoveWishlist(id) {
    let newId = id;
    if (localStorage.getItem("username")) {
      if (!wishlist) {
        const itemToRemove = wishlistItems.find(
          (item) => item.product_id === id
        );
        newId = itemToRemove.wishlist_id;
      }
      const username = localStorage.getItem("username");
      const data = {
        username: username,
        wishlistId: newId,
      };
      const req = await SunHavenApi.removeFromWishList(data);

      let wishlistData = await SunHavenApi.getWishList(username);
      dispatch(updateWishlistItems([...wishlistData.wishlistItems]));
    } else {
      dispatch(removeFromWishlist(id));
    }
  }

  useEffect(() => {
    async function getData() {
      if (category) {
        const req = await SunHavenApi.getProductByCategory(category);
        let sortedProducts = req.products;
        if (sort === "PriceAsc") {
          sortedProducts = req.products.sort((a, b) => a.price - b.price);
        } else if (sort === "PriceDesc") {
          sortedProducts = req.products.sort((a, b) => b.price - a.price);
        }
        setProducts(sortedProducts);
      }
      if (wishlist) {
        setProducts(productData);
      }
    }
    getData();
  }, [category, sort]);

  return (
    <>
      {!wishlist ? (
        products?.map((item) => (
          <div key={item.id} className="product-container-each">
            <img src={item.imgUrl} />
            <div className="info-product-idv">
              <div className="product-icon shopping-cart-icon-idv">
                <ShoppingCartOutlinedIcon
                  onClick={() => handleAddToCart(item.id)}
                />
              </div>
              <div
                onClick={() => navigate(`/product-list/${item.id}`)}
                className="product-icon search-icon-idv"
              >
                <SearchIcon />
              </div>
              <div className="product-icon like-product-icon">
                {localStorage.getItem("username") ? (
                  wishlistItems.find(
                    (wishlistItem) => wishlistItem.product_id === item.id
                  ) ? (
                    <FavoriteIcon
                      style={{ color: "red" }}
                      onClick={() => handleRemoveWishlist(item.id)}
                    />
                  ) : (
                    <FavoriteBorderOutlinedIcon
                      onClick={() => handleAddToWishlist(item.id)}
                    />
                  )
                ) : wishlistItems.find(
                    (wishlistItem) => wishlistItem.id === item.id
                  ) ? (
                  <FavoriteIcon
                    style={{ color: "red" }}
                    onClick={() => handleRemoveWishlist(item.id)}
                  />
                ) : (
                  <FavoriteBorderOutlinedIcon
                    onClick={() => handleAddToWishlist(item.id)}
                  />
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div key={productData.wishlist_id} className="product-container-each">
          <img src={productData.img_url} />
          <div className="info-product-idv">
            <div className="product-icon shopping-cart-icon-idv">
              <ShoppingCartOutlinedIcon
                onClick={() => handleAddToCart(productData.product_id)}
              />
            </div>
            <div
              onClick={() =>
                navigate(`/product-list/${productData.product_id}`)
              }
              className="product-icon search-icon-idv"
            >
              <SearchIcon />
            </div>
            <div className="product-icon like-product-icon">
              <FavoriteIcon
                style={{ color: "red" }}
                onClick={() => handleRemoveWishlist(productData.wishlist_id)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;

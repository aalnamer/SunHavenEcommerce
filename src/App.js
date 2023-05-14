import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Nav from "./nav/Nav";
import Announcement from "./homePageComponents/Announcement";
import Footer from "./homePageComponents/Footer";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import CartPage from "./pages/CartPage";
import React, { useEffect } from "react";
import { login, selectUser } from "./reduxData/userSlice";
import ProfilePage from "./pages/ProfilePage";
import { useDispatch, useSelector } from "react-redux";
import SunHavenApi from "./backendApi";
import { selectCartItems, updateCartItems } from "./reduxData/cartSlice";
import {
  selectWishlistItems,
  updateWishlistItems,
} from "./reduxData/wishlistSlice";
import SuccessPage from "./pages/SuccessPage";
import OrderListPage from "./pages/OrderListPage";

function App() {
  const user = useSelector(selectUser);

  const cart = useSelector(selectCartItems);
  const wishlist = useSelector(selectWishlistItems);

  const dispatch = useDispatch();

  // get user data
  useEffect(() => {
    async function getUserData() {
      if (localStorage.getItem("token")) {
        const username = localStorage.getItem("username");
        let user = await SunHavenApi.getCurrentUser(username);
        console.log(user);

        dispatch(login(user.user));
        if (user.user.cartProducts) {
          dispatch(updateCartItems([...user.user.cartProducts]));
        }
      }
    }
    getUserData();
  }, [localStorage.getItem("username")]);

  // get cart data

  useEffect(() => {
    async function getCartData() {
      if (localStorage.getItem("username")) {
        let username = localStorage.getItem("username");
        console.log(username);
        let cart = await SunHavenApi.getCart(username);

        dispatch(updateCartItems([...cart.products]));
      }
    }
    getCartData();
  }, [localStorage.getItem("username")]);

  // get wishlist data
  useEffect(() => {
    async function getWishListData() {
      if (localStorage.getItem("username")) {
        let username = localStorage.getItem("username");
        let wishlist = await SunHavenApi.getWishList(username);
        dispatch(updateWishlistItems([...wishlist.wishlistItems]));
      }
    }
    getWishListData();
  }, [localStorage.getItem("username")]);

  return (
    <div className="App">
      <BrowserRouter>
        <Announcement />
        <Nav loggedIn={user} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            exact
            path="/product-list/men"
            element={<ProductListPage title={"Men"} category={"shirts"} />}
          />
          <Route exact path="/product-list/:id" element={<ProductPage />} />
          <Route
            exact
            path="/product-list/women"
            element={<ProductListPage title={"Women"} category={"pants"} />}
          />
          <Route
            exact
            path="/product-list/accessories"
            element={
              <ProductListPage title={"Accessories"} category={"accessories"} />
            }
          />

          <Route exact path="/product" element={<ProductPage />} />
          <Route exact path="/register" element={<RegisterPage />} />

          <Route exact path="/profile" element={<ProfilePage />} />
          <Route exact path="/cart" element={<CartPage />} />
          <Route exact path="/success" element={<SuccessPage />} />
          <Route exact path="/order/:id" element={<OrderListPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

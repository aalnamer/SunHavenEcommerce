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

function App() {
  const user = useSelector(selectUser);
  const cart = useSelector(selectCartItems);

  const dispatch = useDispatch();

  // get user data
  useEffect(() => {
    async function getUserData() {
      console.log("running user");
      if (localStorage.getItem("token")) {
        const username = localStorage.getItem("username");
        let user = await SunHavenApi.getCurrentUser(username);
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
      console.log("running cart");
      if (localStorage.getItem("username")) {
        let username = localStorage.getItem("username");
        let cart = await SunHavenApi.getCart(username);
        console.log(cart);
        dispatch(updateCartItems([...cart.products]));
      }
    }
    getCartData();
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

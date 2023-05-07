import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

import Nav from "./nav/Nav";
import Announcement from "./homePageComponents/Announcement";

import Footer from "./homePageComponents/Footer";
import ProductListPage from "./pages/ProductListPage";

import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Announcement />
        <Nav />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            exact
            path="/product-list/men"
            element={
              <ProductListPage
                title={"Men"}
                url={
                  "https://fakestoreapi.com/products/category/men%27s%20clothing"
                }
              />
            }
          />
          <Route exact path="/product-list/:id" element={<ProductPage />} />
          <Route
            exact
            path="/product-list/women"
            element={
              <ProductListPage
                title={"Women"}
                url={
                  "https://fakestoreapi.com/products/category/women%27s%20clothing"
                }
              />
            }
          />
          <Route
            exact
            path="/product-list/accessories"
            element={
              <ProductListPage
                title={"Accessories"}
                url={"https://fakestoreapi.com/products/category/jewelery"}
              />
            }
          />

          <Route exact path="/product" element={<ProductPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cart from "./cart/Cart";
import Nav from "./nav/Nav";
import Announcement from "./homePageComponents/Announcement";
import NewsLetter from "./homePageComponents/NewsLetter";
import Footer from "./homePageComponents/Footer";
import ProductListPage from "./pages/ProductListPage";

import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Announcement />
        <Nav />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/product-list" element={<ProductListPage />} />
          <Route exact path="/product" element={<ProductPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/login" element={<LoginPage />} />
        </Routes>
        <NewsLetter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

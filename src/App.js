import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cart from "./cart/Cart";
import Nav from "./nav/Nav";
import Announcement from "./components/Announcement";
import Slider from "./components/Slider";
import Categories from "./components/Categories";
import Product from "./components/Product";
import Products from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Announcement />
        <Nav />
        <Slider />
        <Categories />
        <Products />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

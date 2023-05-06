import React from "react";
import "./HomePage.css";
import products from "../api/products";
import Announcement from "../homePageComponents/Announcement";
import Nav from "../nav/Nav";
import Slider from "../homePageComponents/Slider";
import Categories from "../homePageComponents/Categories";
import Products from "../homePageComponents/ProductList";
import NewsLetter from "../homePageComponents/NewsLetter";
import Footer from "../homePageComponents/Footer";

function HomePage() {
  return (
    <div className="home-page-container">
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
    </div>
  );
}

export default HomePage;

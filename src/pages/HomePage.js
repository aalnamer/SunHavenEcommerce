import React from "react";
import "./HomePage.css";
import products from "../api/products";

function HomePage() {
  return (
    <div className="home-page-container">
      {/* <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id} className="product-container">
          <img src={product.imageUrl} alt={product.name} />

          {product.name}
        </div>
      ))} */}
    </div>
  );
}

export default HomePage;

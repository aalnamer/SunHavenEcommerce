import React from "react";
import "./ProductListPage.css";

import Products from "../homePageComponents/ProductList";

function ProductListPage() {
  return (
    <div className="product-list-page-container">
      <h1>Shirts</h1>
      <div className="filter-container">
        <div className="filter-item">
          <span>Filter Products:</span>
          <select>
            <option selected disabled>
              Color
            </option>
            <option>Black</option>
            <option>White</option>
            <option>Red</option>
            <option>Blue</option>
          </select>
          <select>
            <option selected disabled>
              Size
            </option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>Extra Large</option>
          </select>
        </div>
        <div className="filter-item">
          <span>Sort Products:</span>
          <select>
            <option>Newest</option>
            <option>Price(asc)</option>
            <option>Price(dec)</option>
          </select>
        </div>
      </div>
      <div className="product-list-page-products">
        <Products />
      </div>
    </div>
  );
}

export default ProductListPage;

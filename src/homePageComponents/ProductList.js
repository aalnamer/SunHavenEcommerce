import React from "react";
import "./ProductList.css";
import products from "../api/products";
import Product from "./Product";
import { categoryProducts } from "../api/categoryProducts";

function Products() {
  return (
    <div className="product-container-list">
      <Product category={"shirts"} />
      <Product category={"pants"} />
      <Product category={"accessories"} />
    </div>
  );
}

export default Products;

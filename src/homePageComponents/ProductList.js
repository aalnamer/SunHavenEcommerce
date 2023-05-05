import React from "react";
import "./ProductList.css";
import products from "../api/products";
import Product from "./Product";
import { categoryProducts } from "../api/categoryProducts";

function Products() {
  return (
    <div className="product-container-list">
      {categoryProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Products;

import React from "react";
import "./ProductList.css";
import products from "../api/products";
import Product from "./Product";
import { categoryProducts } from "../api/categoryProducts";

function Products() {
  return (
    <div className="product-container-list">
      <Product url={"https://fakestoreapi.com/products/category/jewelery"} />
      <Product
        url={"https://fakestoreapi.com/products/category/men%27s%20clothing"}
      />
      <Product
        url={"https://fakestoreapi.com/products/category/women%27s%20clothing"}
      />
    </div>
  );
}

export default Products;

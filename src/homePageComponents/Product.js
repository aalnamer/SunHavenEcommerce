import React from "react";
import "./Product.css";
import products from "../api/products";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function Product({ item }) {
  return (
    <div className="product-container-each">
      <img src={item.img} />
      <div className="info-product-idv">
        <div className="product-icon shopping-cart-icon-idv">
          <ShoppingCartOutlinedIcon />
        </div>
        <div className="product-icon search-icon-idv">
          <SearchIcon />
        </div>
        <div className="product-icon like-product-icon">
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Product;

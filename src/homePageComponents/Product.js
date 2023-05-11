import React, { useEffect, useState } from "react";
import "./Product.css";
import axios from "axios";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectUser } from "../reduxData/userSlice";
import SunHavenApi from "../backendApi";
import { updateCartItems } from "../reduxData/cartSlice";

function Product({ category, sort }) {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  async function handleAddToCart(id) {
    const username = localStorage.getItem("username");
    const data = {
      username: username,
      quantity: 1,
      size: "S",
      color: "Black",
      productId: id,
    };
    const req = await SunHavenApi.addToCart(data);
    const cart = await SunHavenApi.getCart(localStorage.getItem("username"));
    dispatch(updateCartItems([...cart.products]));
    navigate("/cart");
  }

  useEffect(() => {
    async function getData() {
      const req = await SunHavenApi.getProductByCategory(category);
      let sortedProducts = req.products;
      if (sort === "PriceAsc") {
        sortedProducts = req.products.sort((a, b) => a.price - b.price);
      } else if (sort === "PriceDesc") {
        sortedProducts = req.products.sort((a, b) => b.price - a.price);
      }
      setProducts(sortedProducts);
    }
    getData();
  }, [category, sort]);

  return (
    <>
      {products?.map((item) => (
        <div key={item.id} className="product-container-each">
          <img src={item.imgUrl} />
          <div className="info-product-idv">
            <div className="product-icon shopping-cart-icon-idv">
              <ShoppingCartOutlinedIcon
                onClick={() => handleAddToCart(item.id)}
              />
            </div>
            <div
              onClick={() => navigate(`/product-list/${item.id}`)}
              className="product-icon search-icon-idv"
            >
              <SearchIcon />
            </div>
            <div className="product-icon like-product-icon">
              <FavoriteBorderOutlinedIcon />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Product;

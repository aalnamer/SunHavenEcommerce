import React, { useEffect, useState } from "react";
import "./Product.css";
import axios from "axios";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useNavigate, useParams } from "react-router-dom";

function Product({ url }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      const req = await axios.get(url);
      setProducts(req.data);
    }
    getData();
  }, [url]);

  return (
    <>
      {products?.map((item) => (
        <div className="product-container-each">
          <img src={item.image} />
          <div className="info-product-idv">
            <div className="product-icon shopping-cart-icon-idv">
              <ShoppingCartOutlinedIcon />
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

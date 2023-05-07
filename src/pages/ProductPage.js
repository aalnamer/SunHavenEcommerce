import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductPage() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      const req = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log(req);
      setProduct(req.data);
    }
    getData();
  }, [id]);
  console.log(product);

  return (
    <>
      <div className="product-page-container">
        <div className="idv-product">
          <div className="img-container-product-page">
            <img src={product.image} />
          </div>
          <div className="product-page-info-container">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <span>${product.price}</span>
            <div className="product-page-filter-container">
              <div className="product-page-filter-item">
                <span>
                  Color
                  <div style={{ backgroundColor: "black" }}></div>
                  <div style={{ backgroundColor: "Red" }}></div>
                  <div style={{ backgroundColor: "Blue" }}></div>
                </span>
              </div>
              <div className="product-page-filter-item sizes">
                <span>
                  Size
                  <select>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                </span>
              </div>
            </div>
            <div className="purchase-container">
              <div className="quantity-product-page">
                <RemoveIcon />
                <span>1</span>
                <AddIcon />
              </div>
              <button>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;

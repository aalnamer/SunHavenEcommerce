import React from "react";
import "./ProductPage.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function ProductPage() {
  return (
    <div className="product-page-container">
      <div className="idv-product">
        <div className="img-container-product-page">
          <img src="https://i.imgur.com/iv7GgVt.png" />
        </div>
        <div className="product-page-info-container">
          <h1>Sun Glasses</h1>
          <p>
            Introducing our latest sunglasses - a sleek and stylish accessory
            that offers superior eye protection. With a minimalist black frame
            and polarized lenses, these sunglasses are both functional and
            fashionable.
          </p>
          <span>$49.99</span>
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
  );
}

export default ProductPage;

import React from "react";
import "./Categories.css";
import { categories } from "../api/categories";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();
  return (
    <div className="category-container">
      {categories.map((item) => (
        <div key={item.id} className="category-item">
          <img src={item.img} />
          <div className="info-container-category">
            <h1 className="title">{item.title}</h1>
            <button onClick={() => navigate(`/product-list/${item.title}`)}>
              Shop Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;

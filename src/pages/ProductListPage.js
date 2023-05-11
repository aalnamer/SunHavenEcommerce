import React, { useEffect, useState } from "react";
import "./ProductListPage.css";
import Products from "../homePageComponents/ProductList";
import Product from "../homePageComponents/Product";

function ProductListPage({ title, category }) {
  const [sortOption, setSortOption] = useState(false);
  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);
  };
  return (
    <div className="product-list-page-container">
      <h1>{title}</h1>
      <div className="filter-container">
        <div className="filter-item">
          <span>Sort Products:</span>
          <select value={sortOption} onChange={handleSortChange}>
            <option value="Newest">Newest</option>
            <option value="PriceAsc">Price(asc)</option>
            <option value="PriceDesc">Price(desc)</option>
          </select>
        </div>
      </div>

      <div className="product-list-page-products">
        <Product category={category} sort={sortOption} />
      </div>
    </div>
  );
}

export default ProductListPage;

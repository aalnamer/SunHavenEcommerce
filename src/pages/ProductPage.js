import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";

import SunHavenApi from "../backendApi";
import {
  addToCart,
  selectCartItems,
  updateCartItems,
} from "../reduxData/cartSlice";

function ProductPage() {
  const [itemAdded, setItemAdded] = useState(false);
  const cart = useSelector(selectCartItems);
  console.log(cart);
  const [size, setSize] = useState("S");
  const [color, setColor] = useState("black");
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      const req = await SunHavenApi.getProduct(id);
      setProduct(req.products);
    }
    getData();
  }, [id]);

  async function handleAddToCart() {
    const username = localStorage.getItem("username");
    const data = {
      username: username,
      quantity: quantity,
      size: size,
      color: color,
      productId: product.id,
    };
    const req = await SunHavenApi.addToCart(data);
    const cart = await SunHavenApi.getCart(localStorage.getItem("username"));
    dispatch(updateCartItems([...cart.products]));
    toast.success("Item added to cart!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
  function handleSizeChange(event) {
    const selectedSize = event.target.value;
    setSize(selectedSize);
  }
  function handleColorChange(event) {
    const selectedColor = event.target.style.backgroundColor;
    setColor(selectedColor);
  }
  function handleQuantityChange(event) {
    const selectedQuantity = parseInt(event.target.value);
    setQuantity(selectedQuantity);
  }

  return (
    <>
      <div className="product-page-container">
        <ToastContainer />
        <div className="idv-product">
          <div className="img-container-product-page">
            <img src={product.imgUrl} />
          </div>
          <div className="product-page-info-container">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <span>${product.price}</span>
            <div className="product-page-filter-container">
              <div className="product-page-filter-item">
                <span>
                  Color
                  <div
                    style={{ backgroundColor: "black" }}
                    onClick={handleColorChange}
                  ></div>
                  <div
                    style={{ backgroundColor: "Red" }}
                    onClick={handleColorChange}
                  ></div>
                  <div
                    style={{ backgroundColor: "Blue" }}
                    onClick={handleColorChange}
                  ></div>
                </span>
              </div>
              <div className="product-page-filter-item">
                <span>
                  Quantity
                  <select value={quantity} onChange={handleQuantityChange}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    {/* Add more quantity options as needed */}
                  </select>
                </span>
              </div>
              <div className="product-page-filter-item sizes">
                <span>
                  Size
                  <select onChange={handleSizeChange}>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                </span>
              </div>
            </div>
            <div className="purchase-container">
              <button onClick={handleAddToCart}>Add To Cart</button>
              {itemAdded && <button>Remove From Cart</button>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;

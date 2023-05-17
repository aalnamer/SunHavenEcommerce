import React, { useState } from "react";
import "./CartPage.css";
import CartProduct from "../cartComponent/CartProduct";
import { useSelector } from "react-redux";
import { selectCartItems } from "../reduxData/cartSlice";
import { selectUser } from "../reduxData/userSlice";
import SunHavenApi from "../backendApi";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const cartItems = useSelector(selectCartItems);
  const [showPayment, setShowPayment] = useState(false);
  const navigate = useNavigate();

  const subtotal = cartItems
    ?.reduce((total, item) => {
      const itemPrice = item.price || 0;
      const itemQuantity = item.quantity || item.cartQuantity || 0;
      return total + itemPrice * itemQuantity;
    }, 0)
    .toFixed(2);

  const priceForStripe = subtotal * 100;

  async function handleCheckout() {
    try {
      let res = await SunHavenApi.payment(cartItems);

      window.location.href = res.url;
    } catch (error) {
      console.log(error);
    }
  }

  const shippingCost = (subtotal / 30).toFixed(2);
  return (
    <div className="cart-page-container">
      <div className="cart-page-content">
        <h1>Your Bag</h1>
        <div className="top-section">
          <button style={{ fontSize: "24px", backgroundColor: "transparent" }}>
            Continue Shopping
          </button>
          <div className="top-content">
            <span>Shopping Bag({cartItems.length})</span>
            <span>Wish-List</span>
          </div>

          <button
            onClick={handleCheckout}
            style={{
              border: "none",
              fontSize: "24px",
              backgroundColor: "black",
              color: "white",
              cursor: localStorage.getItem("username") ? "pointer" : "default",
              fontSize: "24px",
            }}
            disabled={!localStorage.getItem("username")}
          >
            {" "}
            {localStorage.getItem("username")
              ? "Checkout Now"
              : "Please login first"}
          </button>
        </div>
        <div className="bot-section">
          <div className="bot-product-info-content">
            <CartProduct />
          </div>
          <div className="bot-summary-content">
            <h1>Order Summary </h1>
            <div className="summary-item">
              <span>SubTotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="summary-item">
              <span>Shipping</span>
              <span>${shippingCost}</span>
            </div>
            <div className="summary-item">
              <span style={{ fontWeight: "500", fontSize: "20px" }}>
                <b>Total:</b>
              </span>
              <span>${(+subtotal + +shippingCost).toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              style={{
                cursor: localStorage.getItem("username")
                  ? "pointer"
                  : "default",
                fontSize: "24px",
              }}
              disabled={!localStorage.getItem("username")}
            >
              {" "}
              {localStorage.getItem("username")
                ? "Checkout Now"
                : "Please login first"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;

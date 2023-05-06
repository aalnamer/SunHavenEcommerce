import React from "react";
import "./CartPage.css";
import CartProduct from "../cartComponent/CartProduct";

function CartPage() {
  return (
    <div className="cart-page-container">
      <div className="cart-page-content">
        <h1>Your Bag</h1>
        <div className="top-section">
          <button style={{ backgroundColor: "transparent" }}>
            Continue Shopping
          </button>
          <div className="top-content">
            <span>Shopping Bag(4)</span>
            <span>Wish-List</span>
          </div>
          <button
            style={{ border: "none", backgroundColor: "black", color: "white" }}
          >
            Checkout Now
          </button>
        </div>
        <div className="bot-section">
          <div className="bot-product-info-content">
            <CartProduct />
            <CartProduct />
          </div>
          <div className="bot-summary-content">
            <h1>Order Summary </h1>
            <div className="summary-item">
              <span>SubTotal</span>
              <span>$75.00</span>
            </div>
            <div className="summary-item">
              <span>Shipping</span>
              <span>$15.00</span>
            </div>
            <div className="summary-item">
              <span>Discount</span>
              <span>-$5.00</span>
            </div>
            <div className="summary-item">
              <span style={{ fontWeight: "500", fontSize: "20px" }}>
                <b>Total:</b>
              </span>
              <span>$70.00</span>
            </div>
            <button> Checkout Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;

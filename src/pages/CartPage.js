import React from "react";
import "./CartPage.css";
import CartProduct from "../cartComponent/CartProduct";
import { useSelector } from "react-redux";
import { selectCartItems } from "../reduxData/cartSlice";
import { selectUser } from "../reduxData/userSlice";

function CartPage() {
  const cartItems = useSelector(selectCartItems);
  const subtotal = cartItems
    ?.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0)
    .toFixed(2);

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
            style={{
              border: "none",
              fontSize: "24px",
              backgroundColor: "black",
              color: "white",
            }}
          >
            Checkout Now
          </button>
        </div>
        <div className="bot-section">
          <div className="bot-product-info-content">
            <CartProduct cart={cartItems} />
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
            <button style={{ cursor: "pointer", fontSize: "24px" }}>
              {" "}
              Checkout Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;

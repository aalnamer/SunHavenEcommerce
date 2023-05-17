import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../reduxData/userSlice";
import SunHavenApi from "../backendApi";
import {
  removeFromCart,
  selectCartItems,
  updateCartItems,
} from "../reduxData/cartSlice";
import { ToastContainer, toast } from "react-toastify";

function CartProduct() {
  const user = useSelector(selectUser);
  const cart = useSelector(selectCartItems);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleRemoveFromCart(cartId) {
    if (localStorage.getItem("username")) {
      const req = await SunHavenApi.removeFromCart(cartId);
      let cartItems = await SunHavenApi.getCart(
        localStorage.getItem("username")
      );
      dispatch(updateCartItems([...cartItems.products]));
    }
    dispatch(removeFromCart(cartId));
    toast("Item removed from cart", {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: "toast-error",
    });
  }

  return (
    <>
      <ToastContainer />
      {cart?.map((item) => (
        <>
          <div key={item.cart_id} className="cart-product">
            <div className="idv-product-info-container">
              <img
                onClick={() =>
                  navigate(`/product-list/${item.product_id || item.id}`)
                }
                style={{ cursor: "pointer" }}
                src={item.img_url || item.imgUrl}
              />
              <div>
                <span>
                  <b>Product: </b> {item.title}
                </span>
                <span>
                  <b>ID:</b> {item.product_id || item.id}
                </span>
                <span
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: item.color,
                  }}
                ></span>
                <span>
                  <b>Size</b> {item.size}
                </span>
              </div>
            </div>
            <div className="idv-price-info-container">
              <div>
                <div className="cart-qunatity-container">
                  <label htmlFor="cart-product-quantity">
                    Quantity: {item.quantity}
                  </label>
                  <button
                    onClick={() =>
                      handleRemoveFromCart(item.cart_id || item.cartId)
                    }
                  >
                    Remove from Cart
                  </button>
                </div>
                <div className="cart-price-container">${item.price}</div>
              </div>
            </div>
          </div>
          <hr></hr>
        </>
      ))}
    </>
  );
}

export default CartProduct;

import React, { useEffect, useState } from "react";
import "./SuccessPage.css";
import SunHavenApi from "../backendApi";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, updateCartItems } from "../reduxData/cartSlice";
import { useNavigate } from "react-router-dom";

function SuccessPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function getItems() {
      try {
        if (localStorage.getItem("username")) {
          console.log("running");
          let username = localStorage.getItem("username");
          let cart = await SunHavenApi.getCart(username);
          console.log(cart);
          dispatch(updateCartItems([...cart.products]));
          const addOrders = await SunHavenApi.addToOrders(cart);
          const response = await SunHavenApi.clearCart(username);
          dispatch(updateCartItems([]));
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("Error fetching successful order:", error);
        navigate("/");
      }
    }
    getItems();
  }, []);

  return (
    <div className="success-page-container">
      <h1>Payment Successful!</h1>
      <p>Thank you for your purchase.</p>
    </div>
  );
}

export default SuccessPage;

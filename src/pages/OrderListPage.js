import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { login, selectUser } from "../reduxData/userSlice";
import SunHavenApi from "../backendApi";
import { updateCartItems } from "../reduxData/cartSlice";
import "./OrderListPage.css";

function OrderListPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [items, setItem] = useState([]);

  useEffect(() => {
    async function getUserData() {
      if (localStorage.getItem("token")) {
        const username = localStorage.getItem("username");
        let user = await SunHavenApi.getCurrentUser(username);

        const originalOrder = user.user.orders.find(
          (order) => order.id === parseInt(id)
        );

        const originalOrderTimestamp = new Date(
          originalOrder.order_date
        ).getTime();

        const tolerance = 1 * 60 * 1000;

        const filteredItems = user.user.orders.filter((item) => {
          const itemTimestamp = new Date(item.order_date).getTime();
          return Math.abs(itemTimestamp - originalOrderTimestamp) <= tolerance;
        });

        setItem(filteredItems);
      }
    }
    getUserData();
  }, [localStorage.getItem("username")]);

  // Calculate subtotal
  const calculateSubtotal = (items) => {
    let subtotal = 0;
    items.forEach((item) => {
      subtotal += parseFloat(item.price) * item.quantity;
    });
    return subtotal.toFixed(2);
  };

  return (
    <div className="order-details-container">
      <h1>Order Details</h1>
      <p>ID: {id}</p>
      <p>
        Date:{" "}
        {items.length > 0
          ? new Date(items[0].order_date).toLocaleDateString()
          : ""}
      </p>

      <h2>Items</h2>
      {items.length === 0 ? (
        <p>No items found</p>
      ) : (
        <ul className="item-list">
          {items.map((item) => (
            <li key={item.id} className="item">
              <img
                className="item-image"
                onClick={() =>
                  navigate(`/product-list/${item.product_id || item.id}`)
                }
                style={{ cursor: "pointer" }}
                src={item.img_url || item.imgUrl}
              />
              <div className="item-details">
                <p className="item-title">{item.title}</p>
                <p className="item-price">Price: ${item.price}</p>
                <p className="item-quantity">Quantity: {item.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {items.length > 0 && (
        <div className="subtotal">
          <h2>Subtotal: ${calculateSubtotal(items)}</h2>
        </div>
      )}
    </div>
  );
}

export default OrderListPage;

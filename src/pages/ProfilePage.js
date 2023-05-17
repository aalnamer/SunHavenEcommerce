import React from "react";
import "./ProfilePage.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../reduxData/userSlice";
import { useNavigate } from "react-router-dom";
import WishList from "../profile-components/WishList";
import { updateCartItems } from "../reduxData/cartSlice";

function ProfilePage() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  function handleSignOut() {
    localStorage.clear();
    dispatch(logout());
    dispatch(updateCartItems([]));
    navigate("/");
  }

  return (
    <div className="profile-page-container">
      {!user ? (
        <>
          <h3> Please Sign in First</h3>
          <button onClick={() => navigate("/")}>Go Back</button>
        </>
      ) : (
        <>
          <div className="profile-page-container">
            <h1 className="profile-page-title">Profile Page</h1>
            <div className="profile-page-info">
              <p className="info-item">First Name: {user.user.firstName}</p>
              <p className="info-item">Last Name: {user.user.lastName}</p>
              <p className="info-item">Email: {user.user.email}</p>
              <button onClick={handleSignOut} className="sign-out-button">
                Sign Out
              </button>
            </div>
            <div className="orders-container">
              <h2 className="orders-title">Orders</h2>
              <ul className="orders-list">
                {user.orders.map((item) => (
                  <li key={item.id} className="orders-item">
                    <a
                      className="order-link"
                      onClick={() => navigate(`/order/${item.id}`)}
                    >
                      {item.order_date}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="wish-list-container">
            <WishList />
          </div>
        </>
      )}
    </div>
  );
}

export default ProfilePage;

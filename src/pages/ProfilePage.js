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
          <div className="profile-page-info">
            <h1 className="profile-page-title">Profile Page</h1>
            <div className="profile-page-info">
              <p>First Name: {user.user.firstName}</p>
              <p>Last Name: {user.user.lastName}</p>
              <p>Email: {user.user.email}</p>
              {/* Add more profile information as needed */}
            </div>
            <button onClick={handleSignOut} className="sign-out-button">
              Sign Out
            </button>
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

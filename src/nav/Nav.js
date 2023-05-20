import React, { useEffect } from "react";
import "./Nav.css";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../reduxData/cartSlice";
import { selectUser } from "../reduxData/userSlice";
import axios from "axios";

function Nav({ loggedIn }) {
  const user = useSelector(selectUser);
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();

  return (
    <header className="header-container">
      <div className="wrapper-container">
        <div className="left-wrapper">
          <img
            onClick={() => navigate("/")}
            alt="Logo"
            className="logo"
            src="https://i.imgur.com/eXHjTJo.png"
            style={{ width: "50px", height: "50px", cursor: "pointer" }}
          />
        </div>
        <div className="center-wrapper">
          <h1 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
            Sun Haven
          </h1>
        </div>
        <div className="right-wrapper">
          <div className="menu-items">
            <h3 onClick={() => navigate("/product-list/men")}>Men's Wear</h3>
            <h3 onClick={() => navigate("/product-list/women")}>
              Women's Wear
            </h3>
            <h3 onClick={() => navigate("/product-list/accessories")}>
              Accessories
            </h3>
            {!loggedIn ? (
              <>
                <h3 onClick={() => navigate("/register")}>Account</h3>
              </>
            ) : (
              <>
                <h3 onClick={() => navigate("/profile")}>
                  {user.user.username}
                </h3>
              </>
            )}
            <Badge badgeContent={cartItems.length} color="primary">
              <ShoppingCartOutlinedIcon
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/cart")}
              />
            </Badge>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;

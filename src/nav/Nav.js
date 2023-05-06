import React from "react";
import "./Nav.css";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  return (
    <header className="header-container">
      <div className="wrapper-container">
        <div className="left-wrapper">
          <div className="search-container">
            <input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className="center-wrapper">
          <h1 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
            Sun Haven
          </h1>
        </div>
        <div className="right-wrapper">
          <div className="menu-items">
            <h3 onClick={() => navigate("/register")}>Register</h3>
            <h3 onClick={() => navigate("/login")}>Sign In</h3>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/cart")}
              />
            </Badge>
          </div>
        </div>
        {/* <div className="announcement-container">
          <h1>
            SUMMER SALE <span style={{ color: "red" }}>BOGO 50% OFF </span>
            ANY SHOE!
          </h1>
        </div>
        <div className="nav-container">
          <div className="links">
            <Link to={"/"}>Shop</Link>
            <div className="shopping-cart">
              <Link to={"/cart"}>
                <ShoppingCart size={30} />
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </header>
  );
}

export default Nav;

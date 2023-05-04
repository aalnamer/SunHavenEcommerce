import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { MagnifyingGlass } from "phosphor-react";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Nav() {
  return (
    <header className="header-container">
      <div className="wrapper-container">
        <div className="left-wrapper">
          <div className="search-container">
            <input />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className="center-wrapper">
          <h1>Sun Haven</h1>
        </div>
        <div className="right-wrapper">
          <div className="menu-items">
            <h3>Register</h3>
            <h3>Sign In</h3>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
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
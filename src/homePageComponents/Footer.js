import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router-dom";

function Footer({ loggedIn }) {
  const navigate = useNavigate();
  return (
    <div className="footer-container">
      <div className="footer-left">
        <h1 className="footer-logo"> Sun Haven</h1>
        <p className="footer-left-desc">
          Shop the latest fashion trends and timeless classics at Sun Haven,
          where you can find a carefully curated collection of apparel and
          accessories that combines quality, affordability, and style."
        </p>
        <div className="footer-socials">
          <div className="footer-icon fb-icon">
            <FacebookIcon />
          </div>
          <div className="footer-icon ig-icon">
            <InstagramIcon />
          </div>
          <div className="footer-icon twitter-icon">
            <TwitterIcon />
          </div>
        </div>
      </div>
      <div className="footer-center">
        <h3>Useful Links</h3>
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/cart")}>Cart</li>
          <li onClick={() => navigate("/product-list/men")}>Mens</li>
          <li onClick={() => navigate("/product-list/women")}>Women</li>
          <li onClick={() => navigate("/product-list/accessories")}>
            Accessories
          </li>
          {loggedIn ? (
            <>
              <li onClick={() => navigate("/profile")}>My Account</li>
              <li onClick={() => navigate("/profile")}>Order Tracking</li>
              <li onClick={() => navigate("/profile")}>WishList</li>
            </>
          ) : null}
          <li>Terms and Conditions</li>
          <li>About Sun Haven</li>
        </ul>
      </div>
      <div className="footer-right">
        <h3>Contact</h3>
        <div className="contact-container">
          <div className="contact-footer address">
            <LocationOnIcon style={{ marginRight: "10px" }} /> New York, United
            States{" "}
          </div>
          <div className="contact-footer phone">
            <PhoneIcon style={{ marginRight: "10px" }} /> +1-234-567-8910
          </div>
          <div className="contact-footer email">
            <EmailIcon style={{ marginRight: "10px" }} /> help@SunHaven.dev
          </div>
          <img src="https://i.imgur.com/HIcv4Ay.png" />
        </div>
      </div>
    </div>
  );
}

export default Footer;

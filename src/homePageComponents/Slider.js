import React, { useState } from "react";
import "./Slider.css";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import products from "../api/products";
import { useNavigate } from "react-router-dom";

function Slider() {
  const navigate = useNavigate();
  const [slideIdx, setSlideIdx] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIdx(slideIdx > 0 ? slideIdx - 1 : 2);
    } else {
      setSlideIdx(slideIdx < 2 ? slideIdx + 1 : 0);
    }
  };

  return (
    <div className="slider-container">
      <div onClick={() => handleClick("left")} className="arrows left">
        <ArrowLeftOutlinedIcon />
      </div>
      <div
        style={{ transform: `translateX(${slideIdx * -100}vw)` }}
        className="wrapper"
      >
        {products.map((item) => (
          <div
            key={item.id}
            style={{ backgroundColor: item.bgColor }}
            className="slide"
          >
            <div className="image-container">
              <img src={item.imageUrl} />
            </div>
            <div className="info-container">
              <h2> SUMMER SALE!</h2>
              <p>{item.description}</p>
              <button onClick={() => navigate("/product-list/men")}>
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <div onClick={() => handleClick("right")} className="arrows right">
        <ArrowRightOutlinedIcon />
      </div>
    </div>
  );
}

export default Slider;

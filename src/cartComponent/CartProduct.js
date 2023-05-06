import React from "react";

function CartProduct() {
  return (
    <>
      <div className="cart-product">
        <div className="idv-product-info-container">
          <img src="https://i.imgur.com/OCleraW.png" />
          <div>
            <span>
              <b>Product: </b> Shirts
            </span>
            <span>
              <b>ID:</b> 3
            </span>
            <span
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "Black",
              }}
            ></span>
            <span>
              <b>Size</b> L
            </span>
          </div>
        </div>
        <div className="idv-price-info-container">
          <div>
            <div className="cart-qunatity-container">
              <label for="cart-product-quantity">Quantity:</label>
              <select id="cart-product-quantity" name="cart-product-quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="cart-price-container">$75.00</div>
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default CartProduct;

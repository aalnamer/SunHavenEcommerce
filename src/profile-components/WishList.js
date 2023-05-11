import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "../firebase";
import { database } from "../firebase";
import { useSelector } from "react-redux";
import userSlice, { selectUser } from "../reduxData/userSlice";

function WishList() {
  const [items, setItems] = useState([]);
  const user = useSelector(selectUser);

  return (
    <div>
      <h2>Wish List</h2>
      <ul>
        {items?.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default WishList;

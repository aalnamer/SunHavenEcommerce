import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div>
        <div className="content">
          <h1>404!</h1>
          <p>The page you are looking for could not be found.</p>

          <Link to="/">BACK TO HOME</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

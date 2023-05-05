import React from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="register-container">
      <div className="register-wrapper">
        <h1>Sign In</h1>
        <form>
          <input placeholder="Email" />
          <input placeholder="Password" />
          <button>Login</button>
        </form>

        <span>
          New Here?
          <span className="sign-up-link" onClick={() => navigate("/register")}>
            Create an Account!
          </span>
        </span>
      </div>
    </div>
  );
}

export default LoginPage;

import React from "react";
import "./RegisterPage.css";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();
  return (
    <div className="register-container">
      <div className="register-wrapper">
        <h1>Create An Account</h1>
        <form>
          <input placeholder="First Name" />
          <input placeholder="Email" />
          <input placeholder="Password" />
          <input placeholder="Confirm Password" />
          <button>Create Account</button>
        </form>
        <span>
          Have an Account?
          <span className="sign-up-link" onClick={() => navigate("/login")}>
            Log in!
          </span>
        </span>
      </div>
    </div>
  );
}

export default RegisterPage;

import React, { useState } from "react";
import "./RegisterPage.css";
import { useNavigate } from "react-router-dom";
import SunHavenApi from "../backendApi";
import { useDispatch } from "react-redux";
import { errorMappings } from "../errorHelpers";
import { login } from "../reduxData/userSlice";
import { updateCartItems } from "../reduxData/cartSlice";

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [formErrors, setFormErrors] = useState([]);

  const data = {
    username: usernameValue,
    password: passwordValue,
  };

  const registerData = {
    username: usernameValue,
    password: passwordValue,
    firstName: firstNameValue,
    lastName: lastNameValue,
    email: emailValue,
  };

  async function handleSignIn(event) {
    event.preventDefault();
    try {
      let res;
      if (isLogin) {
        res = await SunHavenApi.login(data);
      } else {
        console.log(registerData);
        res = await SunHavenApi.register(registerData);
        console.log(res);
      }
      localStorage.setItem("token", res);
      let user = await SunHavenApi.getCurrentUser(usernameValue);
      localStorage.setItem("username", user.user.user.username);
      dispatch(login(user.user));
      if (user.user.cartProducts) {
        dispatch(updateCartItems([...user.user.cartProducts]));
      }
      navigate("/");
    } catch (err) {
      setFormErrors(err);
      // err?.forEach((error) => {
      //   toast.error(error);
      // });
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    const setters = {
      username: setUsernameValue,
      password: setPasswordValue,
      firstName: setFirstNameValue,
      lastName: setLastNameValue,
      email: setEmailValue,
    };

    const setter = setters[name];
    if (setter) {
      setter(value);
    }
  }
  function mapError(error) {
    if (
      error ===
      'instance is not allowed to have the additional property "isAdmin"'
    ) {
      return null;
    }
    return errorMappings[error] || error;
  }

  function handleModeChange(mode) {
    setFormErrors([]);
    setIsLogin(mode);
  }
  return (
    <div className="register-container">
      {isLogin ? (
        <div className="register-wrapper">
          <h1>Sign In</h1>
          {formErrors.length ? (
            <div className="error-message">
              {formErrors.map((error, index) => (
                <div key={index}>{mapError(error)}</div>
              ))}
            </div>
          ) : null}

          <form onSubmit={handleSignIn}>
            <input
              name="username"
              value={usernameValue}
              onChange={handleChange}
              placeholder="Username"
            />
            <input
              name="password"
              value={passwordValue}
              onChange={handleChange}
              placeholder="Password"
              type="password"
            />
            <button type="submit">Login</button>
          </form>
          <span>
            New Here?
            <span
              className="sign-up-link"
              onClick={() => handleModeChange(false)}
            >
              Create an Account!
            </span>
          </span>
        </div>
      ) : (
        <div className="register-wrapper">
          <h1>Create An Account</h1>
          {formErrors.length ? (
            <div className="error-message">
              {formErrors.map((error, index) => (
                <div key={index}>{mapError(error)}</div>
              ))}
            </div>
          ) : null}

          <form onSubmit={handleSignIn}>
            <input
              name="username"
              value={usernameValue}
              onChange={handleChange}
              placeholder="Username"
            />
            <input
              name="password"
              value={passwordValue}
              onChange={handleChange}
              placeholder="Password"
              type="password"
            />
            <input
              name="firstName"
              value={firstNameValue}
              onChange={handleChange}
              placeholder="First Name"
            />
            <input
              name="lastName"
              value={lastNameValue}
              onChange={handleChange}
              placeholder="Last Name"
            />
            <input
              name="email"
              value={emailValue}
              onChange={handleChange}
              placeholder="Email"
            />

            <button type="submit">Create Account</button>
          </form>
          <span>
            Have an Account?
            <span
              className="sign-up-link"
              onClick={() => handleModeChange(true)}
            >
              Log in!
            </span>
          </span>
        </div>
      )}
    </div>
  );
}

export default RegisterPage;

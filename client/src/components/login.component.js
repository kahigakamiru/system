import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Link } from "react-router-dom";

import { login } from "../redux/actions/auth";
export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();
  const handleChangeEmail = (e) => {
    // const email = e.target;
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    // const password = e.target;
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // setState({ email: "", password: "" });

    dispatch(login(email, password)); /* .then(() => {
     
      props.history.push("/dashboard");
      window.location.reload();
    }); */
  };
  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <form onSubmit={handleLogin}>
      <h3>Log in</h3>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => handleChangeEmail(e)}
          className="form-control"
          placeholder="Enter email"
          required
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => handleChangePassword(e)}
          className="form-control"
          placeholder="Enter password"
          required
        />
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
            required
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <button type="submit" className="btn btn-dark btn-lg btn-block">
        Sign in
      </button>
      <p className="forgot-password text-right">
        Forgot <Link to="/">password?</Link>
      </p>
    </form>
  );
}

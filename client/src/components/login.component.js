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

    dispatch(login(email, password)).then(() => {
      window.location.reload();
      props.history.push("/dashboard");
    });
  };

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div
      style={{
        margin: "25px auto",
        padding: "50px",
        maxWidth: "450px",
      }}
    >
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

        <div
          className="form-group"
          style={{
            margin: "25px auto",
            // padding: "50px",
            // maxWidth: "450px",
          }}
        >
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

        <button
          type="submit"
          className="btn btn-primary btn-lg btn-block"
          style={{
            margin: "25px auto",
          }}
        >
          Sign in
        </button>
        <p className="forgot-password text-right">
          Forgot <Link to="/">password?</Link>
        </p>
      </form>
    </div>
  );
}

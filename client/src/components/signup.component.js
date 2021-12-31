import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { isEmail } from "validator";

import { register } from "../redux/actions/auth";

export default function Signup(props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  // const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const Navigate = useNavigate();
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    setSuccessful(false);
    console.log("hit");
    dispatch(register(firstname, lastname, email, password))
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

  return (
    <div
      style={{
        margin: "25px auto",
        padding: "50px",
        maxWidth: "450px",
      }}
    >
      <form onSubmit={handleRegister}>
        <h3>Register</h3>

        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="First name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Register
        </button>

        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">log in?</a>
        </p>
      </form>
    </div>
  );
}

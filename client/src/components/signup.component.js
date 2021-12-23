import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import { isEmail } from "validator";

import { register } from "../redux/actions/auth";


export default function Signup(props) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    
    
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const onChangeFirstname = (e) => {
    // const firstname = e.target.value;
    setFirstname(e.target.value);
  };
  const onChangeLastname = (e) => {
    // const lastname = e.target.value;
    setLastname(e.target.value);
  };

  const onChangeIsAdmin = (e) => {
    // const isAdmin = e.target.checked;
    setIsAdmin(isAdmin);
  };

  const onChangeEmail = (e) => {
    // const email = e.target.value;
    setEmail(e.target.value);
  };
   const onChangePassword = (e) => {
    //  const password = e.target.value;
     setPassword(e.target.value);
   };
   const onChangeConfirmPassword = (e) => {
     const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
   };
  
   const handleRegister = (e) => {
     e.preventDefault();
     // ConfirmPassword();
     setSuccessful(false);

    //  form.current.validateAll();

     
       dispatch(
         register(firstname, lastname,  email, password, confirmPassword)
       )
         .then(() => {
           setSuccessful(true);
         })
         .catch(() => {
           setSuccessful(false);
         });
     
   };
  
  return (
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
          onChange={onChangeFirstname}
        />
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          value={lastname}
          onChange={onChangeLastname}
        />
      </div>
      {/* <div className="form-group ">
        <label>Admin</label>
        <input
          type="checkbox"
          className="form-control"
          name="isAdmin"
          checked={isAdmin}
          value={isAdmin}
          onChange={onChangeIsAdmin}
        />
      </div> */}
      <div className="form-group">
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={onChangeEmail}
          
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
          onChange={onChangePassword}
          
        />
      </div>
      <div className="form-group">
        <label>confirmPassword</label>
        <input
          type="password"
          className="form-control"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChangeConfirmPassword}
        />
      </div>

      <button type="submit" className="btn btn-dark btn-lg btn-block">
        Register
      </button>
      <p className="forgot-password text-right">
        Already registered <a href="#">log in?</a>
      </p>
    </form>
  );
}

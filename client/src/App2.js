import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { logout } from "./redux/actions/auth";
import { clearMessage } from "./redux/actions/message";

import { history } from "./helpers/history";
import EventBus from "./common/EventBus";
import Home from "./App";

function App() {
 
  const handlelogout = () => {
    localStorage.clear();
  };

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  useEffect(() => {
    // if (currentUser) {
    //   setShowAdminBoard(currentUser.user.isAdmin);
    // } else {
    //   setShowAdminBoard(false);
    // }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);
  // console.log(currentUser.user.isAdmin);
  return (
 
    <div className="App">
      <Home />
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>
              UserSystem
            </Link>
            {currentUser ? (
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      onClick={handlelogout}
                      to="/sign-in"
                    >
                      Log Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>
                      Sign up
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>

      </div>
  
  );
}

export default App;

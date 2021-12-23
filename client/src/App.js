import React, { useEffect, useCallback } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,

} from "react-router-dom";
import Dashboard from "./components/dashboard.component";
import Login from "./components/login.component";
import Signup from "./components/signup.component";
import Task from "./components/tasks.components";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { logout } from "./redux/actions/auth";
import { clearMessage } from "./redux/actions/message";

import { history } from "./helpers/history";
import EventBus from "./common/EventBus";
import Projects from "./components/projects.components";

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
    <Router history={history}>
      <div className="App">
        {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
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
        </nav> */}

        {/* <div className="outer">
          <div className="inner"> */}
        <Routes>
          {/* <Route path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<Signup />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Task />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        {/* </div>
        </div> */}
      </div>
    </Router>
  );
}

export default App;

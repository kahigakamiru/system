import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/login.component";
import Signup from "./components/signup.component";
import Dashboard from "./components/dashboard.component";
import AuthService from "./services/auth.service";
import Projects from "./components/projects.components";
import Tasks from "./components/tasks.components";
import Users from "./components/Users";
import Home from "./components/Home";
import CreateProjects from "./components/CreateProjects";
import CreateTasks from "./components/CreateTasks";
import UpdateTasks from "./components/UpdateTasks";
import Navbar from "react-bootstrap/Navbar";
import { Button, Table, Container } from "react-bootstrap";
import AssignTasks from "./components/AssignTasks";

class App extends Component {
  constructor(props) {
    super(props);

    this.logOut = this.logOut.bind(this);

    this.state = {
      showUserDashboard: false,
      showAdminDashboard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showUserDashboard: user.user.isAdmin === false,
        showAdminDashboard: user.user.isAdmin === true,
      });
    }
  }

  logOut() {
    AuthService.logout();
  }
  render() {
    const { currentUser, showUserDashboard, showAdminDashboard } = this.state;
    // console.log(currentUser);
    return (
      <Router>
        <Navbar
          className="navbar"
          style={{
            display: "flex",
            justifyContent: "space-between",
            background: "#346aff",
            color: "white",
          }}
        >
          <Link to={"/home"} className="navbar-brand">
            Home
          </Link>
          <div className="navbar-nav ml-auto">
            {showUserDashboard && (
              <li className="nav-item">
                <Link to={"/dashboard"} className="nav-link">
                  Rights:User
                </Link>
              </li>
            )}
            {showAdminDashboard && (
              <li className="nav-item">
                <Link to={"/dashboard"} className="nav-link">
                  Rights:Admin
                </Link>
              </li>
            )}
          </div>
          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  {currentUser.user.first}'s Dashboard
                </Link>
              </li>

              <li className="nav-item">
                <a href="/home" className="nav-link" onClick={this.logOut}>
                  <button type="button" class="btn btn-light btn-sm">
                    LogOut
                  </button>
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/sign-in"} className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/sign-up"} className="nav-link">
                  SignUp
                </Link>
              </li>
            </div>
          )}
        </Navbar>

        <div>
          <Routes>
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/tasks" element={<Tasks />} />
            <Route path="/dashboard/projects" element={<Projects />} />
            <Route path="/dashboard/users" element={<Users />} />
            <Route path="/dashboard/tasks/assign" element={<AssignTasks />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/dashboard/projects/createprojects"
              element={<CreateProjects />}
            />
            <Route
              path="/dashboard/tasks/createtasks"
              element={<CreateTasks />}
            />
            <Route
              path="/dashboard/tasks/updatetasks/:task_id"
              element={<UpdateTasks />}
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;

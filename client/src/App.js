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
import Home from "./components/Home"
import CreateProjects from "./components/CreateProjects";
import CreateTasks from "./components/CreateTasks";
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
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-light bg-light responsive-md">
            <Link to={"/home"} className="navbar-brand">
              Home
            </Link>

            <div className="navbar-nav ml-auto">
              {/* Add Admin and User DashBoards */}
              {showUserDashboard && (
                <li className="nav-item">
                  <Link to={"/userdash"} className="nav-link">
                    Rights: User
                  </Link>
                </li>
              )}
              {showAdminDashboard && (
                <li className="nav-item">
                  <Link to={"/admindash"} className="nav-link">
                    Rights: Admin
                  </Link>
                </li>
              )}
            </div>

            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/userdash"} className="nav-link">
                    {currentUser.user.username}'s Dashboard
                  </Link>
                </li>

                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={this.logOut}>
                    LogOut
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
          </nav>

          <div className="container mt-3">
            <Routes>
              {/* <Route exact path={["/", "/home"]} component={App} /> */}
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/tasks" element={<Tasks />} />
              <Route path="/dashboard/projects" element={<Projects />} />
              <Route path="/dashboard/users" element={<Users />} />
              <Route path="/dashboard/projects/createprojects" element={<CreateProjects />} />
              <Route path="/dashboard/tasks/createtasks" element={<CreateTasks />} />
              {/* <Route exact path="/admindash/gettasks" component={GetTasks} />
              <Route
                exact
                path="/admindash/allprojects"
                component={GetAllProjects}
              />
              <Route
                exact
                path="/admindash/getallusers"
                component={GetAllUsers}
              />
              <Route exact path="/admindash/update" component={Updates} /> */}
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

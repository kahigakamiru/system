import React from "react";
import "./styles.css";
import Button from "./button";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <div className="side-menu">
        <div className="brand-name">
          <h1>
            <li>&nbsp; Dashboard</li>
          </h1>
        </div>
        <ul>
          <li>
            <i class="fa fa-bars" aria-hidden="true"></i>
            <span>&nbsp; Projects</span>
          </li>
          <li>
            <i class="fa fa-tasks" aria-hidden="true"></i>
            <span>&nbsp; Tasks</span>
          </li>
          <li>
            <i class="fas fa-users"></i>
            <span> &nbsp;Developers</span>
          </li>
          <li>
            <i class="fa fa-info-circle" aria-hidden="true"></i>
            <span> &nbsp;Help</span>
          </li>
          <li>
            <i class="fa fa-cogs" aria-hidden="true"></i>
            <span>&nbsp;Settings</span>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="header">
          <div className="nav">
            <div className="search">
              <input type="text" placeholder="search.." />
              <button type="button">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
            <div class="user">
              <Link to="#" class="btn">
                Add User
              </Link>
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              {/* <i class="fa fa-bell" aria-hidden="true"></i> */}
              <div className="img-case">
                <i class="fa fa-user" aria-hidden="true"></i>
                <img
                  src="data:image/png;base64,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
                            jeiITMHb8kNG6XuxaIJmAkAi8tmDMB5FwB814r6MgxOxmwOZ7hxkWDoL3AbvjOEKfuX3M6SCshJVso/OZCbArSeNRR8Y3t3Kv2WRXAj0EdzSfCc4NdyRLEDO7hBoXKIsCAlVv/RB/6AWJ7cE+yyZCTYAe+Xi0ABaUTIzStHCafTru+3kEBSmRj/JKPEqu0c7fSxMQO5+68p/ZfVNuSU3UbIHoOKGKSgXnGgGvL2jkgNRpPlW12I4F8YLNL0pnlDgI78r2AG71ubwewJZQfXuvQ2W9spO3y/tjPN9zQuvLoLqm18F1buMNkYFtFlRNbai1NPkktmIkwdJPVdfVAexa4a3FS7qrZ2VzF7zUnRFlJXRfm6VmRy6t30k2MrdpajYJo68WH7G4BlYtPKta+0SDzYtH9ZFvRg4JHdipcerbNAiDOvPbIWwoCexXnpaj3ayqqXmoCrZDdX6PXV+36hPnobjUFlUNpm3fF8MKjflV8r0kV5QXex1sZ1VVM8LsVstEaZDQvmamPDRgeWJ9oUyXd2j7XerNc20dLo4SW9Ulf79MORUr3iDDaKg45RKjOTYgkiXPg7GBo5t8M4oT+qsmgjDsStfiO1P9qXiJOgmaoNPqS+tgkEgeWnlQoAk6d6NEX3vpQmciitKEot4Wv+GhmxMFRd2E1kCraOywu8xLQAsS0Hofa+nRjfgjq6Gpy1QdULPkSBnkkoBipImuA2oXQSsW99V8ih5GZ/F/jWKyTqvkNGpbTqNxvdyjxW2pbUimeqs/VeDrdfBa6FVW3McY9MBsS64gXZfg30l6mlcr9qnufZNo5KPbcs/Sr4PXAtVzcRIyLVN0c3AWNes1Ufrz4VJtAAzu6obiimcYqv5YF9vPj+vkJv5SLwowpQhJOkmV7qX4aGhfqsgwtujQSs9IfW3kGodQjwKchH9Vk+dr3/W9dKpriCkKN5XqmNOZD6HXU4cQGrz3HrrLmovmH/r+Nib0TfkJfixkc9n8Ev1sTIXGDEpf6iysTAW3gtm8FyD0TLUQa3+pcRgZ07VnMlnYV+PAwBhtefcZIMOSAon3AasuoDjIwJzxvvGsL5T1qnjqCbFTUFa74t9yVIuSMoLDzqV2ygyEaFcStH1vIskKy+Ph0wEw6CFAUpq4tWxIf614b3t7jIFk3aGC+FhaJub2HjgLWFUC8nJcKXB6wBsR1OpYkQJ6bNQYhrgqYfMwHfXBbv2y9YJ+b19V2PcYN+zEQBhVd8542adxJydYxhBzWp043Vfn7K69VFbUQHXqHx17n07COMqEREbygq8/ozic7OsrFYeddpI+YGGXj3p4Gu83x12ajkajNN0dN/vxzK66dCpe6GMNhJjdULECp7iF7XjNbuWL3cOqVWZndvwaUQP27a7ZX2SK0lKy21AQfC756psYMgVXrifPWErtlgJCfynRX3G+tO3D0CRyjXDI69gxH65o2mgDyC7peEKtpH6fxBwrogFkqxeFG9c+L7O3MLrZFfuBbPn6g8nY7nm67Xg56N/4ghWQrZ9aJOnmVF7f8zLepIMF/o71KuJL04fuIhmMdsvN236aY/+2We5Gg9WiC1VWwi8BZhzPyv83sr/wt5O644477rjjjjvuuOOOO24T/wOYgKgzdZ/+9QAAAABJRU5ErkJggg=="
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="cards">
            <div className="card">
              <div className="box">
                <h1>Projects</h1>
                <i class="fas fa-project-diagram"></i>
                <Button text="view" />
                <img src="" alt="" />
              </div>
              <div className="icon-case">
                {/* <img src='https://thumbs.dreamstime.com/b/people-vector-icon-group-people-symbol-illustration-businessman-group-logo-multiple-users-silhouette-icon-people-vector-icon-153483842.jpg' alt=''/> */}
              </div>
            </div>
            <div className="card">
              <div className="box">
                <h1>Tasks</h1>
                <i class="fa fa-tasks" aria-hidden="true"></i>
                <Button text="view" />
              </div>
              <div className="icon-case">
                {/* <img src='https://thumbs.dreamstime.com/b/people-vector-icon-group-people-symbol-illustration-businessman-group-logo-multiple-users-silhouette-icon-people-vector-icon-153483842.jpg' alt=''/> */}
              </div>
            </div>
            {/* <div className="card">
              <div className="box">
                <h1>Developers</h1>
                <i class="fas fa-project-diagram"></i>
                <Button text="view" />
              </div>
            </div> */}
            {/* <div className="card">
              <div className="box">
                <h1>projects</h1>
                <i class="fas fa-project-diagram"></i>
                <Button text="view" />
              </div>
            </div> */}
            {/* <div className="card">
              <div className="box">
                <h1>projects</h1>
                <i class="fas fa-project-diagram"></i>
                <Button text="view" />
              </div>
            </div> */}
            <div className="card">
              <div className="box">
                <h1>Developers</h1>
                <i class="fas fa-project-diagram"></i>
                <Button text="view" />
              </div>
              <div className="icon-case">
                {/* <img src='https://thumbs.dreamstime.com/b/people-vector-icon-group-people-symbol-illustration-businessman-group-logo-multiple-users-silhouette-icon-people-vector-icon-153483842.jpg' alt=''/> */}
              </div>
            </div>
          </div>
          <div className="content-2">
            <div className="recent-projects">
              <div className="title">
                <h2>Recent Projects</h2>
                <Link to="#" className="btn">
                  view all
                </Link>
              </div>
              <table>
                <tr>
                  <th>Name</th>
                  <th>leader</th>
                  <th>start date</th>
                  <th>End Date</th>
                  <th>Review</th>
                </tr>
                <tr>
                  <td>UIchall</td>
                  <td>Caleb</td>
                  <td>01/12/2021</td>
                  <td>06/12/2021</td>
                  <td>
                    <Link to="" className="btn">
                      Review
                    </Link>
                  </td>
                </tr>
                &nbsp;
                <tr>
                  <td>UIchall</td>
                  <td>Caleb</td>
                  <td>01/12/2021</td>
                  <td>06/12/2021</td>
                  <td>
                    <Link to="" className="btn">
                      Review
                    </Link>
                  </td>
                </tr>
                &nbsp;
                <tr>
                  <td>UIchall</td>
                  <td>Caleb</td>
                  <td>01/12/2021</td>
                  <td>06/12/2021</td>
                  <td>
                    <Link to="" className="btn">
                      Review
                    </Link>
                  </td>
                </tr>
                &nbsp;
                <tr>
                  <td>UIchall</td>
                  <td>Caleb</td>
                  <td>01/12/2021</td>
                  <td>06/12/2021</td>
                  <td>
                    <Link to="" className="btn">
                      Review
                    </Link>
                  </td>
                </tr>
              </table>
            </div>
            <div className="recent-tasks">
              <div className="title">
                <h2>Recent Tasks</h2>
                <Link to="#" className="btn">
                  view all
                </Link>
              </div>
              <table>
                <tr>
                  <th>UserID</th>
                  <th>projectID</th>
                  <th>TaskId</th>
                  <th>TaskName</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td>01</td>
                  <td>02</td>
                  <td>01</td>
                  <td>UI</td>
                  <td>description</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React,{useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function Task() {
    // let user = "659deef9-18fc-44b8-84c7-4f1abf5b723c";
    const [taskData, setTaskData] = useState();
    
      useEffect(() => {
        setTimeout(async () => {
          await axios({
            url: "http://localhost:8000/api/tasks/2",
            method: "GET",
          }).then((res) => {
            // console.log(res.data);
            setTaskData(res.data.tasks);
            // console.log(res.data.tasks);
            // console.log(res.taskData[0]);
          });
        }, 1000);
      }, []);
    return (
      <div>
        <div>
          <Link to="/dashboard/tasks/createtasks">
            <Button variant="primary" size="lg">
              Add Tasks
            </Button>
          </Link>
          <Link to="/dashboard/tasks/updatetasks">
            <Button variant="secondary" size="lg">
              Update Project
            </Button>
          </Link>
        </div>
        {taskData ? (
          <table>
            <tr>
              <th>UserName</th>
              <th>projectID</th>
              <th>UserId</th>
              <th>start_date</th>
              <th>end_date</th>
              <th>Description</th>
            </tr>
            {taskData.map((taskDat) => (
              <tr>
                <td>{taskDat.name}</td>
                <td>{taskDat.project_id}</td>
                <td>{taskDat.user_id}</td>
                <td>{taskDat.start_date}</td>
                <td>{taskDat.end_date}</td>
                <td>{taskDat.description}</td>
              </tr>
            ))}
            &nbsp;
          </table>
        ) : (
          "no data"
        )}
      </div>
    );
}

export default Task

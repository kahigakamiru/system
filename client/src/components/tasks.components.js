import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Table, Container, InputGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { handledate } from "../helpers/date";
import { deleteTask, getTasks } from "../redux/actions/tasks";
import AssignTasks from "./AssignTasks";

function Task() {
  // let user = "659deef9-18fc-44b8-84c7-4f1abf5b723c";
  // const [taskData, setTaskData] = useState();\
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  
  const { tasks } = useSelector((state) => state.task);
  console.log(tasks);
  let taskData = tasks;

  // const handleAssignTasks = async (taskID, userID) => {
  //   console.log(taskID, userID);
  //   await axios
  //     .put("http://localhost:8000/api/tasks/assign", {
  //       taskID,
  //       userID,
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       if (res.data === "success") {
  //         Navigate("/dashboard/tasks");
  //       }
  //     });
  //   window.location.reload();
  // };
  const handleDeleteTasks = async (task_id) => {
    dispatch(deleteTask(task_id))
  //   // console.log(task_id);
  //   await axios
  //     .put("http://localhost:8000/api/tasks/delete", {
  //       task_id,
  //     })
  //     .then((res) => {
  //       // task;
  //       console.log(res.data);
  //       if (res.data === "success") {
  //         Navigate("/dashboard/tasks");
  //       }
  //     });
  //   // window.location.reload();
  };
  return (
    <div>
      <div
        style={{
          marginTop: "25px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Link to="/dashboard/tasks/createtasks">
          <Button variant="primary" size="lg">
            Add Tasks
          </Button>
        </Link>
      </div>
      <div
        style={{
          marginTop: "25px",
          padding: "25px",
        }}
      >
        {taskData ? (
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>UserName</th>
                <th>projectID</th>
                <th>start_date</th>
                <th>end_date</th>
                <th>Description</th>
                <th>Update Task</th>
                <th>Assign</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {taskData.map((taskDat) => (
                <tr>
                  <td>{taskDat.name}</td>
                  <td>{taskDat.project_id}</td>
                  <td>{handledate(taskDat.start_date)}</td>
                  <td>{handledate(taskDat.end_date)}</td>
                  <td>{taskDat.description}</td>
                  <td>
                    <Link to={`/dashboard/tasks/updatetasks/${taskDat._id}`}>
                      <Button variant="primary" size="sm">
                        Update
                      </Button>
                    </Link>
                  </td>
                  <td>
                    {!taskDat.isAssigned ? (
                      // <Button
                      //   onClick={() => handleAssignTasks(taskDat._id,)}
                      //   variant="info"
                      // >
                      //   Assign
                      // </Button>
                      <AssignTasks taskID={taskDat._id} />
                    ) : (
                      <Button> UnAssign</Button>
                    )}
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteTasks(taskDat._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          "no data"
        )}
      </div>
    </div>
  );
}

export default Task;

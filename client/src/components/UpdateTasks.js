import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateTasks() {
  const params = useParams();

  const [taskName, setTask] = useState();
  const [_id, setID] = useState();
  const [project_id, setProjectID] = useState();
  const [startDate, setDate] = useState();
  const [endDate, setEnd] = useState();
  const [taskDescription, setDescription] = useState();
  const [data, setData] = useState();
  const Navigate = useNavigate();
  useEffect(() => {
    setTimeout(async () => {
      await axios({
        url: "http://localhost:8000/api/projects/all",
        method: "GET",
      }).then((res) => {
        setData(res.data[0]);
        console.log(res.data[0]);
      });
    }, 1000);
    console.log(params.task_id);
  }, []);
  const handleUpdateTasks = async (e) => {
    e.preventDefault();
    console.log(taskName);
    await axios
      .put("http://localhost:8000/api/tasks/", {
        _id: params.task_id,
        name: taskName,
        start_date: startDate,
        end_date: endDate,
        description: taskDescription,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data === "success") {
          Navigate("/dashboard/projects");
        }
      });
  };
  return (
    <div>
      <Form onSubmit={(e) => handleUpdateTasks(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>TaskName</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setTask(e.target.value)}
            value={taskName}
            placeholder="Enter text"
          />
          <Form.Text className="text-muted">
            please, provide task name
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>task_Description</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={taskDescription}
            placeholder="Description"
          />
          <Form.Text className="text-muted">
            please, provide the description
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>start_date</Form.Label>
          <Form.Control
            type="date"
            onChange={(e) => setDate(e.target.value)}
            placeholder="date"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>end_date</Form.Label>
          <Form.Control
            type="date"
            onChange={(e) => setEnd(e.target.value)}
            placeholder="date"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UpdateTasks;

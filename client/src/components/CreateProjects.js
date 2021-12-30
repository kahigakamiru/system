import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import react, { useState } from "react";
import { Navigate } from "react-router";
import { useNavigate } from 'react-router-dom';
function CreateProjects() {
  const [projectName, setProject] = useState();
  const [startDate, setDate] = useState();
  const [endDate, setEnd] = useState();
  const [projectDescription, setDescription] = useState();

  const dispatch = useDispatch();
    const Navigate = useNavigate();

  const handleCreateProject = async (e) => {
    e.preventDefault();
    console.log(projectName);
    await axios
      .post("http://localhost:8000/api/projects/", {
        name: projectName,
        start_date: startDate,
        end_date: endDate,
        description: projectDescription,
      })
      .then((res) => {
          console.log(res.data);
          if (res.data === "success") {
              Navigate ("/dashboard/projects")
          }
      });
  };
  return (
    <div>
      <Form onSubmit={(e) => handleCreateProject(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Project_Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setProject(e.target.value)}
            value={projectName}
            placeholder="Enter text"
          />
          <Form.Text className="text-muted">
            please, provide project name
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Project_Description</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setDescription(e.target.value)}
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

export default CreateProjects;

import React, { useEffect, useState } from "react";
import { Modal, Form, Table, CardGroup, Card } from "react-bootstrap";
import Button from "./button";
import { Link } from "react-router-dom";
import axios from "axios";


export default function Dashboard() {
  const [data, setData] = useState();
  const [taskData, setTaskData] = useState();

  let user = "659deef9-18fc-44b8-84c7-4f1abf5b723c";
  useEffect(() => {
    setTimeout(async () => {
      await axios({
        url: "http://localhost:8000/api/projects/all",
        method: "GET",
      }).then((res) => {
        setData(res.data[0]);
      });
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(async () => {
      await axios({
        url: "http://localhost:8000/api/tasks/2",
        method: "GET",
      }).then((res) => {
        setTaskData(res.data.tasks);
       
      });
    }, 1000);
  }, []);
  return (
    <div
      style={{
        marginTop: "25px",
        padding: "25px",
        display: "flex",
        gap: "25px",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>
            Projects<i class="fas fa-project-diagram"></i>
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to="/dashboard/projects">
            <Button text="view" />
          </Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>
            Tasks <i class="fa fa-tasks" aria-hidden="true"></i>
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>

          <Link to="/dashboard/tasks">
            <Button text="view" />
          </Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>
            Developers <i class="fas fa-users"></i>
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to="/dashboard/users">
            <Button text="view" />
          </Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>
            Assign Projects<i class="fas fa-project-diagram"></i>
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to="/dashboard/projects">
            <Button text="view" />
          </Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>
            Assign Tasks<i class="fa fa-tasks" aria-hidden="true"></i>
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to="/dashboard/tasks/assign">
            <Button text="view" />
          </Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>
            Assign Developers<i class="fas fa-users"></i>
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to="/dashboard/projects">
            <Button text="view" />
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

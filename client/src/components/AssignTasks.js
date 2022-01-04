import React, { useState, useEffect } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions/auth";
import { assignTask } from "../redux/actions/tasks";

function AssignTasks({ taskID }) {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.auth);
  console.log(users);

  const availableDevs = users?.filter((user) => user.project_id === null);
  console.log("devs", availableDevs);

  // const handleUpdateTasks = async (e) => {
  //   e.preventDefault();
  // };
  const [userID, setUserID] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    dispatch(getUsers());
  };
  const handleChange = (e) => {
    setUserID(e.target.value);
  };
  const handleAssign = () => {
    setShow(false);
    dispatch(assignTask(taskID, userID));
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Assign
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Select user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select
            aria-label="Default select example"
            onChange={handleChange}
          >
            <option>Open this select menu</option>
            {availableDevs.map((dev) => (
              <option value={dev._id}>{dev.email}</option>
            ))}
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="primary" onClick={handleAssign()}>
            Assign
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AssignTasks;

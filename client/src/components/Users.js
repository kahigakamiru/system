import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Button, Modal } from "react-bootstrap";

function Users() {
  const [data, setData] = useState();

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  useEffect(() => {
    setTimeout(async () => {
      await axios({
        url: "http://localhost:3300/api/auth/all",
        method: "GET",
      }).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    }, 1000);
  }, []);
  return (
    <div className="content-2">
      <div className="recent-projects">
        <div className="title">
          <h2>Users</h2>
        </div>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}

        {/* <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal> */}
        {data ? (
          <Table responsive="sm">
            <thead>
              <tr>
                <th>_id</th>
                <th>Fname</th>
                <th>Lname</th>
                <th>email</th>
                <th>Age</th>
                <th>isAdmin</th>
              </tr>
            </thead>
            <tbody>
              {data.map((dat) => (
                <tr>
                  <td>{dat._id}</td>
                  <td>{dat.first}</td>
                  <td>{dat.last}</td>
                  <td>{dat.email}</td>
                  <td>{dat.age}</td>
                  <td>{dat.isAdmin == true ? "True" : "False"}</td>
                </tr>
              ))}
            </tbody>
            &nbsp;
          </Table>
        ) : (
          "no data"
        )}
      </div>
    </div>
  );
}

export default Users;

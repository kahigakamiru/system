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
    <div>
      <div
        style={{
          marginTop: "25px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Button variant="primary" size="lg">
          Users
        </Button>
      </div>
      <div
        style={{
          padding: "25px",
        }}
      >
        {data ? (
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>_id</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>email</th>
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

import React, { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
function Projects() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState();
  const [projectName, setProjectName] = useState();
  const [startDate, setDate] = useState();
  const [endDate, setEndDate] = useState();
  const [projectDescription, setDescription] = useState();

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
 
 
  return (
    <div>
      <div className="mb-2">
        <Link to="/dashboard/projects/createprojects">
        <Button variant="primary" size="lg">
         Add Project
          </Button>
          </Link>{""}
        <Button variant="secondary" size="lg">
         Update Project
        </Button>
      </div>
      <div>
        {data ? (
          <table>
            <tr>
              <th>Name</th>
              {/* <th>leader</th> */}
              <th>start date</th>
              <th>End Date</th>
              <th>description</th>
            </tr>
            {data.map((dat) => (
              <tr>
                <td>{dat.name}</td>
                {/* <td>{dat.lead_user_id}</td> */}
                <td>{dat.start_date}</td>
                <td>{dat.end_date}</td>
                <td>{dat.description}</td>
              </tr>
            ))}
            &nbsp;
          </table>
        ) : (
          "no data"
        )}
      </div>
    </div>
  );
}

export default Projects;

import React from 'react'
import { Modal, Form, Table, CardGroup, Card } from "react-bootstrap";
import Button from "./button";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
function Home() {
  return (
    <div>
      <div
        style={{
          marginTop: "25px",
          padding: "25px",
        }}
      >
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://www.askdigital.net/wp-content/uploads/2019/12/about.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://www.askdigital.net/wp-content/uploads/2019/12/about.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.askdigital.net/wp-content/uploads/2019/12/about.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
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
            <Card.Img
              variant="top"
              src="https://marlacummins.com/wp-content/uploads/2011/12/project-management.jpg"
            />
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
            <Card.Img
              variant="top"
              src="https://assets.website-files.com/5cb90b63adbd7da37ea60e30/5df141337790f402162d1013_meeting-tasks-action-items-next-steps.jpg"
            />
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
          <Card.Img
            variant="top"
            src="https://flow-e.com/wp-content/uploads/2019/05/What-are-Action-Items.jpg"
          />
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
          <Card.Img
            variant="top"
            src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/01/top-10-DS-projects.png"
          />
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
          <Card.Img
            variant="top"
            src="https://www.ntaskmanager.com/wp-content/uploads/2019/01/task-management-skills-blog-header-1.png"
          />
          <Card.Body>
            <Card.Title>
              Assign Tasks<i class="fa fa-tasks" aria-hidden="true"></i>
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
          <Card.Img
            variant="top"
            src="https://miro.medium.com/max/3960/0*HICLyAdNSIyT0ODU.jpg"
          />
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
    </div>
  );
}

export default Home


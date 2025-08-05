import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Simple React Employee List and Details App"
              description="This Project is a Simple ReactJS Project which demonstrates the following

Creating a Functional Component in React, 
Making HTTP calls using Axios, 
Communicating between parent and child component, 
Using Bootstrap along with React, 
Using Basic Routing in React, 
The project Template can be used to build bigger projects"
              ghLink="https://github.com/lokesh-ps/simple-react-employee-list-and-details-app"
              demoLink="https://lokesh-ps.github.io/simple-react-employee-list-and-details-app/#/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="MERN Chat App"
              description="Developed a full-stack MERN Chat App with real-time communication via Socket.io and encrypted userdata stored in MongoDB."
              ghLink="https://github.com/lokesh-ps/mern-chat-app"
              demoLink="https://mern-chat-app-qla8.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="MERN Dating App"
              description="This Project is a Simple MERN Dating Project which demonstrates the following
Creating a Functional Component in React, 
Making HTTP calls using Axios, 
Communicating between parent and child component, 
Using Material UI along with React, 
The project Template can be used to build bigger projects"
              ghLink="https://github.com/lokesh-ps/mern-dating-app"
              demoLink="https://lokesh-ps.github.io/mern-dating-app/#/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="MERN Short Video App"
              description="A MERN stack short video sharing app where users can upload, watch, like, and comment on videos.
Built with MongoDB, Express.js, React.js, and Node.js, featuring user authentication and responsive design."
              ghLink="https://github.com/lokesh-ps/short-video-mern-app"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Simple Calculator"
              description="A simple calculator app that performs basic arithmetic operations like addition, subtraction, multiplication, and division.
Built with a clean interface for quick and easy calculations."
              ghLink="https://github.com/lokesh-ps/simple-calculator"
              demoLink="https://lokesh-ps.github.io/simple-calculator/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="React Hooks Exploration"
              description="A React project exploring hooks and Redux Toolkit to manage state efficiently. Demonstrates usage of useState, useEffect, useReducer, and Redux Toolkit slices for building interactive UI components."
              ghLink="https://github.com/lokesh-ps/react-hooks-toolkit-exploration"
              // demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

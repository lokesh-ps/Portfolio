import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              A few years ago, I discovered my passion for programming — and
              since then, it has been an exciting journey of continuous
              learning, building, and problem-solving 💻🚀
              <br />
              <br />
              I’m a React.js Developer with 4+ years of professional experience
              in building scalable, responsive, and user-friendly web
              applications using
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, React.js, TypeScript, Redux, Node.js, and
                  Express.js ⚙️.{" "}
                </b>
              </i>
              <br />
              <br />I have experience working on{" "}
              <i>
                <b className="purple">
                  component-based architecture, API integration, frontend
                  performance optimization, AWS deployment workflows, CI/CD
                  pipelines, and end-to-end UI development
                </b>{" "}
              </i>
              . I enjoy transforming business requirements into clean and
              efficient user experiences.
              <br />
              <br />
              Beyond tech, I enjoy trekking and leading adventure trips on
              weekends 🥾⛰️ — an experience that has helped me improve
              leadership, communication, and adaptability outside the corporate
              world.
              <br />
              <br />
              I’m passionate about modern web technologies, continuous learning,
              and building impactful digital products 🌐✨
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/lokesh-ps"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/lokeshps522"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/lokesh-p-s-57111a165/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/lokesh_ps_loki"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

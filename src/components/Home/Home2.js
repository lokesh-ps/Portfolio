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
              I fell in love with programming a few years ago — and since then,
              it’s been an exciting journey of building, learning, and improving
              every day. I think I’ve learned quite a bit… 🤷‍♂️💻
              <br />
              <br />I am fluent in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, React.js, TypeScript, Redux, Node.js, and
                  Express.js ⚙️.{" "}
                </b>
              </i>
              <br />
              <br />
              With over 3 plus years of professional experience, I specialize in
              crafting responsive, scalable, and user-friendly web applications
              🌐✨. My interests lie in{" "}
              <i>
                <b className="purple">
                  modern web technologies, product development,{" "}
                </b>{" "}
              </i>
              and exploring areas like
              <b className="purple"> backend development</b>
              🛠️. &nbsp;
              <br />
              <br />
              On weekends, I switch gears and take on a different challenge — I
              work as a{" "}
              <i>
                <b className="purple">trek guide 🥾⛰️</b>
              </i>
              , helping people explore nature and push their limits, just like I
              do in tech 🚀.
              <br />
              <br />
              Whenever possible, I pour my passion into building full-stack
              applications using
              <b className="purple">
                JavaScript, React.js, Redux, Node.js, and Express.js{" "}
              </b>
              — and I’m actively leveling up my
              <b className="purple"> backend skills</b> to take on end-to-end
              product development 📈.
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

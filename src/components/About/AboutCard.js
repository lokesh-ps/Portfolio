import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Lokesh P S </span>
            from <span className="purple"> Tumkur, India.</span>
            <br />
            I am currently employed as a Front-end developer at TCS.
            <br />
            I'm currently sharpening my skills in React.js, exploring backend
            development, and preparing to grow into a full-stack role. With 3
            plus years of experience, I enjoy building scalable and responsive
            web applications that are both functional and user-friendly.
            <br />
            <br />
            💡 A Few Things About Me Beyond Code:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 🎮 Love trekking and leading adventure trips on
              weekends
            </li>
            <li className="about-activity">
              <ImPointRight /> ✍️ Enjoy writing and learning about new tech
              trends
            </li>
            <li className="about-activity">
              <ImPointRight /> 🌍 Always up for exploring new places and meeting
              people
            </li>
            <li className="about-activity">
              <ImPointRight /> 🤖 Currently diving into backend tech to expand
              my developer toolkit
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I believe in consistent effort and learning—building with purpose
            and passion."{" "}
          </p>
          <footer className="blockquote-footer">Lokesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

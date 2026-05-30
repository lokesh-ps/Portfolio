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
            Currently working as a Senior Associate Consultant at Infosys with
            4+ years of experience in frontend development.
            <br />
            I specialize in building scalable, responsive, and user-friendly web
            applications using React.js, JavaScript, TypeScript, Redux, and
            modern frontend technologies. I also have exposure to AWS deployment
            workflows, CI/CD pipelines, API integration, performance
            optimization, and component-based architecture.
            <br />
            <br />
            💡 A Few Things About Me Beyond Code:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 🥾 Love trekking and leading adventure trips on
              weekends
            </li>
            <li className="about-activity">
              <ImPointRight /> 📚 Enjoy exploring new technologies and staying
              updated with tech trends
            </li>
            <li className="about-activity">
              <ImPointRight /> 🌍 Always excited to explore new places and
              connect with new people
            </li>
            <li className="about-activity">
              <ImPointRight /> 🚀 Continuously learning and growing as a
              developer by exploring modern frontend and backend technologies
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

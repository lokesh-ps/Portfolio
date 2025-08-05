import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb } from "react-icons/di";
import { SiChakraui, SiReduxsaga } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { TiHtml5 } from "react-icons/ti";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <TiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReduxsaga />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiChakraui />
      </Col>
    </Row>
  );
}

export default Techstack;

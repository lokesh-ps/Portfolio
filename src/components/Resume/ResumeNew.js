import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/Lokesh_4y_React_Developer.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Set PDF worker using stable CDN
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <a
            className="btn btn-primary"
            href={pdf}
            download
            rel="noopener noreferrer"
            style={{
              maxWidth: "250px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </a>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <a
            className="btn btn-primary"
            href={pdf}
            download
            rel="noopener noreferrer"
            style={{
              maxWidth: "250px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </a>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;

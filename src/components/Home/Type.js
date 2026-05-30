import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior React.js Developer",
          "Frontend Engineer",
          "React & TypeScript Developer",
          "UI Developer | AWS & CI/CD Exposure",
          "Building Scalable Web Applications",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

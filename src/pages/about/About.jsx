import React from "react";
import "./about.scss";

export default function About() {
  return (
    <div className="about">
      <h1 className="about-header">ABOUT</h1>
      <p className="about-desciption">
        This project was built for practice purposes using React.
      </p>
      <div className="about-link">
        <a
          href="https://github.com/rosieranderson1/react-shooping-cart.git"
          target="_blank"
        >
          VISIT REPO
        </a>
      </div>
    </div>
  );
}

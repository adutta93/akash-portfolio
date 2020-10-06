import React, { Component } from "react";
import Project from "./project";
import Fade from "react-reveal/Fade";
import data from "../yourdata";

class Work extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="heading">
          <Fade bottom cascade>
            Work.
          </Fade>
        </h1>
        <div className="work-content">
          {data.projects.map((project) => (
            <Project
              key={project.id}
              title={project.title}
              imageSrc={project.imageSrc}
              live={project.live}
              livedemo={project.livedemo}
              github={project.github}
            ></Project>
          ))}
        </div>
      </div>
    );
  }
}

export default Work;

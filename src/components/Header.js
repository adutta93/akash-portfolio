import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";

class Header extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1 className="heading-background">CREATIVE</h1>
        <header>
          <h1>
            <Fade bottom cascade>
              {data.name}
            </Fade>
          </h1>
        </header>
        <Fade bottom cascade>
          <p className="position">{"Full-stack developer"}</p>
        </Fade>
        <Fade bottom>
          <p className="header-title">
            {data.headerTagline[0]}
            <span>{data.headerTagline[1]}</span>
            <br></br>
            {data.headerTagline[2]}
            <br></br>
            {data.headerTagline[3]}
            <br></br>
            <button>
              <a
                href="mailto:dutta.akash1993official@gmail.com"
                target="blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </button>
            <button>
              <a
                href={data.resumeDownload}
                target="blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </button>
          </p>
        </Fade>
      </div>
    );
  }
}

export default Header;

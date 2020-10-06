import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
class Contact extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>
          <Fade bottom cascade>
            {" "}
            Contact.
          </Fade>
        </h1>
        <Fade bottom>
          <div className="contact-content">
            <h1>
              Let’s create your next<br></br>
              <span className="amazing-color">experience together</span>
            </h1>
            <a href={`mailto:${data.contactEmail}`} className="email">
              {data.contactEmail}
            </a>
            <ul>
              <AiFillGithub size={35} style={{ marginRight: "1.5rem" }} />
              <AiFillLinkedin size={35} style={{ marginRight: "1.5rem" }} />
              <AiFillInstagram size={35} style={{ marginRight: "1.5rem" }} />
              <AiFillTwitterCircle
                size={35}
                style={{ marginRight: "1.5rem" }}
              />
            </ul>
          </div>
        </Fade>

        <span className="footer">
          Made With ❤ by{" "}
          <a href="https://github.com/akash-dutta-au7">
            Chetan Verma & Akash Dutta
          </a>
        </span>
      </div>
    );
  }
}

export default Contact;

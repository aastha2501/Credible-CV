import logo from "../Images/logo.png";
import resume from "../Images/resumeIconn.png";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <img className="navbar-brand logo" src={logo} alt="" />
        </div>
        <div className="wrapper">
          <div className="tagLine">
            <h1>
              A{" "}
              <span style={{ color: "#312DB3" }}>
                <b>Resume</b>
              </span>{" "}
              that stands out...
            </h1>
            <h5>
              Create Your Resume and Get
              <span style={{ color: "#312DB3" }}>
                {" "}
                <b>Hired</b>
              </span>{" "}
              Fast!!
            </h5>
          </div>

          <div className="image">
            <img src={resume} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

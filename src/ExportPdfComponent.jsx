import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import Template from "./Template";
import {AiOutlineDownload} from 'react-icons/ai';

export default class ExportPdfComponent extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values } = this.props;
    return (
      <div className="container">
        <div className="export button">
          <button className="btn btn-primary" onClick={this.back}>
            Back
          </button>
          <ReactToPrint
            content={() => this.componentRef}
            trigger={() => (
              <button
                className="btn dwnld"
                style={{ backgroundColor: "#312DB3", color: "white" }}
              >
                Download
                <span><AiOutlineDownload className="dwnldIcon"/></span>
              </button>
            )}
          />
        </div>

        <Template
          values={values}
          ref={(response) => (this.componentRef = response)}
        />
      </div>
    );
  }
}

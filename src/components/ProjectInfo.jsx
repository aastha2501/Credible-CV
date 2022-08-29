import React, { Component } from "react";
import { BsCheckCircleFill } from "react-icons/bs";

export default class ProjectInfo extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="container animated fadeInLeft containerShadow">
        <h2 className="card-title text-center">Project Info</h2>
        <form onSubmit={this.continue}>
          <div className="row my-3">
            <BsCheckCircleFill className="icon" />
          </div>
          <div className="row my-3">
            <div className="col">
              <label htmlFor="">Title*</label>
              <input
                type="text"
                defaultValue={values.title1}
                required
                className="form-control"
                onChange={handleChange("title1")}
              />
            </div>
            <div className="col">
              <label htmlFor="">Link</label>
              <input
                type="text"
                defaultValue={values.link1}
                required
                className="form-control"
                onChange={handleChange("link1")}
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="">Description</label>
              <input
                type="text"
                defaultValue={values.project_dec1}
                required
                className="form-control"
                onChange={handleChange("project_dec1")}
              />
            </div>
          </div>

          <div className="row my-3">
            <BsCheckCircleFill className="icon" />
          </div>

          <div className="row my-3">
            <div className="col">
              <label htmlFor="">Title*</label>
              <input
                type="text"
                defaultValue={values.title2}
                required
                className="form-control"
                onChange={handleChange("title2")}
              />
            </div>
            <div className="col">
              <label htmlFor="">Link</label>
              <input
                type="text"
                defaultValue={values.link2}
                required
                className="form-control"
                onChange={handleChange("link2")}
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="">Description</label>
              <input
                type="text"
                defaultValue={values.project_dec2}
                required
                className="form-control"
                onChange={handleChange("project_dec2")}
              />
            </div>
          </div>

          <div className="row button">
            <div className="col">
              <button onClick={this.back} className="btn btn-primary my-3">
                Back
              </button>
            </div>
            <div className="col">
              {/* <button onClick={this.continue} className="btn btn-primary my-3">
                Next
              </button> */}
              <input type="submit" className="btn my-3" value="Next" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

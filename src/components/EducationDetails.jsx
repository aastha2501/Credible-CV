import React, { Component } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";

export default class EducationDetails extends Component {
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
        <h2 className="card-title text-center">Educational Info</h2>
        <form onSubmit={this.continue}>
          <div className="row my-3">
            <BsCheckCircleFill className="icon" />
          </div>
          <div className="row my-3">
            <div className="col">
              <label htmlFor="">University/College*</label>
              <input
                type="text"
                className="form-control"
                onChange={handleChange("university")}
                defaultValue={values.university}
                required
              />
            </div>
            <div className="col">
              <label htmlFor="">Year</label>
              <input
                type="text"
                className="form-control"
                onChange={handleChange("year")}
                defaultValue={values.year}
                required
              />
            </div>

            <div className="col">
              <label htmlFor="">Qualification*</label>
              <input
                type="text"
                className="form-control"
                onChange={handleChange("qualification")}
                defaultValue={values.qualification}
                required
              />
            </div>
          </div>

          <div className="row my-3">
            <BsCheckCircleFill className="icon" />
          </div>

          <div className="row my-3">
            <div className="col">
              <label htmlFor="">School*</label>
              <input
                type="text"
                className="form-control"
                onChange={handleChange("school")}
                defaultValue={values.school}
                required
              />
            </div>
            <div className="col">
              <label htmlFor="">Year</label>
              <input
                type="text"
                className="form-control"
                onChange={handleChange("year2")}
                defaultValue={values.year2}
                required
              />
            </div>

            <div className="col">
              <label htmlFor="">Qualification*</label>
              <input
                type="text"
                className="form-control"
                onChange={handleChange("qualification2")}
                defaultValue={values.qualification2}
                required
              />
            </div>
          </div>

          <div className="row button">
            <div className="col">
              <button
                onClick={this.back}
                type="button"
                className="btn btn-primary my-3"
              >
                Back
              </button>
            </div>
            <div className="col">
              {/* <button
                onClick={this.continue}
                type="submit"
                className="btn btn-primary my-3"
              >
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

import React, { Component } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";

export default class ExperienceDetails extends Component {
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
        <h2 className="card-title text-center">Experience Info</h2>
        <form onSubmit={this.continue}>
          <div className="row my-3">
            <BsCheckCircleFill className="icon" />
          </div>
          <div className="row my-3">
            <div className="col">
              <label htmlFor="">Institute/Organisation*</label>
              <input
                type="text"
                defaultValue={values.institute1}
                required
                className="form-control"
                onChange={handleChange("institute1")}
              />
            </div>

            <div className="col">
              <label htmlFor="">Duration*</label>
              <input
                type="text"
                defaultValue={values.duration1}
                required
                className="form-control"
                onChange={handleChange("duration1")}
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="">Description</label>
              <input
                type="text"
                defaultValue={values.exp_dec1}
                required
                className="form-control"
                onChange={handleChange("exp_dec1")}
              />
            </div>
          </div>

          <div className="row my-3">
            <BsCheckCircleFill className="icon" />
          </div>

          <div className="row my-3">
            <div className="col">
              <label htmlFor="">Institute/Organisation*</label>
              <input
                type="text"
                defaultValue={values.institute2}
                required
                className="form-control"
                onChange={handleChange("institute2")}
              />
            </div>

            <div className="col">
              <label htmlFor="">Duration*</label>
              <input
                type="text"
                defaultValue={values.duration2}
                required
                className="form-control"
                onChange={handleChange("duration2")}
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="">Description</label>
              <input
                type="text"
                defaultValue={values.exp_dec2}
                required
                className="form-control"
                onChange={handleChange("exp_dec2")}
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

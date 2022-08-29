import React, { Component } from "react";


export default class PersonalDetails extends Component {
  
  continue = (e) => {
    e.preventDefault();

      this.props.nextStep();
  };


  render() {
    const { values, handleChange } = this.props;
   
    return (
      <div className="container animated fadeInLeft containerShadow">
        <h2 className="card-title text-center">Personal Info</h2>
        <form onSubmit={this.continue}>
          <div className="row my-3">
            <div className="col">
              <label htmlFor="">Name*</label>
              <input
                type="text"
                className="form-control"
                onChange={handleChange("name")}
                defaultValue={values.name}
                required
              />
            </div>
            <div className="col">
              <label htmlFor="">Profession</label>
              <input
                type="text"
                className="form-control"
                onChange={handleChange("profession")}
                defaultValue={values.profession}
                required
              />
            </div>
            <div className="col">
              <label htmlFor="">Mobile*</label>
              <input
                type="tel"
                className="form-control"
                onChange={handleChange("phone")}
                defaultValue={values.phone}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="">Email*</label>
              <input
                type="email"
                className="form-control"
                onChange={handleChange("email")}
                defaultValue={values.email}
                required
              />
            </div>
            <div className="col">
              <label htmlFor="">GitHub</label>
              <input
                type="text"
                className="form-control"
                onChange={handleChange("github")}
                defaultValue={values.github}
                required
              />
            </div>
            <div className="col">
              <label htmlFor="">LinkedIn</label>
              <input
                type="text"
                className="form-control"
                onChange={handleChange("linkedIn")}
                defaultValue={values.linkedIn}
                required
              />
            </div>
          </div>

          <div className="row my-3">
            <div className="col">
              <label htmlFor="">
                Skills* (Separate each skill with a comma)
              </label>
              <input
                type="text"
                className="form-control"
                onChange={handleChange("skills")}
                defaultValue={values.skills}
                required
              />
            </div>
          </div>

          <div className="button">
            {/* <button
              type="submit"
              onClick={this.continue}
              className="btn btn-primary my-3"
            >
              Next
            </button> */}
            <input
              type="submit"
              className="btn my-3"
              value="Next"
            />
          </div>
        </form>
      </div>
    );
  }
}

import React, { Component } from "react";
import EducationDetails from "./EducationDetails";
import ExperienceDetails from "./ExperienceDetails";
import PersonalDetails from "./PersonalDetails";
import ProjectInfo from "./ProjectInfo";
import ExportPdfComponent from "../ExportPdfComponent";

export default class UserForm extends Component {
  state = {
    // personal details
    step: 1,
    name: "",
    profession: "",
    phone: "",
    email: "",
    linkedIn: "",
    github: "",
    skills: "",

    //educational details
    university: "",
    qualification: "",
    year: "",

    school: "",
    qualification2: "",
    year2: "",

    //experience details
    institute1: "",
    duration1: "",
    exp_dec1: "",

    institute2: "",
    duration2: "",
    exp_dec2: "",

    //project details
    title1: "",
    link1: "",
    project_dec1: "",
    title2: "",
    link2: "",
    project_dec2: "",

    // status: 0
  };

  // proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // go to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      name,
      profession,
      phone,
      email,
      github,
      linkedIn,
      skills,
      university,
      qualification,
      year,
      school,
      qualification2,
      year2,
      institute1,
      duration1,
      exp_dec1,
      institute2,
      duration2,
      exp_dec2,
      title1,
      link1,
      project_dec1,
      title2,
      link2,
      project_dec2,
    } = this.state;
    const values = {
      name,
      profession,
      phone,
      email,
      github,
      linkedIn,
      skills,
      university,
      qualification,
      year,
      school,
      qualification2,
      year2,
      institute1,
      duration1,
      exp_dec1,
      institute2,
      duration2,
      exp_dec2,
      title1,
      link1,
      project_dec1,
      title2,
      link2,
      project_dec2,
    };

    switch (step) {
      case 1:
        return (
          <PersonalDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 2:
        return (
          <EducationDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 3:
        return (
          <ExperienceDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 4:
        return (
          <ProjectInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return <ExportPdfComponent prevStep={this.prevStep} values={values} />;
      default:
    }
  }
}

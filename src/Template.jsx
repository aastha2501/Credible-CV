import React, { Component} from 'react';
import {MdEmail} from 'react-icons/md';
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default class Template extends Component {
   
  render() {
      
       const { values } = this.props;
    return (
      <>
      {/* <div className='button'>
          <button className='btn btn-primary'>Download</button>
      </div> */}

        <div className="container wrapperr">
          <h3>{values.name}</h3>
          <p>{values.profession}</p>
          <p>{values.mobile}</p>
          <div className="contact">
            <div><MdEmail/> {values.email}</div>
            <div><FaGithub/> {values.github}</div>
            <div><FaLinkedin/> {values.linkedIn}</div>
          </div>
          <hr style={{ height: ".2rem" }} />
          <div>
            <h5>Skills</h5>
            <p>{values.skills}</p>
          </div>
          <hr style={{ height: ".2rem" }} />

          <h5>Education</h5>
          <ul>
            <li>
              <p>
                {values.university} <span>{values.year}</span>
              </p>
              <p>{values.qualification}</p>
            </li>
            <li>
              <p>
                {values.school} <span>{values.year2}</span>
              </p>
              <p>{values.qualification2}</p>
            </li>
          </ul>
          <hr style={{ height: ".2rem" }} />
          <h5>Experience</h5>
          <ul>
            <li>
              <p>
                {values.institute1} <span>{values.duration1}</span>
              </p>
              <p>
                {values.exp_dec1}
              </p>
            </li>
            <li>
              <p>
                {values.institute2} <span>{values.duration2}</span>
              </p>
              <p>{values.exp_dec2}</p>
            </li>
          </ul>
          <hr style={{ height: ".2rem" }} />
          <h5>Project</h5>
          <ul>
            <li>
              <p>
                {values.title1} <span>{values.link1}</span>
              </p>
              <p>{values.project_dec1}</p>
            </li>
            <li>
              <p>
                {values.title2} <span>{values.link2}</span>
              </p>
              <p>{values.project_dec2}</p>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

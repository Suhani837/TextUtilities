import React from "react";
import PropTypes from "prop-types";
// import { Link } from 'react-router-dom';

export default function Navbar(props) {

  return (
    <div>
      
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li> */}
            </ul>
            
            <div className="form-check form-check-inline mx-2 bg-warning border-warning">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
                onClick={props.toggleYellow}
              />
              
            </div>
            <div className="form-check form-check-inline mx-2 bg-primary border-primary">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
                onClick={props.toggleBlue}
              />
              
            </div>
            <div className="form-check form-check-inline mx-2 bg-danger border-danger">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="option3"
                onClick={props.toggleRed}
              />
              
            </div>
            <div
              className={`form-check form-switch mx-3 text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                onClick={props.toggleMode}
                role="switch"
                id="switchCheckDefault"
              />
              <label className="form-check-label" htmlFor="switchCheckDefault">
                Enable {props.mode} Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

// Navbar.defaultProps = {
//   title: 'Set title here',
//   aboutText: 'About text here'
// }

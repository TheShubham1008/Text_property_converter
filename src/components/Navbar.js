import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter } from 'react-router-dom'
import {Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <BrowserRouter>
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
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
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <div
            class="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button type="button" class="btn btn-outline-danger" onClick={props.toggleMode1}>
              Enable Red 
            </button>
            <button type="button" class="btn btn-outline-primary" onClick={props.toggleMode2}>
              Enable Blue
            </button>
            <button type="button" class="btn btn-outline-success" onClick={props.toggleMode3}>
              Enable Green 
            </button>
          </div>
          <div
            className={`form-check form-switch mx-5 text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Change Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
    </BrowserRouter>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired, //isRequired states that if you will not pasas it then default will also not executed and will through an error
  about: PropTypes.string,
};

Navbar.defaultProp = {
  title: "Set title here", //When I will not pass any value in App.js then this will get executed
  aboutText: "About text here",
};

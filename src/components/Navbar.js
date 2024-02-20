import * as React from 'react';
// import{React}  from 'react'
// import {useState} from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

export default function Navbar(props) {

  
  
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">{props.AboutText}</a>
              </li>
            </ul>
            <div className={`form-check form-switch mx-2 text-${props.mode ==='light'?'dark':'light' } `}>
              <input className="form-check-input" type="checkbox" onClick ={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label> 
            </div>
          </div>
        </div>
      </nav></>
  )
}
Navbar.propTypes = {
  title: PropTypes.string,
  AboutText: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Set title here",
  AboutText: "Set about text ",
}



import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import { Link, Router, useHistory } from "react-router-dom";

import { logout } from "../actions/auth.js";

import "./navbar.css";

function Navbar(props) {

  const history = useHistory();

  const logoutHandler = () => {
    localStorage.clear();
    props.dispatch(logout());
    history.push("/");
  }

  return (
		<>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand ml-1" onClick={()=>{history.push("/dashboard")}}>Title</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Dashboard <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Feed</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">My Posts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">New Post</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Search</a>
            </li>
          </ul>
          <ul className="nav ml-auto navbar-nav navbar-right">
            <li className="nav-item">
              <a onClick={()=>logoutHandler()} className="nav-link" href="#">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <div className="float-right btn btn-dark" onClick={()=>logoutHandler()}>Logout</div> */}
    </>
	);
}

function mapStateToProps(state){
  return {
    ...state,
  }
}

export default connect(mapStateToProps)(Navbar);
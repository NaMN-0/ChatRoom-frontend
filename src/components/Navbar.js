import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import { Link, Router, useHistory } from "react-router-dom";

import { logout } from "../actions/auth.js";

import "./navbar.css";

function Navbar(props) {

  const history = useHistory();

  useEffect(() => {
    console.log("navbar");
  },[]);

  const logoutHandler = () => {
    localStorage.clear();
    props.dispatch(logout());
    history.push("/");
  }

  return (
		<>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
        <a className="navbar-brand link ml-1" onClick={()=>{history.push("/dashboard")}}>ChatRoom</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link link" onClick={()=>history.push("dashboard")}>Dashboard <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link link" onClick={()=>history.push("profile")}>Profile</a>
            </li>
          </ul>
          <ul className="nav ml-auto navbar-nav navbar-right">
            <li className="nav-item">
              <a onClick={()=>logoutHandler()} className="nav-link link">Logout</a>
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
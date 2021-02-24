import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import { Link, Router, useHistory } from "react-router-dom";

import { logout } from "../actions/auth.js";
import { setPage } from "../actions/helpers.js";

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

  const navHandler = (string) => {
    props.dispatch(setPage(string));
  }

  return (
		<>
      <div className="navbar bg-dark w-100">
        <div className="text-center w-100 row m-0 p-0">
          <div className="navigation-link text-center col-4 offset-lg-3 col-lg-2" onClick={()=>navHandler("profile")}>Profile</div>
          <div className="navigation-link text-center col-4 col-lg-2" onClick={()=>navHandler("people")}>Chats</div>
          <div className="navigation-link text-center col-4 col-lg-2" onClick={()=>logoutHandler()} >Logout</div>
        </div>
      </div>
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
import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import { Link, Router, useHistory } from "react-router-dom";

import { logout } from "../actions/auth.js";

import Navbar from "./Navbar";
import ProfileCard from "./ProfileCard";

import "./dashboard.css"

function Dashboard(props) {

  const { user } = props;

  return (
		<>
      <Navbar/>
      <div className = "dashboard">
        <div className = "row p-0 m-0 bg-grey">
          <div className = "col-lg-2 left p-0 m-0">
            <ProfileCard user={user}/>
          </div>
          <div className = "col-lg-7 mid p-0 m-0">
            naman
          </div>
          <div className = "col-lg-3 right p-0 m-0">
            naman
          </div>
        </div>
      </div>
    </>
	);
}

function mapStateToProps(state){
  return {
    ...state,
  }
}

export default connect(mapStateToProps)(Dashboard);
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { Link, Router, useHistory } from "react-router-dom";

import { getUser, getPeopleDetails } from "../actions/user.js";

import Navbar from "./Navbar";
import ProfileCard from "./ProfileCard";
import ChatBox from "./ChatBox";
import People from "./People";
import Search from "./Search";

import "./dashboard.css"

function Dashboard(props) {

  const { user, peopleList } = props;

  let token = props.userToken;
  let list = props.peopleList;

  console.log("user : ", user);

  useEffect(() => {
    console.log("dashboard");
    if(!user){
      console.log("token : ", props.userToken);
      props.dispatch(getUser(props.userToken._id));
    }
  },[user,peopleList]);

  return (
		<>
      <Navbar/>
      <div className = "dashboard">
        {(props.page==="people") && 
          <div className = "col-lg-3 col-12 left p-0 m-0">
            <People/>
          </div>
        }
        {(props.page==="chat") && 
          <div className = "col-lg-6 offset-lg-3 p-0 m-0 p-lg-auto m-lg-auto bg-red mid">
            <ChatBox/>
          </div>
        }
        {(props.page==="profile") && 
          <div className = "col-lg-3 left p-0 m-0 row align-items-center">
            <ProfileCard/>
            <Search/>
          </div>
        }
      </div>
    </>
	);
}

function mapStateToProps(state){
  console.log("new one : ", state.peopleList);
  return {
    ...state,
  }
}

export default connect(mapStateToProps)(Dashboard);
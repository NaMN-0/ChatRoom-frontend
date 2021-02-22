import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import { Link, Router, useHistory } from "react-router-dom";

import "./home.css";

function Home(props) {

  const history = useHistory();

  useEffect(() => {
    console.log("home")
    if(props.userToken){
      history.push("/dashboard");
    }
  });

  return (
		<>
      <div className = "home container-sm d-flex align-items-center">
        <div className = "row row1 p-3">
          <div className = "col-lg-6 col-md-12 col-sm-12 mb-4">
            <h1 className = "display-4">Title</h1>
            <h2>Here Goes the tagline</h2>
            <p>
                A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. 
            </p>
            <hr/>
            <h5>Join Site Now</h5>
            <button className="btn btn-dark m-1 px-5" onClick = {() => {history.push("/login")}}>Login</button>
            <button className="btn btn-dark m-1 px-5" onClick = {() => {history.push("/register")}}>Register</button>
          </div>
          <div className = "col-lg-6 col-md-12 col-sm-12 right-side">
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

export default connect(mapStateToProps)(Home);
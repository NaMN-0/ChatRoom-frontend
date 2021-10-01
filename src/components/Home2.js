import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import { Link, Router, useHistory } from "react-router-dom";
import "./home.css";

import Register from "./Register";

function Home2(props) {

  const history = useHistory();

  useEffect(() => {
    console.log("home")
    if(props.userToken){
      history.push("/dashboard");
    }
  });

  return (
		<>
      <div className = "home m-0 p-0 d-flex align-items-center home2">
        <div className = "row row1 p-0 m-0 w-100">
          <div className = "left-side d-lg-flex m-0 col-lg-6 col-md-12 col-sm-12 d-none flex-column justify-content-center p-5 left-side2">
            <h1 className = "display-4">ChatRoom</h1>
            <h2>Discover the difference!</h2>
            <p className="mr-5">
              ChatRoom helps you connect and share with the people in your life.
              <br/>
              With Us, you'll get fast, simple, secure messaging, available on phones all over the world.
            </p>
            <hr/>
          </div>
          <div className = "pl-lg-5 right-side col-lg-5 col-md-12 col-sm-12 m-0 d-flex flex-column justify-content-center">
            <Register/>  
          </div>
          <div className = "extra1 d-lg-flex"></div>
          <div className = "extra2 d-lg-flex"></div>
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

export default connect(mapStateToProps)(Home2);
import React, { useState, useEffect } from "react";
import {connect} from "react-redux";
import { register } from "../actions/auth";
import { Redirect, useHistory } from "react-router-dom";
import { clearErr } from "../actions/helpers.js";

import {BiArrowBack} from "react-icons/bi";

function Register(props) {

  const history = useHistory();

  useEffect(() => {
    props.dispatch(clearErr());
  },[]);

  useEffect(() => {
    if(props.userToken){
      history.push("/dashboard");
    }
  });

  const registerHandler = (e) => {
    e.preventDefault();
    const user = {
      name : e.target.name.value,
      username : e.target.username.value,
      password : e.target.password.value,
      re_password : e.target.re_password.value,
    }
    props.dispatch(register(user));
    e.target.reset();
  }

  return (
		<>
      <div className = "container register d-flex align-items-center">
        <div className = "row p-3 text-center w-100">
          <div className = "col-lg-2"></div>
          <div className = "col-lg-10 w-100 d-flex">
            <button className="btn btn-light back-btn" onClick={()=>{history.push("/")}}><BiArrowBack size={25}/></button>
          </div>
          <div className = "col-lg-3"></div>
          <div className = "col-lg-6">
            <h1 className = "text-left display-4">Register</h1>
            <hr/>
            <form className="mb-4" onSubmit={(e)=>{registerHandler(e)}}>
              <div className="form-group">
                <input className="form-control" name="name" type="text" placeholder="Name"/>
              </div>
              <div className="form-group">
                <input className="form-control" name="username" type="name" placeholder="Username"/>
              </div>
              <div className="form-group">
                <input className="form-control" name="password" type="password" placeholder="Password"/>
              </div>
              <div className="form-group">
                <input className="form-control" name="re_password" type="password" placeholder="Re-Enter Password"/>
              </div>
              <p className="msg">{props.msg}</p>
              {props.loading && <p>Loading</p>}
              <button className="float-left btn btn-dark mb-2" action="submit">Register</button>
            </form>
            <br/>
            <hr/>
            <p>Already have an account?</p>
            <button className="btn btn-dark" onClick = {() => {history.push("/login")}}>Login</button>
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

export default connect(mapStateToProps)(Register);
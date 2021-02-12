import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import { Redirect, useHistory } from "react-router-dom";
import { login } from "../actions/auth";
import { clearErr } from "../actions/helpers";

import { BiArrowBack } from "react-icons/bi";

function Login(props) {

  const history = useHistory();

  useEffect(() => {
    props.dispatch(clearErr());
  },[]);

  useEffect(() => {
    if(props.user){
      history.push("/dashboard");
    }
  });

  const loginHandler = (e) => {
    e.preventDefault();
    const user = {
      email : e.target.email.value,
      password : e.target.password.value,
    }
    props.dispatch(login(user));
    e.target.reset();
  }

  return (
		<>
      <div className = "container login d-flex align-items-center">
        <div className = "row px-3 py-0 text-center w-100">
          <div className = "col-lg-2"></div>
          <div className = "col-lg-10 w-100 d-flex">
            <button className="btn btn-light back-btn" onClick={()=>{history.push("/")}}><BiArrowBack size={25}/></button>
          </div>
          <div className = "col-lg-3"></div>
          <div className = "col-lg-6">
            <h1 className = "text-left display-4">Login</h1>
            <hr/>
            <form className="mb-4" onSubmit={(e)=>{loginHandler(e)}}>
              <div className="form-group">
                <input className="form-control" name="email" type="email" placeholder="E-mail"/>
              </div>
              <div className="form-group">
                <input className="form-control" name="password" type="password" placeholder="Password"/>
              </div>
              <p className="msg">{props.msg}</p>
              {props.loading && <p>Loading</p>}
              <button className="float-left btn btn-dark mb-2" action="submit">Login</button>
            </form>
            <br/>
            <hr/>
            <p>New User?</p>
            <button className="btn btn-dark" onClick = {() => {history.push("/register")}}>Register</button>
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

export default connect(mapStateToProps)(Login);
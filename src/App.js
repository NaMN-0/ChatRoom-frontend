import React, { useState, useEffect, Component } from "react";
import './App.css';

import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import { authenticateUser } from "./actions/auth.js";

import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Dashboard from './components/Dashboard'

function App(props) {

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    if(token){
      props.dispatch(authenticateUser(token));
    }
  },[]);

  const PrivateRoute = (routeProps) => {
    const { component: Component, path, isLoggedIn } = routeProps;
    return (
      <Route
        path = {path}
        render = {(props) => {
          return isLoggedIn ? (
            <Component {...props}/>
          ) : (
            <Redirect to={{
              pathname: "/",
            }}/>
          )
        }}
      />
    )
  }
  
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <PrivateRoute exact path="/dashboard" component={Dashboard} isLoggedIn={props.isLoggedIn}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

function mapStateToProps(state){
  return {
    ...state,
  }
}

export default connect(mapStateToProps)(App);

import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import { Link, Router, useHistory } from "react-router-dom";
import { clearErr } from "../actions/helpers";

import { searchUser, addPeople } from "../actions/user";

import "./search.css"

import { BsPeopleFill } from "react-icons/bs"; 
import { AiOutlineSearch } from "react-icons/ai"; 
import { AiOutlineUserAdd } from "react-icons/ai"; 
import { TiTickOutline } from "react-icons/ti"; 

function Search(props) {

  const { user } = props;

  useEffect(() => {
    console.log("search");
  },[]);

  const searchHandler = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    if(query){
      props.dispatch(searchUser(query));
    }
    e.target.reset();
  }

  const starPeople = () => {
    props.dispatch(addPeople(props.user._id,props.searchedUser._id));
  }

  return (
		<>
      {user && 
        <div className="search p-2 offset-1 col-10">
          <div className = "search-header text-center w-100 pt-3">
            <h3 className="d-flex justify-content-center align-items-center"><BsPeopleFill size={40}/> <span className="mx-2">Find People</span></h3>
          </div>
          <hr/>
          <div className = "p-0 m-0 px-3">
            <form onSubmit={(e)=>searchHandler(e)} className="w-100 m-0 d-flex" required autoComplete="off">
              <input className="search-input-field input w-100 m-0 px-4 py-2" type="text" placeholder="Type the username..." name="search"/>
              <button action="submit" className="btn btn-dark ml-2 search-btn p-1"><AiOutlineSearch size={30}/></button>
            </form>
            <hr/>
          </div>
          {props.msg && 
            <div className="m-0 p-0 text-center">
              <p>{props.msg}</p>
            </div>
          }
          {props.searchedUser && 
            <div className="m-0 p-0 d-flex justify-content-center">
              <div className = "search-item d-flex align-items-center px-3 py-2">
                <div className = "user2ImgDiv p-0 my-auto" style={{"backgroundImage":`url(${props.searchedUser.imgUrl})`}}></div>
                <div className = "mx-2">{props.searchedUser.name}</div>
                <div className = "ml-auto mr-4">
                </div>
                {props.searchedUser.username===props.user.username ?
                  <></> :
                  (props.user.people.filter(item => item===props.searchedUser._id).length===0) ?
                  <button onClick={()=>starPeople()} className="btn btn-dark ml-2 search-btn p-1"><AiOutlineUserAdd size={30}/></button> :
                  <button className="btn btn-dark ml-2 search-btn p-1"><TiTickOutline size={30}/></button>
                }
              </div>
              <hr className="m-0 p-0"/>
            </div>
          }
        </div>
      }
    </>
	);
}

function mapStateToProps(state){
  return {
    ...state,
  }
}

export default connect(mapStateToProps)(Search);
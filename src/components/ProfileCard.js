import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import { Link, Router, useHistory } from "react-router-dom";

import { GoPrimitiveDot } from "react-icons/go"; 
import { BiNotepad } from "react-icons/bi"; 
import { MdSettings } from "react-icons/md"; 
import { FaUserCircle } from "react-icons/fa"; 

import "./profileCard.css"
import { dateConvert } from "../helpers/dateTime";

function ProfileCard(props) {

  useEffect(() => {
    console.log("profile-card");
  },[]);

  const { user } = props;
  const history = useHistory();

  return (
		<>
      {user && 
        <div className = "bg-blue profileCard p-2 m-2">
          <button onClick={()=>history.push("/profile")} className="btn btn-dark float-right settings-btn p-1">
            <MdSettings size={30}/>
          </button>
          <div className="row p-0 m-0 py-2">
            <div className = "profileImgDiv p-0 ml-3" style={{"backgroundImage":`url(${user.imgUrl})`}}></div>
            <div className = "col-6 my-auto align-items-center">
              <h5 className="m-0 p-0">{user.username}</h5>
              <p className="m-0 p-0 align-items-center joined">
                <span>{`Joined on ${dateConvert(user.dateJoined)}`}</span>
              </p>
            </div>
          </div>
          <>
            <div className = "col-12">
              <hr className="w-100"/>
              <p>
                <FaUserCircle className="mb-1 mr-2" size={20}/>
                {user.name}
                <br/>
                <BiNotepad className="mb-1 mr-2" size={20}/>
                {user.bio}
              </p>
            </div>
          </>
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

export default connect(mapStateToProps)(ProfileCard);
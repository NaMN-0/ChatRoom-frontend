import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import { Link, Router, useHistory } from "react-router-dom";

import { GoPrimitiveDot } from "react-icons/go"; 
import { FcSettings } from "react-icons/fc"; 

import "./profileCard.css"

function ProfileCard(props) {

  const { user } = props;

  return (
		<>
      {user && 
        <div className = "bg-blue profileCard p-2 m-2">
          <button className="btn btn-light float-right settings-btn p-1">
            <FcSettings size={30}/>
          </button>
          <div className="row p-0 m-0 py-2">
            <div className = "profileImgDiv p-0 ml-3" style={{"backgroundImage":`url(${user.imgUrl})`}}></div>
            <div className = "col-6 my-auto align-items-center">
              <h5 className="m-0 p-0">{user.username}</h5>
              {/* <p className="m-0 p-0 align-items-center">
                {user.status ? <span className="online"><GoPrimitiveDot size={15} />Online</span> : <span className="lastSeen">Last Seen at {user.lastSeen}</span>}
              </p> */}
            </div>
          </div>
          <>
            <div className = "col-12">
              <hr/>
              <p>
                {user.name}
                <br/>
                {user.bio}
              </p>
            </div>
          </>
          <hr/>
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
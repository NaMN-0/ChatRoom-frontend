import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import { Link, Router, useHistory } from "react-router-dom";

import { GoPrimitiveDot } from "react-icons/go"; 
import { FcSettings } from "react-icons/fc"; 

import "./profileCard.css"

function ProfileCard(props) {

  // const { user } = props;
  const user = {
    name : "Naman Mishra",
    username : "NaMN",
    imgUrl : "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    status: 1,
    lastSeen: "14:21",
    bio : "This is my bio. I want to write many things so that this statement takes some space.",
    interests : ["Technology", "Science", "Politics", "Space", "Physics"],
  }

  const randomColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    if(r<100 && g<100 && b<100){
      r = 255-r;
      g = 255-g;
      b = 255-b;
    }
    let color = `rgba(${r}, ${g}, ${b}, 0.8`;
    return color;
  }

  return (
		<>
      <div className = "bg-blue profileCard p-2 m-2">
        <button className="btn btn-light float-right settings-btn">
          <FcSettings size={30} />
        </button>
        <div className="row p-0 m-0 py-2">
          <div className = "profileImgDiv p-0 ml-3" style={{"background-image":`url(${user.imgUrl})`}}></div>
          <div className = "col-6 my-auto align-items-center">
            <h5 className="m-0 p-0">NaMN</h5>
            <p className="m-0 p-0 align-items-center">
              {user.status ? <span className="online"><GoPrimitiveDot size={15} />Online</span> : <span className="lastSeen">Last Seen at {user.lastSeen}</span>}
            </p>
          </div>
        </div>
        <>
          <div className = "col-12">
            <hr/>
            <p>{user.name}</p>
          </div>
          <div className = "col-12">
            <p>{user.bio}</p>
          </div>
        </>
        <>
          <div className = "col-12 mb-1">
            <hr/>
            <div className="row interests d-flex text-center justify-content-center">
              {user.interests && user.interests.map(interest => {
                const color = randomColor();
                return <div className="interest-span px-3 py-1 m-2 " style={{"backgroundColor" : color}}>{interest}</div>
              })}
            </div>
          </div>
        </>
        <hr/>
      </div>
    </>
	);
}

function mapStateToProps(state){
  return {
    ...state,
  }
}

export default connect(mapStateToProps)(ProfileCard);
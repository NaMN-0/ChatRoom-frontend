import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import { Link, Router, useHistory } from "react-router-dom";

import "./profileCard.css"

function ProfileCard(props) {

  // const { user } = props;
  const user = {
    name : "Naman Mishra",
    username : "NaMN",
    imgUrl : "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    bio : "This is my bio. I want to write many things so that this statement takes some space.",
    interests : ["Technology", "Science", "Politics", "Space", "Physics"],
  }

  const colors = [
    "rgba(150, 145, 58, 0.8)",
    "rgba(150, 41, 176, 0.8)",
    "rgba(150, 201, 58, 0.8)",
    "rgba(255, 201, 58, 0.8)",
    "rgba(255, 201, 195, 0.8)",
    "rgba(255, 39, 195, 0.8)",
    "rgba(150, 41, 176, 0.8)",
    "rgba(255, 50, 2, 0.8)",
    "rgba(0, 142, 215, 0.8)",
    "rgba(41, 250, 0, 0.8)"
  ];

  const randomColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = `rgba(${r}, ${g}, ${b}, 0.8`;
    return color;
  }

  return (
		<>
      <div className = "profileCard row p-0 m-2 align-items-center">
        <div className = "col-3 profileImgDiv p-0 ml-3 mt-3 " style={{"background-image":`url(${user.imgUrl})`}}>
        </div>
        <div className = "col-6">
          <h5>@{user.username}</h5>
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
            <div className="row interests d-flex text-center">
              {user.interests && user.interests.map(interest => {
                const color = randomColor();
                return <div className="col interest-span px-2 m-2" style={{"backgroundColor" : color}}>{interest}</div>
              })}
            </div>
          </div>
        </>
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
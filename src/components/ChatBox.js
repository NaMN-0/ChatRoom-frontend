import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import { Link, Router, useHistory } from "react-router-dom";

import "./chatbox.css"

import { GoPrimitiveDot } from "react-icons/go"; 

function ChatBox(props) {

  const user = {
    roll : 1,
    name : "Naman Mishra",
    username : "NaMN",
    imgUrl : "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    status: 1,
    lastSeen: "12:21 pm",
    bio : "This is my bio. I want to write many things so that this statement takes some space.",
    interests : ["Technology", "Science", "Politics", "Space", "Physics"],
  }
  const user2 = {
    roll : 2,
    name : "Shawn Chinkjo",
    username : "Ch1nkj0",
    imgUrl : "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
    status: 1,
    lastSeen: "12:21 pm",
    bio : "This is my bio. I want to write many things so that this statement takes some space.",
    interests : ["Technology", "Science", "Politics", "Space", "Physics"],
  }
  const messages = [
    {
      id : 1,
      sender : 1,
      msg : "Hi",
      time : "11:39 am",
    },
    {
      id : 1,
      sender : 2,
      msg : "Hey!",
      time : "11:39 am",
    },
    {
      id : 1,
      sender : 1,
      msg : "Whats Up??",
      time : "11:40 am",
    },
  ]
  return (
		<>
      <div className="mt-2">
        <div className = "chat-header w-100 d-flex align-items-center pl-2">
          <div className = "user2ImgDiv p-0 my-auto" style={{"background-image":`url(${user2.imgUrl})`}}></div>
          <div className = "mx-2">{user2.name}</div>
          <div className = "ml-auto mr-4">
            <p className="m-0 p-0 align-items-center">
              {user2.status ? <span className="online"><GoPrimitiveDot size={15} />Online</span> : <span className="lastSeen">Last Seen at {user.lastSeen}</span>}
            </p>
          </div>
        </div>
        <div className = "bg-blue chatbox p-2 my-2">
          <div className = "row m-0 p-0">
            {messages.map(item => {
              return(
                (user.roll===item.sender) ? 
                  <div className="col-12"><div className="msg px-2 py-1 m-1">{item.msg}<span className="msgTime ml-2">{item.time}</span></div></div> : 
                  <div className="col-12"><div className="msg px-2 py-1 m-1 user-msg float-right">{item.msg}<span className="msgTime ml-2">{item.time}</span></div></div> 
                )
            })}
          </div>
        </div>
        <div className = "bg-blue chat-input p-2 m-0">
          <form className="d-flex align-content-center w-100 m-0">
            <input className="msg-input-field m-0 px-2 w-100" type="text" name="msg"/>
            <button className="btn btn-dark mx-1" action="submit">Send</button>
          </form>
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

export default connect(mapStateToProps)(ChatBox);
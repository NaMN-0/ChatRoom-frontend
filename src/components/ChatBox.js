import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import { Link, Router, useHistory } from "react-router-dom";

import "./chatbox.css"

import { GoPrimitiveDot } from "react-icons/go"; 
import { AiOutlineSend } from "react-icons/ai"; 

function ChatBox(props) {

  const { user, user2 } = props;
  const messages = [];
  console.log(user2);

  return (
		<>
      {user &&
        user2 ? (
          <div className="mt-2">
            <div className = "chat-header w-100 d-flex align-items-center pl-2">
              <div className = "user2ImgDiv p-0 my-auto" style={{"backgroundImage":`url(${user2.imgUrl})`}}></div>
              <div className = "mx-2">{user2.name}</div>
              {/* <div className = "ml-auto mr-4">
                <p className="m-0 p-0 align-items-center">
                  {user2.status ? <span className="online"><GoPrimitiveDot size={15} />Online</span> : <span className="lastSeen">Last Seen at {user.lastSeen}</span>}
                </p>
              </div> */}
            </div>
            <div className = "bg-blue chatbox p-2 my-2">
              <div className = "row m-0 p-0">
                {messages.map((item, index) => {
                  return(
                    (user.roll===item.sender) ? 
                      <div className="col-12" key={index}><div className="msg px-2 py-1 m-1">{item.msg}<span className="msgTime ml-2">{item.time}</span></div></div> : 
                      <div className="col-12" key={index}><div className="msg px-2 py-1 m-1 user-msg float-right">{item.msg}<span className="msgTime ml-2">{item.time}</span></div></div> 
                    )}
                )}
              </div>
            </div>
            <div className = "bg-blue chat-input p-2 m-0">
              <form className="d-flex align-content-center w-100 m-0" autoComplete="off">
                <input className="msg-input-field m-0 px-2 w-100" type="text" name="msg"/>
                <button className="btn btn-success ml-2 send-btn d-flex align-items-center" action="submit"><AiOutlineSend size={20}/></button>
              </form>
            </div>
          </div>
        ) : (
          <div className="mt-2 d-flex justify-content-center align-items-center welcome-screen">
            <div className="text-center">
              <p className="display-4">ChatRoom</p>
              <div className="mx-auto my-2 welcome-img" style={{"backgroundImage":`url(${user && user.imgUrl})`}}></div>
              <h5 className="mt-3">Welcome NaMN</h5>
            </div>
          </div>
        )
      }
    </>
	);
}

function mapStateToProps(state){
  return {
    ...state,
  }
}

export default connect(mapStateToProps)(ChatBox);
import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import { Link, Router, useHistory } from "react-router-dom";

import "./chatbox.css"

import { GoPrimitiveDot } from "react-icons/go"; 
import { AiOutlineSend } from "react-icons/ai"; 

import { sendMsg, setMsgs } from '../actions/chat';
import { socket } from "../helpers/socket";
import { timeConvert } from "../helpers/dateTime";

function ChatBox(props) {

  const { user, user2, messages } = props;
  const [chat, setChat] = useState([]);
  useEffect(() => {
    console.log("chatbox");
  },[]);

  useEffect(() => {
    socket.on('msgReceive', (data) => {
      console.log("msg received : ", data);
      console.log("chat : ", chat);
      setChat([...chat,data.msg]);
    })
    var scrollDiv = document.querySelector(".chatbox");
    if(scrollDiv){
      scrollDiv.scrollTop = scrollDiv.scrollHeight - scrollDiv.clientHeight;
    }
    return () => {
      socket.off('msgReceive');
    }
  },[chat]);

  const sendMsgHandler = (e) => {
    e.preventDefault();
    let chatID;
    if(user._id<=user2._id){
      chatID = `${user._id}-${user2._id}`;
    }
    else{
      chatID = `${user2._id}-${user._id}`;
    }
    const msgText = e.target.msg.value;
    const author = user;
    const receiver = user2;
    if(msgText){
      props.dispatch(sendMsg(chatID,msgText,author,receiver));
    }
    e.target.reset();
  }

  return (
		<>
      {user &&
        user2 ? (
          <div className="chatBox h-100">
            <div className = "chat-header w-100 d-flex align-items-center py-2 pl-2 m-0">
              <div className = "user2ImgDiv p-0 my-auto" style={{"backgroundImage":`url(${user2.imgUrl})`}}></div>
              <div className = "mx-2">{user2.name}</div>
              {/* <div className = "ml-auto mr-4">
                <p className="m-0 p-0 align-items-center">
                  {user2.status ? <span className="online"><GoPrimitiveDot size={15} />Online</span> : <span className="lastSeen">Last Seen at {user.lastSeen}</span>}
                </p>
              </div> */}
            </div>
            <hr className="m-0 p-0"/>
            <div className = "chatbox p-2 my-2">
              <div className = "row m-0 p-0">
                {messages && messages.map((item, index) => {
                  return(
                    (user._id!==item.user1ID) ? 
                      <div className="col-12" key={index}><div className="msg px-2 py-1 m-1">{item.msgText}<span className="msgTime ml-2">{timeConvert(item.date)}</span></div></div> : 
                      <div className="col-12" key={index}><div className="msg px-2 py-1 m-1 user-msg float-right">{item.msgText}<span className="msgTime ml-2">{timeConvert(item.date)}</span></div></div> 
                    )}
                )}
                {chat && chat.map((item, index) => {
                  return(
                    (user._id!==item.user1) ? 
                      <div className="col-12" key={index}><div className="msg px-2 py-1 m-1">{item.msgText}<span className="msgTime ml-2">{timeConvert(item.date)}</span></div></div> : 
                      <div className="col-12" key={index}><div className="msg px-2 py-1 m-1 user-msg float-right">{item.msgText}<span className="msgTime ml-2">{timeConvert(item.date)}</span></div></div> 
                    )}
                )}
              </div>
            </div>
            <hr className="m-0 p-0"/>
            <div className = "chat-input p-2 m-0">
              <form onSubmit={(e)=>sendMsgHandler(e)} className="d-flex align-content-center w-100 m-0" autoComplete="off">
                <input className="msg-input-field my-0 my-md-1 px-2 w-100" type="text" name="msg"/>
                <button className="btn btn-success ml-2 px-2 my-md-1 send-btn d-flex align-items-center" action="submit"><AiOutlineSend size={17}/></button>
              </form>
            </div>
          </div>
        ) : (
          <div className="m-0 h-100 d-flex justify-content-center align-items-center welcome-screen">
            <div className="text-center">
              <p className="display-4">ChatRoom</p>
              <div className="mx-auto my-2 welcome-img" style={{"backgroundImage":`url(${user && user.imgUrl})`}}></div>
              <h5 className="mt-3">Welcome {user && user.name}</h5>
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
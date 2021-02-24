import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import { Link, Router, useHistory } from "react-router-dom";

import "./people.css"

import { GoPrimitiveDot } from "react-icons/go"; 
import { AiOutlineWechat } from "react-icons/ai"; 

import { setUser2 } from "../actions/user"
import { setMsgs } from "../actions/chat"
import { compose } from "redux";
import { setPage } from "../actions/helpers";

function People(props) {

  const history = useHistory();

  const { user, peopleList } = props;

  useEffect(() => {
    console.log("people");
  },[]);

  const [curQuery,setCurQuery] = useState("");

  const handleQueryChange = (e) => {
    const query = e.target.value.toLowerCase();
    setCurQuery(query);
  }

  const user2Handler = (user2) => {
    props.dispatch(setUser2(user2));
    if(user && user2){
      let chatID;
      if(user._id<=user2._id){
        chatID = `${user._id}-${user2._id}`;
      }
      else{
        chatID = `${user2._id}-${user._id}`;
      }
      props.dispatch(setMsgs(user,user2,chatID));
      props.dispatch(setPage("chat"));
    }
  }

  // const peopleList1 = [user,user,user,user,user,user,user,user,user,user,user,user];
  // const peopleList1 = [];

  return (
		<>
      {user && 
        <div className="people h-100">
          {/* <div className = "people-header text-center w-100 pt-3">
            <h3 className="d-flex justify-content-center align-items-center"><AiOutlineWechat size={40}/> <span className="mx-2">Starred People ({peopleList && peopleList.length})</span></h3>
          </div>
          <hr/> */}
          <div className = "p-0 m-0 px-3">
            <form onSubmit={(e)=>e.preventDefault()} className="w-100 m-0" autoComplete="off">
              <input onChange={(e)=>handleQueryChange(e)} className="search-input-field input m-0 px-4 py-2 mt-3 w-100" type="text" placeholder="Recent Chats..." name="search"/>
            </form>
          </div>
          <hr/>
          <div className="people-list m-0 p-0">
            {peopleList && peopleList.length===0 && 
              <div className="empty-people-list text-center m-2">
                <p>
                  No one to display yet!
                </p>
                <p>
                  search "NaMN" in Find People
                </p>
              </div>
            }
            {peopleList && peopleList.map((item, index) => {
              return(
                item.name.toLowerCase().includes(curQuery) ? 
                (
                  <div onClick={() => user2Handler(item)} key={index} className="m-0 p-0 link-hover">
                    <div className = "people-item d-flex align-items-center px-3 py-2">
                      <div className = "user2ImgDiv p-0 my-auto" style={{"backgroundImage":`url(${item.imgUrl})`}}></div>
                      <div className = "mx-3"><p className="m-0 p-0">{item.name}</p></div>
                      {/* <div className = "ml-auto mr-4">
                        <p className="m-0 p-0 align-items-center">
                          {item.status ? <span className="online"><GoPrimitiveDot size={15} />Online</span> : <span className="lastSeen">Last Seen at {user.lastSeen}</span>}
                        </p>
                      </div> */}
                    </div>
                    <hr className="m-0 ml-3 mr-2 p-0"/>
                  </div>
                ) : (<span key={index}></span>)
              );
            })}
          </div>
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

export default connect(mapStateToProps)(People);
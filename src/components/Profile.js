import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import { Link, Router, useHistory } from "react-router-dom";

import { AiOutlineUser } from "react-icons/ai"; 
import { AiOutlineInfoCircle } from "react-icons/ai"; 
import { MdEdit } from "react-icons/md"; 
import { AiFillCamera } from "react-icons/ai"; 
import { TiTickOutline } from "react-icons/ti"; 
import { AiOutlineClose } from "react-icons/ai"; 

import NavBar from "./Navbar";

import "./dPEditForm.css";
import "./profile.css"

import { updateDP } from "../actions/user.js";
import { editProfile } from "../actions/user";

function Profile(props) {

  const { user } = props;
  const history = useHistory();

  const [name, setName] = useState(user ? user.name : null);
  const [bio, setBio] = useState(user ? user.bio : null);
  const [nameForm, setNameForm] = useState(false);
  const [bioForm, setBioForm] = useState(false);
  const [DPForm, setDPForm] = useState(false);
  const [file,setFile] = useState(null);

  const handlePreview = (e) => {
    e.preventDefault();
    if(e.target.files.length){
      const file = e.target.files[0];
      if(file.type=="image/jpeg" || file.type=="image/png"){
        setFile(URL.createObjectURL(file));
      }
      else{
        setFile(null);
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let curFile = e.target.file.files[0];
    if(curFile){
      let data = new FormData();
      data.append("id",user._id);
      data.append("file",curFile);
      props.dispatch(updateDP(data));
      setDPForm(false);
    }
  }

  const editNameHandler = () => {
    if(nameForm){
      const change = {
        name : name
      }
      if(name!==user.name){
        props.dispatch(editProfile(user._id,change));
      }
      setNameForm(false);
    }
    else{
      setNameForm(true);
    }
  }
  const editBioHandler = () => {
    if(bioForm){
      const change = {
        bio : bio
      }
      if(bio!==user.bio){
        props.dispatch(editProfile(user._id,change));
      }
      setBioForm(false);
    }
    else{
      setBioForm(true);
    }
  }
  const editDPHandler = () => {
    if(!DPForm){
      setDPForm(true);
    }
  }

  return (
		<> 
      <NavBar/>
      {DPForm && 
      <div className="black-sheet d-flex justify-content-center align-items-center">
        <div className="dpForm mx-auto p-5">
          <button onClick={()=>setDPForm(false)} className="btn btn-dark m-0 p-1 close-btn">
            <AiOutlineClose size={30}/>
          </button>
          <form onSubmit={(e)=>handleSubmit(e)} encType="multipart/form-data">
            <input onChange={(e)=>handlePreview(e)} type="file" name="file"/>
            <button action="submit" className="btn btn-light btn-upload m-0 p-1">
              <TiTickOutline size={30}/>
            </button>
          </form>
          <hr/>
          <div className="preview-div default-img p-0 mx-auto mt-3">
            <img className="preview-div" src={file}/>
          </div>
        </div>
      </div>
      }
      {user && 
        <div className="profileEdit-container row m-0 p-0 d-flex justify-content-center align-items-center">
          <div className = "profileEdit mx-auto bg-blue p-2 m-2 col-lg-4 col-md-10 col-sm-12">
            <div className="row p-0 m-0 py-2">
              <div className = "profileImgEditDiv p-0 ml-3" style={{"backgroundImage":`url(${user.imgUrl})`}}>
                <AiFillCamera onClick={()=>editDPHandler()} className="m-0 p-1 edit-pic" size={30}/>
              </div>
              <div className = "col-6 my-auto align-items-center">
                <h5 className="m-0 p-0">{user.username}</h5>
              </div>
            </div>
            <>
              <div className = "col-12 align-items-center">
                <hr/>
                <div className="m-0 p-0 row">
                  <AiOutlineUser className="col-1 m-0 p-0" size={25}/>
                  {nameForm ? 
                    <>
                      <input onChange={(e)=>setName(e.target.value)} type="text" name="name" value={name} className="col-10 my-auto px-1 edit-input"/>
                      <div className="col-1 p-0 m-0">
                        <TiTickOutline onClick={()=>editNameHandler()} className="btn btn-light m-0 p-1 edit-pencil" size={30}/>
                      </div>
                    </> :
                    <>
                      <p className="col-10 px-1 my-auto">{name}</p>
                      <div className="col-1 p-0 m-0">
                        <MdEdit onClick={()=>editNameHandler()} className="btn btn-light m-0 p-1 edit-pencil" size={30}/>
                      </div>
                    </>
                  }
                </div>
                <hr/>
                <div className="m-0 p-0 row">
                  <AiOutlineInfoCircle className="col-1 m-0 p-0" size={25}/>
                  {bioForm ? 
                    <>
                      <input onChange={(e)=>setBio(e.target.value)} type="text" name="bio" value={bio} className="col-10 my-auto px-1 edit-input"/>
                      <div className="col-1 p-0 m-0">
                        <TiTickOutline onClick={()=>editBioHandler()} className="btn btn-light m-0 p-1 edit-pencil" size={30}/>
                      </div>
                    </> :
                    <>
                      <p className="col-10 px-1 my-auto">{bio}</p>
                      <div className="col-1 p-0 m-0">
                        <MdEdit onClick={()=>editBioHandler()} className="btn btn-light m-0 p-1 edit-pencil" size={30}/>
                      </div>
                    </>
                  }
                </div>
              </div>
            </>
            <hr/>
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

export default connect(mapStateToProps)(Profile);
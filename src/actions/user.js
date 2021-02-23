import axios from 'axios';
import { FETCH_REQUEST, FETCH_FAILURE, 
    GET_USER_SUCCESS, 
    SEARCH_USER_SUCCESS, SEARCH_USER_FAILURE, 
    ADD_PEOPLE_SUCCESS, ADD_PEOPLE_FAILURE, 
    SET_USER2,
    EDIT_PROFILE_FAILURE, EDIT_PROFILE_SUCCESS,
    EDIT_DP_FAILURE, EDIT_DP_SUCCESS,
    GET_PEOPLE_DETAILS_SUCCESS
 } from './actionTypes';
import { apiUrls } from '../helpers/urls';
import jwt from "jsonwebtoken";

import { socket } from "../helpers/socket";

export function fetchRequest(){
    return{
        type: FETCH_REQUEST,
    }
}

export function fetchFailure(err){
    return{
        type: FETCH_FAILURE,
        payload: err
    }
}

export function getUserSuccess(user){
    return{
        type: GET_USER_SUCCESS,
        payload: user,
    }
}

export function getUser(user_id){
    return function(dispatch){
        let url = apiUrls.getUser()+`?id=${user_id}`;
        // dispatch(fetchRequest());
        axios
            .get(url)
            .then(res => {
                if(res.data){
                    const user = res.data;
                    console.log("success");
                    socket.emit("login",user_id);
                    dispatch(getPeopleDetails(user.people));
                    dispatch(getUserSuccess(user));
                }
                else{
                    let err = res.data.msg;
                    console.log("failure1");
                    dispatch(fetchFailure(err));
                }
            })
            .catch(err => {
                console.log("failure2");
                dispatch(fetchFailure(err.msg));
            })
    }
}
export function getPeopleDetailSuccess(peopleDetailList){
    return {
        type: GET_PEOPLE_DETAILS_SUCCESS,
        payload: peopleDetailList
    }
}

export function getPeopleDetails(peopleList){
    return function(dispatch){
        let url = apiUrls.getPeopleDetails();
        axios
            .post(url, peopleList)
            .then(res => {
                if(res.data){
                    const peopleDetailList = res.data;
                    dispatch(getPeopleDetailSuccess(peopleDetailList));
                }
                else{
                    let err = res.data.msg;
                    console.log("failure1");
                    dispatch(fetchFailure(err));
                }
            })
            .catch(err => {
                console.log("failure2");
                dispatch(fetchFailure(err.msg));
            })
    }
}

export function searchUserSuccess(user){
    return{
        type: SEARCH_USER_SUCCESS,
        payload: user
    }
}

export function searchUserFailure(user){
    return{
        type: SEARCH_USER_FAILURE,
        payload: user
    }
}

export function searchUser(query){
    return function(dispatch){
        let url = apiUrls.searchUser()+`?query=${query}`;
        dispatch(fetchRequest());
        axios
            .get(url)
            .then(res => {
                if(res.data.msg){
                    let err = res.data.msg;
                    dispatch(searchUserFailure(err));
                }
                else{
                    const user = res.data;
                    dispatch(searchUserSuccess(user));
                }
            })
            .catch(err => {
                dispatch(searchUserFailure(err.msg));
            })
    }
}

export function addPeopleSuccess(user){
    return{
        type: ADD_PEOPLE_SUCCESS,
        payload: user
    }
}

export function addPeopleFailure(err){
    return{
        type: ADD_PEOPLE_FAILURE,
        payload: err
    }
}

export function addPeople(id1,id2){
    return function(dispatch){
        let url = apiUrls.addPeople()+`?id1=${id1}&id2=${id2}`;
        dispatch(fetchRequest());
        axios
            .put(url)
            .then(res => {
                if(res.data.msg){
                    let err = res.data.msg;
                    dispatch(addPeopleFailure(err));
                }
                else{
                    const user = res.data;
                    dispatch(addPeopleSuccess(user));
                    dispatch(getPeopleDetails(user.people));
                }
            })
            .catch(err => {
                dispatch(addPeopleFailure(err.msg));
            })
    }
}

export function setUser2(user){
    return{
        type: SET_USER2,
        payload: user
    }
}

export function editProfileFailure(err){
    return{
        type: EDIT_PROFILE_FAILURE,
        payload: err
    }
}

export function editProfileSuccess(user){
    return{
        type: EDIT_PROFILE_SUCCESS,
        payload: user
    }
}

export function editProfile(id,change){
    return function(dispatch){
        let url = apiUrls.editProfile();
        const json = {
            id,
            change
        }
        dispatch(fetchRequest());
        axios
            .put(url,json)
            .then(res => {
                if(res.data.msg){
                    let err = res.data.msg;
                    dispatch(editProfileFailure(err));
                }
                else{
                    const user = res.data;
                    dispatch(editProfileSuccess(user));
                }
            })
            .catch(err => {
                dispatch(editProfileFailure(err.msg));
            })
    }
}

export function editDPFailure(err){
    return{
        type: EDIT_DP_FAILURE,
        payload: err
    }
}

export function editDPSuccess(user){
    return{
        type: EDIT_DP_SUCCESS,
        payload: user
    }
}

export function updateDP(data){
    return function(dispatch){
        let url = apiUrls.editDP();
        dispatch(fetchRequest());
        axios
            .post(url,data,{
                headers: {
                    "Content-type": "multipart/form-data"
                }
            })
            .then(res => {
                if(res.data.msg){
                    let err = res.data.msg;
                    dispatch(editDPFailure(err));
                }
                else{
                    const user = res.data;
                    dispatch(editDPSuccess(user));
                }
            })
            .catch(err => {
                dispatch(editDPFailure(err.msg));
            })
    }
}

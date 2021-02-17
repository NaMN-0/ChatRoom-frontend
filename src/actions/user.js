import axios from 'axios';
import { FETCH_REQUEST, FETCH_FAILURE, GET_USER_SUCCESS, SEARCH_USER_SUCCESS, SEARCH_USER_FAILURE, ADD_PEOPLE_SUCCESS, ADD_PEOPLE_FAILURE, SET_USER2 } from './actionTypes';
import { apiUrls } from '../helpers/urls';
import jwt from "jsonwebtoken";

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
        dispatch(fetchRequest());
        axios
            .get(url)
            .then(res => {
                if(res.data){
                    const user = res.data;
                    dispatch(getUserSuccess(user));
                }
                else{
                    let err = res.data.msg;
                    dispatch(fetchFailure(err));
                }
            })
            .catch(err => {
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

export function addPeopleFailure(user){
    return{
        type: ADD_PEOPLE_FAILURE,
        payload: user
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

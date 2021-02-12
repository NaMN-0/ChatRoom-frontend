import axios from 'axios';
import { FETCH_REQUEST, FETCH_FAILURE, REGISTER_SUCCESS, LOGIN_SUCCESS, AUTHENTICATE_USER, LOGOUT } from './actionTypes';
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

export function registerSuccess(user_id){
    return{
        type: REGISTER_SUCCESS,
        payload: user_id,
    }
}

export function register(user){
    return function(dispatch){
        let url = apiUrls.register();
        dispatch(fetchRequest());
        axios
            .post(url, user)
            .then(res => {
                if(res.data.id){
                    let user_id = res.data.id;
                    dispatch(registerSuccess(user_id));
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

export function loginSuccess(user_id){
    return{
        type: LOGIN_SUCCESS,
        payload: user_id,
    }
}

export function login(user){
    return function(dispatch){
        let url = apiUrls.login();
        dispatch(fetchRequest());
        axios
            .post(url, user)
            .then(res => {
                if(res.data.token){
                    const token = res.data.token;
                    localStorage.setItem('auth-token', token);
                    dispatch(authenticateUser(token));
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

export function authenticateUser(token){
    const user = jwt.decode(token);
    return {
        type: AUTHENTICATE_USER,
        payload: user
    }
}

export function logout(){
    return {
        type: LOGOUT,
    }
}

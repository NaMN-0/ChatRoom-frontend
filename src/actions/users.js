import axios from 'axios';
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes';
import { apiUrls } from '../helpers/urls';

export function fetchRequest(){
    return{
        type: FETCH_REQUEST,
    }
}

export function fetchSuccess(data){
    return{
        type: FETCH_SUCCESS,
        payLoad: data,
    }
}

export function fetchFailure(err){
    return{
        type: FETCH_FAILURE,
        payLoad: err
    }
}

export function fetchUsers(){
    return function(dispatch){
        let url = apiUrls.getUsers();
        dispatch(fetchRequest());
        axios
            .get(url)
            .then(res => {
                let users = res.data;
                dispatch(fetchSuccess(users));
            })
            .catch(err => {
                dispatch(fetchFailure(err));
            })
    }
}
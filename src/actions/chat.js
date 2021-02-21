import axios from 'axios';
import { FETCH_REQUEST, FETCH_FAILURE, GET_MSG_SUCCESS } from './actionTypes';
import { apiUrls } from '../helpers/urls';

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

export function setMsgSuccess(msgs){
    console.log(msgs);
    return{
        type: GET_MSG_SUCCESS,
        payload: msgs,
    }
}

export function setMsgs(chatID){
    return function(dispatch){
        let url = apiUrls.getMsgs()+`?chatID=${chatID}`;
        axios
            .get(url)
            .then(res => {
                console.log("res : ", res);
                if(!res.data.msg){
                    const msgs = res.data;
                    dispatch(setMsgSuccess(msgs));
                }
                else{
                    let err = res.data.msg;
                    dispatch(fetchFailure(err));
                }
            })
            .catch(err => {
                throw err;
            })
    }
}

export function sendMsg(chatID,msgText,author){
    return function(dispatch){
        let url = apiUrls.sendMsg();
        dispatch(fetchRequest());
        const json = {
            chatID,msgText,author
        }
        console.log(json);
        axios
            .post(url, json)
            .then(res => {
                if(!res.data.msg){
                    dispatch(setMsgs(chatID));
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


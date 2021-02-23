import axios from 'axios';
import { FETCH_REQUEST, FETCH_FAILURE, GET_MSG_SUCCESS } from './actionTypes';
import { apiUrls } from '../helpers/urls';

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

export function setMsgSuccess(msgs){
    console.log(msgs);
    return{
        type: GET_MSG_SUCCESS,
        payload: msgs,
    }
}

export function setMsgs(user1,user2,chatID){
    return function(dispatch){
        socket.emit('join',{chatID});
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

export function sendMsg(chatID,msgText,author,receiver){
    return function(dispatch){
        let url = apiUrls.sendMsg();
        // dispatch(fetchRequest());
        const user1ID = author._id;
        const json = {
            chatID,msgText,user1ID
        }
        console.log(json);
        axios
            .post(url, json)
            .then(res => {
                if(!res.data.msg){
                    const user1 = author._id;
                    const user2 = receiver._id;
                    console.log("a msg was sent");
                    const date = Date.now();
                    socket.emit('sendMsg',{chatID,msgText,user1,user2,date});
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


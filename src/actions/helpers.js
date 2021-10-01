import { CLEAR_ERR, SET_PAGE } from './actionTypes';

export function clearErr(){
    return{
        type: CLEAR_ERR,
    }
}

export function setPage(page){
    return{
        type: SET_PAGE,
        payload: page
    }
}
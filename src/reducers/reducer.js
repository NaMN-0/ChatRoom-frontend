import { FETCH_FAILURE, FETCH_REQUEST, 
    LOGIN_SUCCESS, REGISTER_SUCCESS, AUTHENTICATE_USER, 
    CLEAR_ERR, LOGOUT, 
    GET_USER_SUCCESS, 
    SEARCH_USER_SUCCESS, SEARCH_USER_FAILURE,
    ADD_PEOPLE_SUCCESS, ADD_PEOPLE_FAILURE,
    SET_USER2
 } from '../actions/actionTypes';

const initState = {
    loading: false,
    userToken: null,
    user: null,
    user2: null,
    msg: "",
    isLoggedIn: false,
    searchedUser: null
}

export default function reducer(state = initState, action){
    switch(action.type){
        case FETCH_REQUEST : 
            return{
                ...state,
                loading: true,
                msg: "" 
            }
        case FETCH_FAILURE : 
            return{
                ...state,
                loading: false,
                msg: action.payload,
            }
        case REGISTER_SUCCESS : 
            return{
                ...state,
                loading: false,
                msg: 'Registered Successfully',
            }
        case LOGIN_SUCCESS : 
            return{
                ...state,
                loading: false,
                userToken: action.payload,
                msg: '',
                isLoggedIn: true,
            }
        case AUTHENTICATE_USER : 
            return{
                ...state,
                loading: false,
                userToken: action.payload,
                msg: '',
                isLoggedIn: true,
            }
        case CLEAR_ERR :
            return{
                ...state,
                msg: '',
            }
        case LOGOUT :
            return{
                ...state,
                loading: false,
                user: null,
                userToken: null,
                msg: '',
                isLoggedIn: false,
            }
        case GET_USER_SUCCESS :
            return{
                ...state,
                loading: false,
                user: action.payload,
                msg: '',
                isLoggedIn: true,
            }
        case SEARCH_USER_SUCCESS :
            return{
                ...state,
                loading: false,
                searchedUser: action.payload,
                msg: '',
            }
        case SEARCH_USER_FAILURE :
            return{
                ...state,
                loading: false,
                searchedUser: null,
                msg: action.payload,
            }
        case ADD_PEOPLE_SUCCESS :
            return{
                ...state,
                loading: false,
                user: action.payload,
                msg: '',
            }
        case ADD_PEOPLE_FAILURE :
            return{
                ...state,
                loading: false,
                searchedUser: null,
                msg: action.payload,
            }
        case SET_USER2 :
            return{
                ...state,
                user2: action.payload
            }
        default: return state
    }
}


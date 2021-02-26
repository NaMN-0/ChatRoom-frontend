import { FETCH_FAILURE, FETCH_REQUEST, 
    LOGIN_SUCCESS, REGISTER_SUCCESS, AUTHENTICATE_USER, 
    CLEAR_ERR, LOGOUT, 
    GET_USER_SUCCESS, 
    SEARCH_USER_SUCCESS, SEARCH_USER_FAILURE,
    ADD_PEOPLE_SUCCESS, ADD_PEOPLE_FAILURE,
    SET_USER2,
    EDIT_PROFILE_FAILURE, EDIT_PROFILE_SUCCESS,
    EDIT_DP_FAILURE, EDIT_DP_SUCCESS,
    GET_MSG_SUCCESS,
    GET_PEOPLE_DETAILS_SUCCESS,
    SET_PAGE
 } from '../actions/actionTypes';

const initState = {
    loading: false,
    userToken: null,
    user: null,
    user2: null,
    msg: "",
    isLoggedIn: false,
    searchedUser: null,
    peopleList: [],
    messages: [],
    page: "chat",
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
                loading: false,
                userToken: null,
                user: null,
                user2: null,
                msg: "",
                isLoggedIn: false,
                searchedUser: null,
                peopleList: [],
                messages: [],
                page: "chat"
            }
        case GET_USER_SUCCESS :
            console.log("old : ", state.user);
            console.log("new : ", action.payload);
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
                user2: action.payload,
                messages: []
            }
        case EDIT_PROFILE_FAILURE :
            return{
                ...state,
                loading: false,
                msg: action.payload,
            }
        case EDIT_PROFILE_SUCCESS :
            return{
                ...state,
                loading: false,
                user: action.payload,
                msg: "",
            }
        case EDIT_DP_FAILURE :
            return{
                ...state,
                loading: false,
                msg: action.payload,
            }
        case EDIT_DP_SUCCESS :
            return{
                ...state,
                loading: false,
                user: action.payload,
                msg: "",
            }
        case GET_MSG_SUCCESS : 
            return{
                ...state,
                messages: action.payload
            }
        case GET_PEOPLE_DETAILS_SUCCESS : 
            console.log("old one : ", state.peopleList);
            return{
                ...state,
                peopleList: action.payload
            }
        case SET_PAGE : 
        console.log("actions called : ", action.payload)
            return{
                ...state,
                page: action.payload
            }
        default: return state
    }
}


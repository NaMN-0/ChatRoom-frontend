import { FETCH_FAILURE, FETCH_REQUEST, LOGIN_SUCCESS, REGISTER_SUCCESS, AUTHENTICATE_USER, CLEAR_ERR, LOGOUT } from '../actions/actionTypes';

const initState = {
    loading: false,
    user: null,
    msg: "",
    isLoggedIn: false
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
                user: null,
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
                user: action.payload,
                msg: 'Logged In Successfully',
                isLoggedIn: true,
            }
        case AUTHENTICATE_USER : 
            return{
                ...state,
                loading: false,
                user: action.payload,
                msg: 'Logged In Successfully',
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
                msg: '',
                isLoggedIn: false,
            }
        default: return state
    }
}


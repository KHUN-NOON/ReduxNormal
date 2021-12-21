import axios from "axios";
import {
    FETCH_USERS_FAILURE,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_REQUEST 
} from './userTypes';

export const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUserSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUserFailure = err => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: err
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest())

        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then( response => {
            const users = response.data

            dispatch(fetchUserSuccess(users))
        })
        .catch( error => {
            dispatch(fetchUserFailure(error.message))
        })
    }
}



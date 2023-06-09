import axios from "axios"
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"


export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (payload) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload,
    }
}

export const fetchUsersFailure = (payload) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload,
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const users = res.data
                dispatch(fetchUsersSuccess(users))
            })
            .catch(err => {
                dispatch(fetchUsersFailure(err.message))
            })
    }
}
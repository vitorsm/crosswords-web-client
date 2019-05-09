import axios from "axios";

import {
    FETCH_USER_LOGIN,
    FETCH_QUESTION,
    FETCH_USER,
    FETCH_QUESTION_CATEGORY } from './types';

const serverURI = "http://localhost:8080";

export const fetchUserLogin = (data) => async dispatch => {

    await axios.post(serverURI + "/serv/auth/authenticate?login=" 
        + data.login + "&password=" + data.password
        .then(
            (res) => {
                
                sessionStorage.setItem("login", res.data.login);
                sessionStorage.setItem("name", res.data.name);
                sessionStorage.setItem("token", res.data.token);
                
                dispatch({ type: FETCH_USER_LOGIN, payload: res.data, status: res.status });
            },
            (error) => {
                dispatch({ type: FETCH_USER_LOGIN, payload: null, status: error });
            }
        )
    );
};
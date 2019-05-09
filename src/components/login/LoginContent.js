import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions";
import '../../styles/Login.css';
import Login from './Login';

class LoginContent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return(
            <div className="loginContent">
                <Login />
            </div>
        );
    }
}

export default LoginContent;
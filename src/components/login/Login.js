import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Paper, Divider } from 'material-ui';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    divLogin: {
        textAlign: "center",
        width: "100%",
        height: "100%"
    },
    paperLogin: {
        position: "relative",
        zIndex: 4,
        boxShadow: "3px 6px 27px -8px rgba(0,0,0,0.75)",
        borderRadius: "10px",
        backgroundColor: "white",
        paddingTop: "20px",
        paddingBottom: "20px",
        margin: "auto",
        width: "90%",
        maxWidth: "350px",
        textAlign: "center",
        marginTop: "100px"
    },
    loginButton: {
        paddingTop: "20px",
	    paddingBottom: "20px"
    },
    linkLogin: {
        paddingTop: "20px",
	    paddingBottom: "20px"
    }
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: null,
            password: null,
            loading: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.userLogin !== this.props.userLogin) {
            this.setState({ loading: false });
        }
    }

    handleChangeLogin = (event) => {
        var key = event.keyCode || event.which;
        if (key == 13) {
            this.setState({
                password: event.target.value,
            });
            this.handleLogin();
        }
        this.setState({
            login: event.target.value,
        });
    };

    handleChangePassword = (event) => {
        var key = event.keyCode || event.which;
        if (key == 13) {
            this.setState({
                password: event.target.value,
            });
            this.handleLogin();
        }

        this.setState({
            password: event.target.value,
        });
    }

    handleLoginClick = () => {
        var data = {
            login: this.state.login,
            password: this.state.password
        };

        this.props.fetchUserLogin(data);
        this.setState({ loading: true });
    }

    render() {
        return(
            <div className = "divLogin">
                <div className = "paperLogin">
                    <TextField
                        floatingLabelStyle = {{ color: "#1C4592" }}
                        underlineFocusStyle = {{ borderColor: "#1C4592" }}
                        className = "text"
                        floatingLabelText = "Login"
                        onKeyPress = { this.handleChangeLogin }
                        onChange = { this.handleChangeLogin }
                    />

                    <TextField
                        className = "text"
                        floatingLabelStyle = { { color: "#1C4592" } }
                        underlineFocusStyle = { { borderColor: "#1C4592" } }
                        floatingLabelText = "Senha"
                        type = "password"
                        onKeyPress = { this.handleChangePassword }
                        onChange = { this.handleChangePassword }
                    />

                    <div className="loginButton">
                        <RaisedButton onClick = { this.handleLoginClick } >Entrar</RaisedButton>
                    </div>

                    <div className="linkLogin">
                        <a>Esqueci minha senha</a>
                    </div>

                    <div className="linkLogin">
                        <a>Criar conta</a>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ userLogin }) {
    return { userLogin };
}

export default connect(mapStateToProps, actions)(Login);
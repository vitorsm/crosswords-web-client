import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducers from "./reducers";
import reduxThunk from "redux-thunk";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

const store = createStore(reducers, {}, compose(applyMiddleware(reduxThunk)));

ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </Provider>,
    document.getElementById("root")
);

// serviceWorker();

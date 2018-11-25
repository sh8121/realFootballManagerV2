import React, {Component} from "react";
import {Router, Route} from "react-router-dom";
import { connect } from "react-redux";
import { history } from "../helpers/history";

import "../stylesheets/bootstrap/css/bootstrap.min.css";
import {PrivateRoute} from "./common/PrivateRoute";
import { HomePage } from "./home/HomePage";
import { LoginPage } from "./login/LoginPage";
import { RegisterPage } from "./register/RegisterPage";

class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const { alert } = this.props;
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                    { alert.message && (
                        alert.successful ?
                            <div className="alert alert-success">{alert.message}</div> :
                            <div className="alert alert-danger">{alert.message}</div>
                    )}
                    </div>
                </div>
                <Router history={history}>
                    <div>
                        <PrivateRoute exact path="/" component={HomePage}/>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/register" component={RegisterPage}/>
                    </div>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state){
    const {alert} = state;
    return {
        alert
    };
}

App = connect(mapStateToProps)(App);

export { App };
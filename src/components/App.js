import React, {Component} from "react";
import {Router, Route} from "react-router-dom";
import { connect } from "react-redux";
import { history } from "../helpers/history";

import {PrivateRoute} from "./common/PrivateRoute";
import { HomePage } from "./home/HomePage";
import { LoginPage } from "./login/LoginPage";
import { RegisterPage } from "./register/RegisterPage";
import { PlayerRoute } from "./player/PlayerRoute";
import { MatchRoute} from "./match/MatchRoute";

class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const { alert } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    { alert.message && (
                        alert.successful ?
                            <div className="alert alert-success">{alert.message}</div> :
                            <div className="alert alert-danger">{alert.message}</div>
                    )}
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Router history={history}>
                            <div>
                                <PrivateRoute exact path="/" component={HomePage}/>
                                <Route path="/login" component={LoginPage}/>
                                <Route path="/register" component={RegisterPage}/>
                                <Route path="/players" component={PlayerRoute}/>
                                <Route path="/matches" component={MatchRoute}/>
                            </div>
                        </Router>
                    </div>
                </div>
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
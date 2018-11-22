import React, {Component} from "react";
import {Router, Route} from "react-router-dom";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { history } from "../helpers/history";

import "../stylesheets/bootstrap/css/bootstrap.min.css";
import {PrivateRoute} from "./common/PrivateRoute";

class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const { alert } = this.props;
        return (
            <Grid container
                direction="column"
                justify="center"
                alignItems="center">
                { alert.message && (
                    alert.successful ?
                        <div className="alert alert-success">{alert.message}</div> :
                        <div className="alert alert-danger">{alert.message}</div>
                )}
                <Router history={history}>

                </Router>
            </Grid>
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
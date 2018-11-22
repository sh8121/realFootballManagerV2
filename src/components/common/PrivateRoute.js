import React from "react";
import {Route, Redirect} from "react-router-dom";
import { helperConstants } from "../../constants";

export const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        localStorage.getItem(helperConstants.LOCAL_STORAGE_KEY) ?
            <Component {...props}/> :
            <Redirect to={{pathname: "/login", state: {from: props.location}}}/>
    )}/>
)
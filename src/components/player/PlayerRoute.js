import React from "react";
import {Route} from "react-router-dom";
import {PlayerListPage} from "./PlayerListPage";
import {PlayerCreatePage} from "./PlayerCreatePage";

export const PlayerRoute = (props) => {
    const {match} = props;
    return(
        <div>
            <Route exact path={match.url} component={PlayerListPage}/>
            <Route path={`${match.url}/create`} component={PlayerCreatePage}/>
        </div>
    );
}
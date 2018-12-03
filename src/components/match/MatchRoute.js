import React from "react";
import {Route} from "react-router-dom";
import {MatchListPage} from "./MatchListPage";
import {MatchBoardPage} from "./MatchBoardPage";

export const MatchRoute = (props) => {
    const {match} = props;

    return (
        <div>
            <Route exact path={`${match.url}`} component={MatchListPage}/>
            <Route path={`${match.url}/create`} component={MatchBoardPage}/>
        </div>
    )
};
import React, {Component} from "react";
import {Route} from "react-router-dom";
import {PlayerListPage} from "./PlayerListPage";
import {PlayerCreatePage} from "./PlayerCreatePage";

class PlayerRoute extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {match} = this.props;
        return(
            <div>
                <Route exact path={match.url} component={PlayerListPage}/>
                <Route path={`${match.url}/create`} component={PlayerCreatePage}/>
            </div>
        );
    }
}

export { PlayerRoute };
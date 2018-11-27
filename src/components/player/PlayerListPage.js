import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {playerActions} from "../../actions";

class PlayerListPage extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    render(){
        return(
            <div>
                <table className="table">
                </table>
            </div>
        );
    }
}

function mapStateToProps(state){
    const {finding, players} = state.finding;
    return{
        finding,
        players
    };
}
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {playerActions} from "../../actions";

class MatchBoardPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            players: [],
            matchRecord: {
                competitorName: "",
                teamScore: 0,
                competitorScore: 0,
                shotCount: 0,
                shotOnTargetCount: 0,
                passCount: 0,
                yellowCardCount: 0,
                redCardCount: 0
            }
        }
    }

    componentDidMount(){
        const 
    }

    render(){

    }
}
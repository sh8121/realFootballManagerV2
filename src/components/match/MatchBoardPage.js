import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Field} from "./field/Field";

import {playerServices} from "../../services";

class MatchBoardPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            players: {},
            matchRecord: {
                competitorName: "",
                teamScore: 0,
                competitorScore: 0,
                shot: 0,
                shotOnTarget: 0,
                pass: 0,
                yellowCard: 0,
                redCard: 0
            }
        }
    }

    componentDidMount(){
        let that = this;
        const players = {};

        playerServices.findByTeam()
            .then((result) => {
                if(result && result.players && result.players.length > 0){
                    result.players.forEach((player) => {
                        players[player.formationNumber] = {
                            id: player.id,
                            name: player.name,
                            number: player.number,
                            goal: 0,
                            shot: 0,
                            shotOnTarget: 0,
                            pass: 0,
                            yellowCard: 0,
                            redCard: 0
                        }
                    });
                    that.setState({
                        players
                    });
                }
            });
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Field players={this.state.players}/>
                    </div>
                </div>
            </div>
        );
    }
}



export { MatchBoardPage };
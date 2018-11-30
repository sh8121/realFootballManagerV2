import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Field} from "./field/Field";
import {RecordModal} from "./field/RecordModal";

import {playerServices} from "../../services";

const $ = require("jquery")(window);


class MatchBoardPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            players: {},
            activeFormationNumber: -1,
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
        };

        //this.recordModal = React.createRef();

        this.handleActivate = this.handleActivate.bind(this);
        this.handleDeactivate = this.handleDeactivate.bind(this);
        this.handleRecord = this.handleRecord.bind(this);
        this.handlePlayerChange = this.handlePlayerChange.bind(this);
    }

    handleActivate(formationNumber){
        this.setState({
            activeFormationNumber: formationNumber
        });
        $("#recordModal").modal("show");
    }

    handleDeactivate(){
        this.setState({
            activeFormationNumber: -1
        });
        $("#recordModal").modal("hide");
    }

    handleRecord(recordType){
        const {players, activeFormationNumber} = this.state;
        players[activeFormationNumber][recordType]++;
        this.setState({
            players
        });
    }

    handlePlayerChange(formationNumber){
        const {players, activeFormationNumber } = this.state;
        let beforeActivePlayer = players[activeFormationNumber];
        players[activeFormationNumber] = players[formationNumber]
        players[formationNumber] = beforeActivePlayer;
        this.setState({
            players
        });
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
        const {players} = this.state;

        return(
            <div>
                <RecordModal ref={this.recordModal} onDeactivate={this.handleDeactivate} onRecord={this.handleRecord} onPlayerChange={this.handlePlayerChange}/>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Field players={players} onActivate={this.handleActivate}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export { MatchBoardPage };
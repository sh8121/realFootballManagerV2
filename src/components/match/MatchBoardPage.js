import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Field} from "./field/Field";
import {RecordModal} from "./field/RecordModal";
import {TeamRecordViewModal} from "./field/TeamRecordViewModal";
import {SaveModal} from "./field/SaveModal";

import {playerServices} from "../../services";
import {matchActions} from "../../actions/match.actions";

const $ = window.$;

const recordChain = {
    "goal": ["goal", "shot", "shotOnTarget"],
    "assist": ["assist", "pass"],
    "shotOnTarget": ["shotOnTarget", "shot"]
};

class MatchBoardPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            players: [],
            activePlayer: undefined,
            matchRecord: {
                goal: 0,
                assist: 0,
                shot: 0,
                shotOnTarget: 0,
                pass: 0,
                yellowCard: 0,
                redCard: 0
            }
        };

        this.recordModal = React.createRef();
        this.handleActivate = this.handleActivate.bind(this);
        this.handleDeactivate = this.handleDeactivate.bind(this);
        this.handleRecord = this.handleRecord.bind(this);
        this.handlePlayerChange = this.handlePlayerChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleShowRecord = this.handleShowRecord.bind(this);
        this.handleShowSaveModal = this.handleShowSaveModal.bind(this);
    }

    handleActivate(player){
        this.setState({
            activePlayer: player
        });
        $("#recordModal").modal("show");
    }

    handleDeactivate(){
        this.setState({
            activePlayer: undefined
        });
    }

    handleRecord(recordType){
        const {players, activePlayer, matchRecord} = this.state;
        if(recordChain[recordType]){
            recordChain[recordType].forEach((recordType) => {
                activePlayer[recordType]++;
                matchRecord[recordType]++;
            })
        }
        else{
            activePlayer[recordType]++;
            matchRecord[recordType]++;
        }

        this.setState({
            players,
            activePlayer,
            matchRecord
        });
    }

    handlePlayerChange(player){
        const {players, activePlayer } = this.state;
        let formationNumber = activePlayer.formationNumber;
        activePlayer.formationNumber = player.formationNumber;
        player.formationNumber = formationNumber;

        this.setState({
            players,
            activePlayer
        });
    }

    handleSave(competitorName, competitorGoal){
        const {dispatch} = this.props;
        const {matchRecord, players} = this.state;
        dispatch(matchActions.create({...matchRecord, competitorName, competitorGoal, players}));
    }

    handleShowSaveModal(){
        $("#saveModal").modal("show");
    }

    handleShowRecord(){
        $("#teamRecordViewModal").modal("show");
    }

    componentDidMount(){
        let that = this;
        const players = [];

        playerServices.findByTeam()
            .then((result) => {
                if(result && result.players && result.players.length > 0){
                    result.players.forEach((player) => {
                        players.push({
                            id: player.id,
                            name: player.name,
                            number: player.number,
                            formationNumber: player.formationNumber,
                            goal: 0,
                            assist: 0,
                            shot: 0,
                            shotOnTarget: 0,
                            pass: 0,
                            yellowCard: 0,
                            redCard: 0
                        });
                    });
                    that.setState({
                        players
                    });
                }
            });
    }

    render(){
        const {players, activePlayer, matchRecord} = this.state;

        return(
            <div>
                <SaveModal onSave={this.handleSave}/>
                <RecordModal players={players} activePlayer={activePlayer} onDeactivate={this.handleDeactivate} onRecord={this.handleRecord} onPlayerChange={this.handlePlayerChange}/>
                <TeamRecordViewModal matchRecord={matchRecord}/>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-4 px-1">
                            <button type="button" className="btn btn-primary btn-block" onClick={this.handleShowSaveModal}>Save</button>
                        </div>
                        <div className="col-4 px-1">
                            <button type="button" className="btn btn-primary btn-block" onClick={this.handleShowRecord}>Record</button>
                        </div>
                        <div className="col-4 px-1">
                            <Link to="/matches" className="btn btn-link btn-block">Go to Home</Link>
                        </div>
                    </div>
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

MatchBoardPage = connect()(MatchBoardPage);

export { MatchBoardPage };
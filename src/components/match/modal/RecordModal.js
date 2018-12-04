import React, {Component, Fragment} from "react";

const $ = window.$;

export class RecordModal extends Component{
    constructor(props){
        super(props);

        this.onRecord = this.onRecord.bind(this);
        this.onPlayerChange = this.onPlayerChange.bind(this);
    }

    componentDidMount(){
        const {onDeactivate} = this.props;

        $("#recordModal").on("hide.bs.modal", function(e){
            onDeactivate();
        });
    }

    onRecord(recordType){
        this.props.onRecord(recordType);
        $("#recordModal").modal("hide");
    }

    onPlayerChange(player){
        this.props.onPlayerChange(player);
        $("#recordModal").modal("hide");
    }

    render(){
        const {players, activePlayer} = this.props;
        const benchPlayers = [];
        players.forEach((player) => {
            if(player !== activePlayer)
                benchPlayers.push(player);
        });

        return (
            <div className="modal fade" id="recordModal" tabIndex="-1" role="dialog" aria-labelledby="recordModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="recordModalLabel">Match Record</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                {activePlayer && activePlayer.name &&
                                <Fragment>
                                    <h2>{activePlayer.name}</h2>
                                    <div className="row justify-content-center">
                                        <div className="col-8">
                                            <button type="button" className="btn btn-outline-primary btn-block" onClick={() => {this.onRecord("goal");}}>Goal({activePlayer.goal})</button>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-8">
                                            <button type="button" className="btn btn-outline-success btn-block" onClick={() => {this.onRecord("assist");}}>Assist({activePlayer.assist})</button>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-8">
                                            <button type="button" className="btn btn-outline-secondary btn-block" onClick={() => {this.onRecord("shot");}}>Shot({activePlayer.shot})</button>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-8">
                                            <button type="button" className="btn btn-outline-dark btn-block" onClick={() => {this.onRecord("shotOnTarget");}}>ShotOnTarget({activePlayer.shotOnTarget})</button>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-8">
                                            <button type="button" className="btn btn-outline-success btn-block" onClick={() => {this.onRecord("pass");}}>Pass({activePlayer.pass})</button>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-8">
                                            <button type="button" className="btn btn-outline-warning btn-block" onClick={() => {this.onRecord("yellowCard");}}>YellowCard({activePlayer.yellowCard})</button>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-8">
                                            <button type="button" className="btn btn-outline-danger btn-block" onClick={() => {this.onRecord("redCard");}}>RedCard({activePlayer.redCard})</button>
                                        </div>
                                    </div>
                                </Fragment>
                                }
                                <div className="row justify-content-center">
                                    <div className="col-8">
                                        <div className="dropdown">
                                            <button id="playerChangeDropDownButton" className="btn btn-outline-info btn-block dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Player Change</button>
                                            <div className="dropdown-menu" aria-labelledby="playerChangeDropDownButton">
                                                {benchPlayers.map((player) => (
                                                    <a className="dropdown-item" href="#" onClick={(e)=>{e.preventDefault();this.onPlayerChange(player);}}>{player.name}({player.number})</a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

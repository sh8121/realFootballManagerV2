import React from "react";

export const RecordModal = (props) => {
    const {players} = props;
    const {onDeactivate, onRecord, onPlayerChange} = props;
    const benchPlayers = [];
    for(let formationNumber in players){
        if(formationNumber > 11){
            benchPlayers.push({...players[formationNumber], formationNumber: formationNumber});
        }
    }

    return (
        <div className="modal fade" id="recordModal" tabIndex="-1" role="dialog" aria-labelledby="recordModalLabel" aria-hidden="true" onClick={onDeactivate}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="recordModalLabel">Match Record</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onDeactivate}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <button className="btn btn-primary" style={{"display":"block"}} onClick={()=>{onRecord("Goal");}}>Goal</button>
                        <button className="btn btn-primary" style={{"display":"block"}} onClick={()=>{onRecord("Shot");}}>Shot</button>
                        <button className="btn btn-primary" style={{"display":"block"}} onClick={()=>{onRecord("ShotOnTarget");}}>ShotOnTarget</button>
                        <button className="btn btn-primary" style={{"display":"block"}} onClick={()=>{onRecord("Pass");}}>Pass</button>
                        <button className="btn btn-primary" style={{"display":"block"}} onClick={()=>{onRecord("YellowCard");}}>YellowCard</button>
                        <button className="btn btn-primary" style={{"display":"block"}} onClick={()=>{onRecord("RedCard");}}>RedCard</button>
                        <div className="dropdown" style={{"display":"block"}}>
                            <button id="playerChangeDropDownButton" className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Player Change</button>
                            <div className="dropdown-menu" aria-labelledby="playerChangeDropDownButton">
                                {benchPlayers.map((player) => (
                                    <a className="dropdown-item" href="#" onClick={(e)=>{e.preventDefault();onPlayerChange(player.formationNumber);}}>{player.name}({player.number})</a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
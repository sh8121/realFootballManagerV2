import React, {Component} from "react";
import {playerServices} from "../../../services";
import {alertActions} from "../../../actions";
import {history} from "../../../helpers/history";

class PlayerMatchRecordModal extends Component{
    constructor(props){
        super(props);

        this.state = {
            matches: []
        };

        this.refresh = this.refresh.bind(this);
    }

    refresh(){
        const that = this;
        const {player} = this.props;

        if(player){
            playerServices.findMatchByPlayer(player.id)
            .then((result) => {
                that.setState({
                    matches: result.matches         
                });
            }, (error) => {
                alertActions.failure(error.message);
                history.push("/");
            });
        }else{
            that.setState({
                matches: []
            });
        }
    }

    componentDidMount(){
        this.refresh();
    }

    componentDidUpdate(prevProps){                
        if(prevProps.player !== this.props.player)
            this.refresh();
    }

    render(){
        const {player} = this.props;
        const {matches} = this.state;

        return(
            <div className="modal fade" id="playerMatchRecordModal" tabIndex="-1" role="dialog" aria-labelledby="playerMatchRecordModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            {player &&
                            <h5 className="modal-title" id="playerMatchRecordModalLabel">{player.name}'s Record</h5>
                            }                        
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table table-responsive">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Goal</th>
                                        <th scope="col">Assist</th>
                                        <th scope="col">Shot</th>
                                        <th scope="col">ShotOnTarget</th>
                                        <th scope="col">Pass</th>
                                        <th scope="col">YellowCard</th>
                                        <th scope="col">RedCard</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {matches && matches.length > 0 &&
                                matches.map((match, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{match.goal}</td>
                                        <td>{match.assist}</td>
                                        <td>{match.shot}</td>
                                        <td>{match.shotOnTarget}</td>
                                        <td>{match.pass}</td>
                                        <td>{match.yellowCard}</td>
                                        <td>{match.redCard}</td>
                                    </tr>
                                ))}        
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export {PlayerMatchRecordModal};
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {playerActions} from "../../actions";

import {PlayerMatchRecordModal} from "./modal/PlayerMatchRecordModal";

const $ = window.$;

class PlayerListPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            activePlayer: undefined
        };

        this.handlePlayerActivate = this.handlePlayerActivate.bind(this);
    }

    handlePlayerActivate(player){
        this.setState({
            activePlayer: player
        });
        $("#playerMatchRecordModal").modal("show");        
    }

    componentDidMount(){
        const {dispatch} = this.props;
        const that = this;
        dispatch(playerActions.findByTeam());
        $("#playerMatchRecordModal").on("hide.bs.modal", () => {
            that.setState({
                activePlayer: undefined
            });
        });
    }

    render(){
        const { finding, players } = this.props;
        const {activePlayer} = this.state;

        return(
            <div>
                <PlayerMatchRecordModal player={activePlayer}/>
                <table className="table table-responsive">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Number</th>
                            <th scope="col">Position</th>
                        </tr>
                    </thead>
                    <tbody>
                    {finding &&
                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />}
                    {players && players.length > 0 && players.map((player, index) => (
                        <tr onClick={() => {this.handlePlayerActivate(player);}}>
                            <th scope="row">{index + 1}</th>
                            <td>{player.name}</td>
                            <td>{player.number}</td>
                            <td>{player.position}</td>
                            <td><Link to={`/players/update/${player.id}`} onClick={(e)=>{e.stopPropagation();}} className="btn btn-primary">Edit</Link></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <Link to="/players/create" className="btn btn-primary">Create Player</Link>
                <Link to="/" className="btn btn-link">Go to Home</Link>
            </div>
        );
    }
}

function mapStateToProps(state){
    const {finding, players} = state.player.finding;
    return{
        finding,
        players
    };
}

PlayerListPage = connect(mapStateToProps)(PlayerListPage);

export { PlayerListPage };
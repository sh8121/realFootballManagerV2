import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {matchActions} from "../../actions/match.actions";

class MatchListPage extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(matchActions.findByTeam());
    }

    render(){
        const {finding, matches} = this.props;

        return(
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">CompetitorName</th>
                        <th scope="col">TeamScore</th>
                        <th scope="col">CompetitorScore</th>
                        <th scope="col">Assist</th>
                        <th scope="col">Shot</th>
                        <th scope="col">ShotOnTarget</th>
                        <th scope="col">Pass</th>
                        <th scope="col">YellowCard</th>
                        <th scope="col">RedCard</th>
                    </tr>
                    </thead>
                    <tbody>
                    {finding &&
                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />}
                    {matches && matches.length > 0 && matches.map((match, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{match.competitorName}</td>
                            <td>{match.goal}</td>
                            <td>{match.competitorGoal}</td>
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
                <Link to="/matches/create" className="btn btn-primary">New Match</Link>
                <Link to="/" className="btn btn-link">Go to Home</Link>
            </div>
        );
    }
}

function mapStateToProps(state){
    const {finding, matches} = state.match.finding;
    return {
        finding,
        matches
    };
}

MatchListPage = connect(mapStateToProps)(MatchListPage);

export {MatchListPage};
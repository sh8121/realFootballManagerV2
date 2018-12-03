import {matchConstants} from "../constants";
import {matchServices} from "../services";
import {alertActions} from "./alert.actions";
import {history} from "../helpers/history";

export const matchActions = {
    create,
    findByTeam
}

function create({competitorName, goal, competitorGoal, assist, shot, shotOnTarget, pass, yellowCard, redCard, players}){
    return (dispatch) => {
        dispatch(request());
        matchServices.create(competitorName, goal, competitorGoal, assist, shot, shotOnTarget, pass, yellowCard, redCard)
            .then((result) => {
                dispatch(success());
                dispatch(createPlayers(result.matchId, players));
            }, (error) => {
                dispatch(failure());
                history.push("/");
                dispatch(alertActions.failure(error.message));
            });
    }

    function request(){return {type: matchConstants.CREATE.REQUEST}}
    function success(){return {type: matchConstants.CREATE.SUCCESS}}
    function failure(){return {type: matchConstants.CREATE.FAILURE}}
};

function createPlayers(matchId, players){
    return (dispatch) => {
        dispatch(require());
        matchServices.createPlayers(matchId, players)
            .then((result) => {
                dispatch(success());
                history.push("/matches");
                dispatch(alertActions.success(result.message));
            }, (error) => {
                dispatch(failure());
                history.push("/");
                dispatch(alertActions.failure(error.message));
            });
    }

    function require(){return {type: matchConstants.PLAYERS.CREATE.REQUEST}}
    function success(){return {type: matchConstants.PLAYERS.CREATE.SUCCESS}}
    function failure(){return {type: matchConstants.PLAYERS.CREATE.FAILURE}}
}

function findByTeam(){
    return (dispatch) => {
        dispatch(request());
        matchServices.findByTeam()
            .then((result) => {
                dispatch(success(result.matches));
                dispatch(alertActions.success(result.message));
            }, (error) => {
                dispatch(failure());
                history.push("/");
                dispatch(alertActions.failure(error.message));
            });
    }

    function request(){return {type: matchConstants.FIND_BY_TEAM.REQUEST}}
    function success(matches){return {type: matchConstants.FIND_BY_TEAM.SUCCESS, matches}}
    function failure(){return {type: matchConstants.FIND_BY_TEAM.FAILURE}}
}
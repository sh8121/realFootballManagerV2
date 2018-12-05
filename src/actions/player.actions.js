import { playerConstants } from "../constants";
import { playerServices } from "../services";
import { alertActions } from "./alert.actions";
import { history } from "../helpers/history";

export const playerActions = {
    create,
    findOneById,
    findByTeam,
    update,
    deleteP
};

function create(name, number, position){
    return (dispatch) => {
        dispatch(request());
        playerServices.create(name, number, position)
            .then((result) => {
                dispatch(success());
                history.push("/players");
                dispatch(alertActions.success(result.message));
            }, (error) => {
                dispatch(failure());
                history.push("/");
                dispatch(alertActions.failure(error.message));
            });
    }

    function request(){return {type:playerConstants.CREATE.REQUEST};}
    function success(){return {type:playerConstants.CREATE.SUCCESS};}
    function failure(){return {type:playerConstants.CREATE.FAILURE};}
}

function findOneById(id){
    return (dispatch) => {
        dispatch(request());
        playerServices.findOneById(id)
            .then((result) => {
                dispatch(success(result.player));
                dispatch(alertActions.success(result.message));
            }, (error) => {
                dispatch(failure());
                history.push("/");
                dispatch(alertActions.failure(error.message));
            });
    }

    function request(){return {type:playerConstants.FIND_BY_ID.REQUEST};}
    function success(player){return {type:playerConstants.FIND_BY_ID.SUCCESS, player};}
    function failure(){return {type:playerConstants.FIND_BY_ID.FAILURE};}
}

function findByTeam(){
    return (dispatch) => {
        dispatch(request());
        playerServices.findByTeam()
            .then((result) => {
                dispatch(success(result.players));
                dispatch(alertActions.success(result.message));
            }, (error) => {
                dispatch(failure());
                history.push("/");
                dispatch(alertActions.failure(error.message));
            });
    }

    function request(){return {type:playerConstants.FIND_BY_TEAM.REQUEST};}
    function success(players){return {type:playerConstants.FIND_BY_TEAM.SUCCESS, players};}
    function failure(){return {type:playerConstants.FIND_BY_TEAM.FAILURE};}
}

function update(id, number, position){
    return (dispatch) => {
        dispatch(request());
        playerServices.update(id, number, position)
            .then((result) => {
                dispatch(success());
                history.push("/players");
                dispatch(alertActions.success(result.message));
            }, (error) => {
                dispatch(failure());
                history.push("/");
                dispatch(alertActions.failure(error.message));
            });
    }

    function request(){return {type:playerConstants.UPDATE.REQUEST};}
    function success(){return {type:playerConstants.UPDATE.SUCCESS};}
    function failure(){return {type:playerConstants.UPDATE.FAILURE};}
}

function deleteP(id){
    return (dispatch) => {
        dispatch(request());
        playerServices.deleteP(id)
            .then((result) => {
                dispatch(success());
                dispatch(alertActions.success(result.message));
            }, (error) => {
                dispatch(failure());
                history.push("/");
                dispatch(alertActions.failure(error.message));
            });
    }

    function request(){return {type:playerConstants.DELETE.REQUEST};}
    function success(){return {type:playerConstants.DELETE.SUCCESS};}
    function failure(){return {type:playerConstants.DELETE.FAILURE};}
}
import { teamConstants } from "../constants";
import { teamServices } from "../services";
import { alertActions } from "./alert.actions";
import { history } from "../helpers/history";

export const teamActions = {
    register,
    login,
    logout
}

function register(teamName, password){
    return (dispatch) => {
        dispatch(request());
        teamServices.register(teamName, password)
            .then((result) => {
                dispatch(success());
                history.push("/login");
                dispatch(alertActions.success(result.message))

            },(error) => {
                dispatch(failure());
                dispatch(alertActions.failure(error.message));
            })
    };

    function request(){ return {type: teamConstants.REGISTER.REQUEST}}
    function success(){ return {type: teamConstants.REGISTER.SUCCESS}}
    function failure(){ return {type: teamConstants.REGISTER.FAILURE}}
}

function login(teamName, password){
    return (dispatch) => {
        dispatch(request());
        teamServices.login(teamName, password)
            .then((result) => {
                dispatch(success(result.team));
                history.push("/");
                dispatch(alertActions.success(result.message));
            }, (error) => {
                dispatch(failure());
                dispatch(alertActions.failure(error.message));
            })
    }

    function request(){return {type: teamConstants.LOGIN.REQUEST}}
    function success(team){return {type: teamConstants.LOGIN.SUCCESS, team}}
    function failure(){return {type: teamConstants.LOGIN.FAILURE}}
}

function logout(){
    teamServices.logout();
    return {type: teamConstants.LOGOUT};
}
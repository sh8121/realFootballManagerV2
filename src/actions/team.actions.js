import { teamConstants } from "../constants/team.constants";
import { teamServices } from "../services/team.services";

export const teamActions = {
    register
}

function register(teamName, password){
    return (dispatch) => {
        dispatch(request());
        teamServices.register(teamName, password)
            .then((successMsg) => {
                dispatch(success());
            },(errorMsg) => {
                dispatch(failure());
            })
    };

    function request(){ return {type: teamConstants.REGISTER.REQUEST}}
    function success(){ return {type: teamConstants.REGISTER.SUCCESS}}
    function failure(){ return {type: teamConstants.REGISTER.FAILURE}}
}
import { alertConstants } from "../constants";

export const alertActions = {
    success,
    failure,
    clear
}

function success(message){return {type:alertConstants.SUCCESS, message};}
function failure(message){return {type:alertConstants.FAILURE, message};}
function clear(){return {type:alertConstants.CLEAR};}

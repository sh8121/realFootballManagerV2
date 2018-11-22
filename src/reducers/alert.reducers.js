import { alertConstants } from "../constants";

export const alertReducers = {
    alert
}

function alert(state = {}, action){
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {
                successful: true,
                message: action.message
            };
        case alertConstants.FAILURE:
            return {
                message: action.message
            };
        case alertConstants.CLEAR:
            return {};
        default:
            return state;
    }
}

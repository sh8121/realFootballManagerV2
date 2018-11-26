import { teamConstants, helperConstants } from "../constants";

export const teamReducers = {
    authentication,
    registration
};

let team = JSON.parse(localStorage.getItem(helperConstants.LOCAL_STORAGE_KEY));
let initialState = team ? {loggedIn: true, team} : {};

function authentication(state = initialState, action){
    switch (action.type) {
        case teamConstants.LOGIN.REQUEST:
            return {
                loggingIn: true
            };
        case teamConstants.LOGIN.SUCCESS:
            return {
                loggedIn: true,
                team: action.team
            };
        case teamConstants.LOGIN.FAILURE:
        case teamConstants.LOGOUT:
            return {};
        default:
            return state;
    }
}

function registration(state = {}, action){
    switch (action.type) {
        case teamConstants.REGISTER.REQUEST:
            return {
                registering: true
            };
        case teamConstants.REGISTER.SUCCESS:
        case teamConstants.REGISTER.FAILURE:
            return {};
        default:
            return state;
    }
}
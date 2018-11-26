import { playerConstants } from "../constants";
import { combineReducers } from "redux";

export const playerReducers = combineReducers({
    creation,
    finding,
    update,
    deletion
});

function creation(state = {}, action){
    switch (action.type) {
        case playerConstants.CREATE.REQUEST:
            return {
                creating: true
            };
        case playerConstants.CREATE.SUCCESS:
        case playerConstants.CREATE.FAILURE:
            return {};
        default:
            return state;

    }
}

function finding(state = {}, action){
    switch (action.type) {
        case playerConstants.FIND_BY_ID.REQUEST:
        case playerConstants.FIND_BY_TEAM.REQUEST:
            return {
                finding: true
            };
        case playerConstants.FIND_BY_ID.SUCCESS:
            return {
                player: action.player
            };
        case playerConstants.FIND_BY_TEAM.SUCCESS:
            return {
                players: action.players
            };
        case playerConstants.FIND_BY_ID.FAILURE:
        case playerConstants.FIND_BY_TEAM.FAILURE:
            return {};
        default:
            return state;
    }
}

function update(state = {}, action){
    switch (action.type) {
        case playerConstants.UPDATE.REQUEST:
            return {
                updating: true
            };
        case playerConstants.UPDATE.SUCCESS:
        case playerConstants.UPDATE.FAILURE:
            return {};
        default:
            return state;
    }
}

function deletion(state = {}, action){
    switch (action.type) {
        case playerConstants.DELETE.REQUEST:
            return {
                deleting: true
            };
        case playerConstants.DELETE.SUCCESS:
        case playerConstants.DELETE.FAILURE:
            return {};
        default:
            return state;
    }
}




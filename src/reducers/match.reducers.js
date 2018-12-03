import {matchConstants} from "../constants";
import {combineReducers} from "redux";

export const matchReducers = combineReducers({
    finding
});

function creation(state = {}, action){

}

function playerCreation(state = {}, action){

}

function finding(state = {}, action){
    switch (action.type) {
        case matchConstants.FIND_BY_TEAM.REQUEST:
            return {
                finding: true
            };
        case matchConstants.FIND_BY_TEAM.SUCCESS:
            return {
                matches: action.matches
            };
        case matchConstants.FIND_BY_TEAM.FAILURE:
            return {};
        default:
            return state;
    }
}

import { combineReducers } from 'redux';

import { alertReducers } from "./alert.reducers";
import { teamReducers } from "./team.reducers";
import { playerReducers } from "./player.reducers";
import { matchReducers} from "./match.reducers";

const rootReducer = combineReducers({
    alert: alertReducers.alert,
    authentication: teamReducers.authentication,
    registration: teamReducers.registration,
    player: playerReducers,
    match: matchReducers
});

export { rootReducer };
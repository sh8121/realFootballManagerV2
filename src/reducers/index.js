import { combineReducers } from 'redux';

import { alertReducers } from "./alert.reducers";
import { teamReducers } from "./team.reducers";

const rootReducer = combineReducers({
    alert: alertReducers.alert,
    authentication: teamReducers.authentication,
    registration: teamReducers.registration
});

export { rootReducer };
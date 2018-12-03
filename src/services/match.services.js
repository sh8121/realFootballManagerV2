import config from "../config";
import {authHeader} from "../helpers/auth-header";

export const matchServices = {
    create,
    createPlayers,
    findByTeam
}

function create(competitorName, goal, competitorGoal, assist, shot, shotOnTarget, pass, yellowCard, redCard){
    const requestOptions = {
        method: "POST",
        headers: authHeader(),
        body: JSON.stringify({competitorName, goal, competitorGoal, assist, shot, shotOnTarget, pass, yellowCard, redCard})
    };

    return fetch(`${config.apiUrl}/api/matches`, requestOptions)
        .then(handleResponse)
}

function createPlayers(matchId, players){
    const requestOptions = {
        method: "POST",
        headers: authHeader(),
        body: JSON.stringify({players})
    };

    return fetch(`${config.apiUrl}/api/matches/${matchId}/players`, requestOptions)
        .then(handleResponse);
}

function findByTeam(){
    const requestOptions = {
        method: "GET",
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/api/matches`, requestOptions)
        .then(handleResponse);
}

function handleResponse(response){
    return response.text().then((text) => {
        const result = text && JSON.parse(text);
        if(!response.ok){
            return Promise.reject(result);
        }
        return result;
    });
}

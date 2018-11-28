import config from "../config";
import { authHeader } from "../helpers/auth-header";

export const playerServices = {
    create,
    findOneById,
    findByTeam,
    update,
    deleteP
};

function create(name, number, position){
    const requestOptions = {
        method: "POST",
        headers: authHeader(),
        body: JSON.stringify({name, number, position})
    };

    return fetch(`${config.apiUrl}/api/players`, requestOptions)
        .then(handleResponse);
}

function findOneById(id){
    const requestOptions = {
        method: "GET",
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/api/players/${id}`, requestOptions)
        .then(handleResponse);
}

function findByTeam(){
    const requestOptions = {
        method: "GET",
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/api/players`, requestOptions)
        .then(handleResponse);
}

function update(id, number, position, formationNumber){
    const requestOptions = {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({number, position, formationNumber})
    };

    return fetch(`${config.apiUrl}/api/players/${id}`, requestOptions)
        .then(handleResponse);
}

function deleteP(id){
    const requestOptions = {
        method: "DELETE",
        headers: authHeader()
    }

    return fetch(`${config.apiUrl}/api/players/${id}`, requestOptions)
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

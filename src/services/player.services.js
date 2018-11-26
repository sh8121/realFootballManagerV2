import config from "../config";

export const playerServices = {
    create,
    findOneById,
    findByTeam,
    update,
    deleteP
};

function create(name, number, position, teamId){
    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, number, position, teamId})
    };

    return fetch(`${config.apiUrl}/api/players`, requestOptions)
        .then(handleResponse);
}

function findOneById(id){
    const requestOptions = {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    };

    return fetch(`${config.apiUrl}/api/players/${id}`, requestOptions)
        .then(handleResponse);
}

function findByTeam(teamId){
    const requestOptions = {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    };

    return fetch(`${config.apiUrl}/api/players?teamId=${teamId}`, requestOptions)
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
        headers: {"Content-Type": "application/json"}
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

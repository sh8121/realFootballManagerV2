import config from "../config";

export const teamServices = {
    register
};

function register(teamName, password){
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ teamName, password })
    }

    return fetch(`${config.apiUrl}/api/auth/register`, requestOptions)
        .then(handleResponse);
}

function login(teamName, password){
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify({teamName, password})
    }

    return fetch(`${config.apiUrl}/api/auth/login`, requestOptions)
        .then(handleResponse)
        .then((result) => {
            if(result && result.token){

            }
            
        })
}

function handleResponse(response){
    response.text().then((text) => {
        const result = text && JSON.parse(text);
        if(!response.ok){
            return Promise.reject(result);
        }

        return result;
    })
}

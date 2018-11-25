import config from "../config";
import { helperConstants } from "../constants";

export const teamServices = {
    register,
    login,
    logout
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
            if(result && result.team){
                localStorage.setItem(helperConstants.LOCAL_STORAGE_KEY, JSON.stringify(result.team));
                return result;
            }
            return Promise.reject(result);
        })
}

function logout(){
    localStorage.removeItem(helperConstants.LOCAL_STORAGE_KEY);
}

function handleResponse(response){
    return response.text().then((text) => {
        const result = text && JSON.parse(text);
        if(!response.ok){
            return Promise.reject(result);
        }
        return result;
    })
}

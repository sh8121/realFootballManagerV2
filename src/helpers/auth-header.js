import {helperConstants} from "../constants";

export function authHeader(){
    let team = JSON.parse(localStorage.getItem(helperConstants.LOCAL_STORAGE_KEY));

    if(team && team.token){
        return {"Authorization": `Bearer ${team.token}`, "Content-Type": "application/json"};
    }
    else{
        return {"Content-Type": "application/json"};
    }
}
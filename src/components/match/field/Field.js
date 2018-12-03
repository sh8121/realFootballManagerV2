import React from 'react';
import {Player} from './Player';
import { Goal, Line, Penalty } from "./FieldElements";
import '../../../stylesheets/Field.css';

function extractPlayer(players, formationNumber){
    for(let idx in players){
        if(players[idx].formationNumber === formationNumber)
            return players[idx];
    }
    return {formationNumber};
}

export const Field = ({players, ...rest}) => {
    return (
        <div className="field">
            <div className="field__box">
                <Goal goalPosition="top"/>
                <Goal goalPosition="bottom"/>
                <Penalty penaltyPosition="top"/>
                <Penalty penaltyPosition="bottom"/>
                <Penalty penaltyPosition="arc--top"/>
                <Penalty penaltyPosition="arc--bottom"/>
                <Line linePosition="mid"/>
                <Line linePosition="circle"/>
                <Player playerPosition="gk" player={extractPlayer(players, 1)} {...rest}/>
                <Player playerPosition="right--wingback" player={extractPlayer(players, 2)} {...rest}/>
                <Player playerPosition="left--wingback" player={extractPlayer(players, 3)} {...rest}/>
                <Player playerPosition="left--centerback" player={extractPlayer(players, 4)} {...rest}/>
                <Player playerPosition="right--centerback" player={extractPlayer(players, 5)} {...rest}/>
                <Player playerPosition="right--center--midfielder" player={extractPlayer(players, 6)} {...rest}/>
                <Player playerPosition="left--center--midfielder" player={extractPlayer(players, 7)} {...rest}/>
                <Player playerPosition="center--attacking--midfielder" player={extractPlayer(players, 8)} {...rest}/>
                <Player playerPosition="right--wing--forward" player={extractPlayer(players, 9)} {...rest}/>
                <Player playerPosition="left--wing--forward" player={extractPlayer(players, 10)} {...rest}/>
                <Player playerPosition="center--forward" player={extractPlayer(players, 11)} {...rest}/>
            </div>
        </div>
    );
}
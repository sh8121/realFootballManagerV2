import React from 'react';
import {Player} from './Player';
import { Goal, Line, Penalty } from "./FieldElements";
import '../../../stylesheets/Field.css';

export const Field = (props) => {
    const {players} = props;
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
                <Player playerPosition="gk" player={players[1]} {...props}/>
                <Player playerPosition="right--wingback" player={players[2]} {...props}/>
                <Player playerPosition="left--wingback" player={players[3]} {...props}/>
                <Player playerPosition="left--centerback" player={players[4]} {...props}/>
                <Player playerPosition="right--centerback" player={players[5]} {...props}/>
                <Player playerPosition="right--center--midfielder" player={players[6]} {...props}/>
                <Player playerPosition="left--center--midfielder" player={players[7]} {...props}/>
                <Player playerPosition="center--attacking--midfielder" player={players[8]} {...props}/>
                <Player playerPosition="right--wing--forward" player={players[9]} {...props}/>
                <Player playerPosition="left--wing--forward" player={players[10]} {...props}/>
                <Player playerPosition="center--forward" player={players[11]} {...props}/>
            </div>
        </div>
    );
}

export { Field };
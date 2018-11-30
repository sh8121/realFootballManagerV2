import React from 'react';
import Draggable from 'react-draggable';

export const Player = (props) => {
    const {player, playerPosition, formationNumber} = props;
    const {onActivate} = props;

    return(
        <Draggable>
            <div className={`player player__item player__item--${playerPosition}`} onClick={()=>{onActivate(formationNumber)}}>
                <div className="player player__item--shirt">
                    {player && player.number}
                </div>
                <div className="player player__item--label">
                    {player && player.name}
                </div>
            </div>
        </Draggable>
    );
}

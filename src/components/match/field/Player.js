import React, { Component } from 'react';
import Draggable from 'react-draggable';

class Player extends Component{
    constructor(props){
        super(props);
        this.state = {
            isActive: false
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            isActive: !this.state.isActive
        });
    }

    render(){
        const {player} = this.props;
        const {isActive} = this.state;

        const playerStyle = isActive ? { zIndex: 2 } : { zIndex: 0 };

        return(
            <Draggable>
                <div className={`player player__item player__item--${playerPosition}`} style={playerStyle} onClick={this.onClick}>
                    <div className="player player__item--shirt">
                        {playerNumber}
                    </div>
                    <div className="player player__item--label">
                        {playerName}
                    </div>
                </div>
            </Draggable>
        );
    }
}

Player.defaultProps = {
    playerNumber: 10,
    playerName: "Player",
    playerImage: "",
    playerAge: 25,
    playerCountry: "Korea",
    playerClub: "Hyundai"
}

export { Player };
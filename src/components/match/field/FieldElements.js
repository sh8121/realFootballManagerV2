import React from 'react';

export const Goal = (props) => {
    const { goalPosition } = props;

    return(
        <div className={`field__line field__line--goal--${goalPosition}`}></div>
    );
};

export const Line = (props) => {
    const { linePosition } = props;

    return(
        <div className={`field__line field__line--${linePosition}`}></div>
    );
};

export const Penalty = (props) => {
    const { penaltyPosition } = props;

    return (
        <div className={`field__line field__line--penalty--${penaltyPosition}`}></div>
    );
};
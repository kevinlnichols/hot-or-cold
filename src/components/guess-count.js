import React from 'react';
import './guess-count.css';

export default function GuessCount(props) {
    const isPlural = props.guessCount !== 1;
    const guessNoun = isPlural ? 'guesses' : 'guess';
    return (
        <h2 id="guessCount">
            You've made {props.guessCount} {guessNoun}!
        </h2>
    );
}
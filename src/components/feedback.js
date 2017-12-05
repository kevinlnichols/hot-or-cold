import React from 'react';
import './feedback.css';

export default function Feedback(props) {
    const key = props.guessCount;
    let guessAgain;
    if (key !== 0) {
        guessAgain = <span>Try again!</span>;
    }
    return (
        <h2 key="{key}">{props.feedback} {guessAgain}</h2>
    );
}
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Scoreboard = ({ score, bestScore }) => (
        <div className="scoreboard">
        <p>Score: {score}</p>
       <p>Best Score: {bestScore}</p>
       </div>
);

export default Scoreboard;

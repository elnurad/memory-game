/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Card = ({ image, shuffleCards }) => (
    <img onClick={shuffleCards} src={image} alt="An image of food" />);

export default Card;

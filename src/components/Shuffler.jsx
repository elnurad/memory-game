/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import '../App.css';
import Card from './Card.jsx';

const imageOne = require('../assets/01.jpg');
const imageTwo = require('../assets/02.jpg');
const imageThree = require('../assets/03.jpg');
const imageFour = require('../assets/04.jpg');
const imageFive = require('../assets/05.jpg');
const imageSix = require('../assets/06.jpg');

const images = [{ image: imageOne },
  { image: imageTwo },
  { image: imageThree },
  { image: imageFour },
  { image: imageFive },
  { image: imageSix },
];
// const cardsToShuffle = [...cards, ...cards];

// const shuffleCards = () => {
//   console.log(cardsToShuffle);
// };

function Shuffler() {
  const [cardGrid, setCardGrid] = useState([...images, ...images]);

  const gridDisplay = cardGrid.map((card, index) => <Card key={index} image={card.image}/>);

  // const shuffleCards = () => {

  // }

  useEffect(() => {
    // eslint-disable-next-line no-alert
    alert('hello memory game');
  });

  return (
    <div className="shuffler">
       <div>{gridDisplay}</div>
    </div>
  );
}

export default Shuffler;

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

const images = [
  {
    image: imageOne,
    name: 'ramen',
  },
  {
    image: imageTwo,
    name: 'sushi',
  },
  {
    image: imageThree,
    name: 'fries',
  },
  {
    image: imageFour,
    name: 'nuggets',
  },
  {
    image: imageFive,
    name: 'burger',
  },
  {
    image: imageSix,
    name: 'pizza',
  },
];
// const cardsToShuffle = [...cards, ...cards];

// const shuffleCards = () => {
//   console.log(cardsToShuffle);
// };

function Shuffler() {
  const [cardGrid, setCardGrid] = useState([...images, ...images]);
  const [cardsClicked, setCardsClicked] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  const [score, setScore] = useState(0);

  const shuffleCards = () => {
    const gridCopy = [...cardGrid];
    gridCopy.sort(() => 0.5 - Math.random());
    setCardGrid(gridCopy);
  };

  const keepScore = (name) => {
    if (cardsClicked.includes(name)) {
      setCardsClicked([]);
      setScore(0);
    } else {
      setCardsClicked((prevCardsClicked) => [name, ...prevCardsClicked]);
      setScore(score + 1);
    }
  };
  const keepBestScore = () => {
    if (score > bestScore) {
      setBestScore(score);
    }
  };
  const keepScoreAndShuffle = (name) => {
    shuffleCards();
    keepBestScore();
    keepScore(name);
  };

  const gridDisplay = cardGrid.map((card, index) => <Card
  shuffleCards={() => keepScoreAndShuffle(card.name)}
  key={index} image={card.image}/>);

  useEffect(() => {
    // eslint-disable-next-line no-alert
    shuffleCards();
  }, []);

  return (
    <div className="shuffler">
       <p>Score: {score}</p>
       <p>Best Score: {bestScore}</p>
       <div>{gridDisplay}</div>
    </div>
  );
}

export default Shuffler;

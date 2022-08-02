/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Shuffler from './components/Shuffler.jsx';
import Scoreboard from './components/Score.jsx';
import Card from './components/Card.jsx';
import './App.css';

const imageOne = require('./assets/01.jpg');
const imageTwo = require('./assets/02.jpg');
const imageThree = require('./assets/03.jpg');
const imageFour = require('./assets/04.jpg');
const imageFive = require('./assets/05.jpg');
const imageSix = require('./assets/06.jpg');
const imageSeven = require('./assets/07.jpg');
const imageEight = require('./assets/08.jpg');
const imageNine = require('./assets/09.jpg');

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
  {
    image: imageSeven,
    name: 'gyeza',
  },
  {
    image: imageEight,
    name: 'poke',
  },
  {
    image: imageNine,
    name: 'iceCream',
  },
];

const App = () => {
  const [cardGrid, setCardGrid] = useState([...images, ...images]);
  const [cardsClicked, setCardsClicked] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  const [score, setScore] = useState(0);

  const shuffleCards = () => {
    const gridCopy = [...cardGrid];
    gridCopy.sort(() => 0.5 - Math.random());
    setCardGrid(gridCopy);
  };
  const keepBestScore = () => {
    if (score > bestScore) {
      setBestScore(score);
    }
  };

  const keepScore = (name) => {
    if (cardsClicked.includes(name)) {
      setCardsClicked([]);
      setScore(0);
      keepBestScore();
    } else {
      setCardsClicked((prevCardsClicked) => [name, ...prevCardsClicked]);
      setScore(score + 1);
    }
  };
  const keepScoreAndShuffle = (name) => {
    shuffleCards();
    // keepBestScore();
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
    <div className="App">
       <h3>Memory Game</h3>
       <Scoreboard score={score} bestScore={bestScore} />
      <Shuffler gridDisplay={gridDisplay} />
    </div>
  );
};
export default App;

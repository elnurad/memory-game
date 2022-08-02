/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import '../App.css';

// const imageOne = require('../assets/01.jpg');
// const imageTwo = require('../assets/02.jpg');
// const imageThree = require('../assets/03.jpg');
// const imageFour = require('../assets/04.jpg');
// const imageFive = require('../assets/05.jpg');
// const imageSix = require('../assets/06.jpg');

// const images = [
//   {
//     image: imageOne,
//     name: 'ramen',
//   },
//   {
//     image: imageTwo,
//     name: 'sushi',
//   },
//   {
//     image: imageThree,
//     name: 'fries',
//   },
//   {
//     image: imageFour,
//     name: 'nuggets',
//   },
//   {
//     image: imageFive,
//     name: 'burger',
//   },
//   {
//     image: imageSix,
//     name: 'pizza',
//   },
// ];

const Shuffler = ({ gridDisplay }) =>
// const [cardGrid, setCardGrid] = useState([...images, ...images]);
// const [cardsClicked, setCardsClicked] = useState([]);
// const [bestScore, setBestScore] = useState(0);

// const [score, setScore] = useState(0);

// const shuffleCards = () => {
//   const gridCopy = [...cardGrid];
//   gridCopy.sort(() => 0.5 - Math.random());
//   setCardGrid(gridCopy);
// };
// const keepBestScore = () => {
//   if (score > bestScore) {
//     setBestScore(score);
//   }
// };

// const keepScore = (name) => {
//   if (cardsClicked.includes(name)) {
//     setCardsClicked([]);
//     setScore(0);
//     keepBestScore();
//   } else {
//     setCardsClicked((prevCardsClicked) => [name, ...prevCardsClicked]);
//     setScore(score + 1);
//   }
// };
// const keepScoreAndShuffle = (name) => {
//   shuffleCards();
//   // keepBestScore();
//   keepScore(name);
// };

// const gridDisplay = cardGrid.map((card, index) => <Card
// shuffleCards={() => keepScoreAndShuffle(card.name)}
// key={index} image={card.image}/>);

// useEffect(() => {
//   // eslint-disable-next-line no-alert
//   shuffleCards();
// }, []);

  (
    <div className="shuffler">
       <div>{gridDisplay}</div>
    </div>
  );
export default Shuffler;

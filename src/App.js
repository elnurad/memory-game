/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Shuffler from './components/Shuffler.jsx';
import './App.css';

// const cards = [{'image': image_one},
//                {'image': image_two},
//                {'image': image_three},
//                {'image': image_four},
//                {'image': image_five},
//                {'image': image_six}
// ]

const App = () => (
    <div className="App">
      <h3>Memory Game</h3>
      <p>Score:</p>
      <p>Best Score:</p>
      <Shuffler />
    </div>
);

export default App;

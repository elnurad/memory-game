/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import '../App.css';

const Shuffler = ({ gridDisplay }) =>

  (
    <div className="shuffler">
       <div id="gridDisplay">
         {gridDisplay}
        </div>
    </div>
  );
export default Shuffler;

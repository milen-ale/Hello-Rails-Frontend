import React from 'react';
import smileyFace from '../assets/grinning-face-with-big-eyes.png';

const Heading = () => (
  <div className="title flex items-center gap-2">
    <h1 className="bg-purple-500 w-max p-2 text-white text-4xl">Greetings</h1>
    <img src={smileyFace} alt="grinning-face-with-big-eyes" className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-500" />
  </div>
);

export default Heading;

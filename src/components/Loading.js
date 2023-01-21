import React from 'react';
import loadingGIF from '../assets/loading.gif';

const Loading = () => (
  <div>
    <img className="ml-5 w-32 h-32 rounded-full" src={loadingGIF} alt="loading" />
  </div>
);

export default Loading;

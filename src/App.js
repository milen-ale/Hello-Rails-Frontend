import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Heading from './components/Heading';
import Greeting from './components/Greeting';

function App() {
  return (
    <main className="container mx-auto mt-28 px-5 flex flex-col">
      <Heading />
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </main>
  );
}

export default App;

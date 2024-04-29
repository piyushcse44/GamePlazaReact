import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/homepage/HomePage.jsx';
import GameStore from './Pages/gameStore/GameStore.jsx';

import Details from './Pages/details/Details.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gameStore" element={<GameStore />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/homepage/HomePage.jsx';
import GameStore from './Pages/gameStore/GameStore.jsx';
import Details from './Pages/details/Details.jsx';
import Login from './Pages/Authentication/login/Login.jsx';
import Register from './Pages/Authentication/register/Register.jsx';
import RecoverPassword from './Pages/Authentication/forgotPassword/ForgotPassword.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gameStore" element={<GameStore />} />
        <Route path="/details" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recoverPassword" element={<RecoverPassword />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Welcome from './components/Welcome'; 
import './App.css';

const App = () => {
  const location = useLocation();

  const isSignupPage = location.pathname === '/signup';

  return (
    <div className="background-container">
      <div className="overlay">
        <div className="welcome-message">
          <h1>Welcome to Our Platform!</h1>
          <p>Discover amazing content and connect with a vibrant community.</p>
          <p>Happy Diwali!!!!.</p>

        </div>
        <Routes>
          {/* Redirect from '/' to '/login' by default */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/:name" element={<Welcome />} /> {/* Dynamic route here */}
        </Routes>

        {!isSignupPage && (
          <div className="signup-box">
            <p>Don't have an account?</p>
            <Link to="/signup" className="signup-link">Signup</Link>
          </div>
        )}
      </div>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;



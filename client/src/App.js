import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Link, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Welcome from './components/Welcome'; 
import './App.css';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isSignupPage = location.pathname === '/signup';
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="background-container">
      <div className="overlay">
        <div className="welcome-message">
          <h1>Welcome to Our Platform!</h1>
          <p>Discover amazing content and connect with a vibrant community.</p>
          <p>Happy Diwali!!!!</p>
        </div>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/:name" element={<Welcome />} /> {/* Dynamic route */}
        </Routes>

        {/* Display Home button on Signup and Login pages */}
        {(isLoginPage || isSignupPage) && (
          <button 
            onClick={() => navigate('/')} 
            className={`home-button ${isSignupPage ? 'signup-home-button' : ''}`}
          >
            Home
          </button>
        )}

        {/* Display Signup link unless on the Signup page */}
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
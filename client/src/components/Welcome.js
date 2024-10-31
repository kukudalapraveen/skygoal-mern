import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Welcome = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome, {name}!</h1>
      <p style={styles.subtext}>We're glad to have you here.</p>
      <button onClick={handleLogout} style={styles.logoutButton}>
        Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '50px auto',
  },
  heading: {
    fontSize: '2.5em',
    color: '#333',
    marginBottom: '10px',
  },
  subtext: {
    fontSize: '1.2em',
    color: '#666',
    marginBottom: '20px',
  },
  logoutButton: {
    padding: '12px 24px',
    fontSize: '1em',
    color: 'white',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Welcome;

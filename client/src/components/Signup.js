import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://skygoal-mern-git-praveen-dev-praveens-projects-6e7bc319.vercel.app/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to create user. Please try again.');
      }

      setSuccess(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSuccessClick = () => {
    navigate('/login');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ textAlign: 'center', color: 'pink' }}>Signup With Your Details</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {success ? (
        <div style={styles.successContainer}>
          <p style={styles.successMessage}>User created successfully!</p>
          <button onClick={handleSuccessClick} style={styles.successButton}>OK</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputContainer}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Username"
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputContainer}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputContainer}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.submitButton}>
            Signup
          </button>
        </form>
      )}
    </div>
  );
};

const styles = {
  successContainer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f0f8ff',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    marginTop: '20px',
  },
  successMessage: {
    fontSize: '1.2em',
    color: 'green',
    marginBottom: '20px',
  },
  successButton: {
    padding: '10px 20px',
    fontSize: '1em',
    color: 'white',
    backgroundColor: 'blue',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputContainer: {
    marginBottom: '10px',
  },
  input: {
    width: '350px',
    height: '40px',
    fontSize: '16px',
    padding: '8px',
  },
  submitButton: {
    width: '320px',
    height: '45px',
    backgroundColor: 'blue',
    color: 'white',
    fontSize: '18px',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Signup;

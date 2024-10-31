import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      console.log(username, loggedIn, "loggg");

      const response = await fetch('https://skygoal-mern-git-praveen-dev-praveens-projects-6e7bc319.vercel.app/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Login failed. Please check your credentials.');
      }

      const data = await response.json();
      const token = data.token;

      const userDetailsResponse = await fetch('https://skygoal-mern-git-praveen-dev-praveens-projects-6e7bc319.vercel.app/api/auth/userdetails', {
        method: 'GET',
        headers: {
          'Authorization': `${token}`,
        },
      });

      if (!userDetailsResponse.ok) {
        throw new Error('Failed to fetch user details.');
      }

      const userDetails = await userDetailsResponse.json();
      setUsername(userDetails.name);
      setLoggedIn(true);

      navigate(`/${userDetails.name}`);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ textAlign: 'center',color: 'pink' }}>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            style={{ width: '350px', height: '45px', fontSize: '16px', padding: '10px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            style={{ width: '350px', height: '45px', fontSize: '16px', padding: '10px' }}
            required
          />
        </div>
        <button type="submit" style={{ width: '300px', height: '50px', backgroundColor: 'blue', color: 'white', fontSize: '18px', border: 'none', cursor: 'pointer' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

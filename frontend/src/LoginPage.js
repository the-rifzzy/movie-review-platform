import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    //Hardcoded credentials
    if (username === 'admin' && password === '1234') {
      onLogin(); // Call parent to show main app
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Title with RifLux cursive + Login simple white text */}
        <h2>
          <span className="riflux">RifLux</span>
          <span className="login-text">Login</span>
        </h2>

        {/* Username & Password Inputs */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        {/* Login Button */}
        <button onClick={handleLogin}>Login</button>

        {/* Error Message */}
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default LoginPage;

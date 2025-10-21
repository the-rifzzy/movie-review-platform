import React, { useEffect, useState } from 'react';
import MovieCard from './components/MovieCard';
import LoginPage from './LoginPage'; // Import login page
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login

  useEffect(() => {
    fetch('http://localhost:5000/api/movies')
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(err => console.error(err));
  }, []);

  // Called when login is successful
  const handleLoginSuccess = () => setIsLoggedIn(true);

  // Show login page if not logged in
  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLoginSuccess} />;
  }

  // Existing movie platform stays unchanged
  return (
    <div className="app">
      <h1 style={{color:'#e50914', textAlign:'center', margin:'20px'}}>RifLux! Movie Reviews</h1>
      <div className="movie-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/book/${movie.title}`);
  };

  return (
    <div className="movie-card">
      <img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt={movie.title} 
      />
      <div className="movie-card-content">
        <h3>{movie.title}</h3>
        <p>Rating: {movie.vote_average}</p>
        <button onClick={handleBookNow} className="booking-btn">Book Now</button>
      </div>
    </div>
  );
};

export default MovieCard;

import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = ({ movies, onShowDetails, onBookNow }) => (
  <div className="movie-list">
    {movies.map((movie) => (
      <MovieCard 
        key={movie.id} 
        movie={movie} 
        onShowDetails={onShowDetails} 
        onBookNow={onBookNow} 
      />
    ))}
  </div>
);

export default MovieList;
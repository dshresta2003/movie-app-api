import React, { useState, useEffect } from 'react';
import MovieList from '../Components/MovieList';
import './MoviePage.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=29acb6a748ea2b17b010205947711afe`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div className="movies-page">
      <h1>Popular Movies</h1>
      <div className="movie-list">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default MoviesPage;
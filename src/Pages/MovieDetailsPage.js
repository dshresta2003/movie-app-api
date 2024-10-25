import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetailsPage.css';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=29acb6a748ea2b17b010205947711afe`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error('Error fetching movie details:', error));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-details">
      <div className="details-header">
        <h1>{movie.title}</h1>
        <p>{movie.tagline}</p>
      </div>
      <div className="details-body">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="details-info">
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Release Date</h3>
          <p>{movie.release_date}</p>
          <h3>Rating</h3>
          <p>{movie.vote_average}/10</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
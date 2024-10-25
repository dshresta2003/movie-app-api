import React, { useState, useEffect } from 'react';
import SearchBar from '../Components/SearchBar';
import MovieList from '../Components/MovieList';
import BookingForm from '../Components/BookingForm';
import './HomePage.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    setLoading(true);
    fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=29acb6a748ea2b17b010205947711afe')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false); // Set loading to false after fetching
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (query) => {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=29acb6a748ea2b17b010205947711afe&query=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching search results:', error);
        setLoading(false);
      });
  };

  const handleShowDetails = (movie) => {
    setSelectedMovie(movie);
    setShowBookingForm(false);
  };

  const handleBookNow = (movie) => {
    setSelectedMovie(movie);
    setShowBookingForm(true);
  };

  return (
    <div className="homepage">
      <SearchBar onSearch={handleSearch} />
      <h1>Trending Movies</h1>

      {loading && <p>Loading movies...</p>} {/* Loading message */}

      <div className="movie-list">
        {searchResults.length > 0 ? (
          <MovieList 
            movies={searchResults} 
            onShowDetails={handleShowDetails} 
            onBookNow={handleBookNow} 
          />
        ) : (
          <MovieList 
            movies={movies} 
            onShowDetails={handleShowDetails} 
            onBookNow={handleBookNow} 
          />
        )}
      </div>

      {/* Display movie details if a movie is selected */}
      {selectedMovie && !showBookingForm && (
        <div className="movie-details">
          <h2>{selectedMovie.title}</h2>
          <p>Overview: {selectedMovie.overview}</p>
          <p>Release Date: {selectedMovie.release_date}</p>
          <p>Rating: {selectedMovie.vote_average}</p>
        </div>
      )}

      {/* Show booking form if 'Book Now' is clicked */}
      {showBookingForm && selectedMovie && <BookingForm movieTitle={selectedMovie.title} />}
    </div>
  );
};

export default HomePage;

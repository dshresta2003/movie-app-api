import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookingForm = ({ movieTitle, movieOverview, onClose }) => {
  const handleBooking = () => {
    alert(`Your tickets for ${movieTitle} have been booked!`);
    onClose();
  };

  return (
    <div className="booking-form">
      <h2>Booking for {movieTitle}</h2>
      <p>{movieOverview}</p>
      <button onClick={handleBooking}>Confirm Booking</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error('Error fetching movie details:', error));
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  const handleBookNow = () => {
    setShowBookingForm(true);
  };

  const closeBookingForm = () => {
    setShowBookingForm(false);
  };

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
      <button onClick={handleBookNow}>Book Now</button>

      {showBookingForm && (
        <BookingForm 
          movieTitle={movie.title} 
          movieOverview={movie.overview} 
          onClose={closeBookingForm} 
        />
      )}
    </div>
  );
};

export default MovieDetailsPage;

// src/components/MovieDetails.js
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const {id} = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
      const apiKey = "936af801afc98e81ee8d785b94b8e3a8";
      const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;

      axios
        .get(apiUrl)
        .then((response) => {
          setMovieDetails(response.data);
        })
        .catch((error) => {
          console.error("Error fetching movie details:", error);
        });
    }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <p>{movieDetails.overview}</p>
      <p>Release Date: {movieDetails.release_date}</p>
      <p>Rating: {movieDetails.vote_average}</p>
    </div>
  );
};

export default MovieDetails;

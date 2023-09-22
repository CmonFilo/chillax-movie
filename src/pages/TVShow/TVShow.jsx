// src/components/TVShowDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TVShowDetails = () => {
  const { id } = useParams();
  const [tvShowDetails, setTVShowDetails] = useState(null);

  useEffect(() => {
    const apiKey = '936af801afc98e81ee8d785b94b8e3a8';
    const apiUrl = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`;

    axios.get(apiUrl)
      .then(response => {
        setTVShowDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching TV show details:', error);
      });
  }, [id]);

  if (!tvShowDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{tvShowDetails.name}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${tvShowDetails.poster_path}`}
        alt={`${tvShowDetails.name} Poster`}
      />
      <p>{tvShowDetails.overview}</p>
      <p>First Air Date: {tvShowDetails.first_air_date}</p>
      <p>Rating: {tvShowDetails.vote_average}</p>
      <p>Back To All TV Shows <Link to={'/shows'} style={{textDecoration:'none'}}>"CLICK ME"</Link></p>
    </div>
  );
};

export default TVShowDetails;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const TVShowDetails = () => {
  const { id } = useParams();
  const [tvShowDetails, setTVShowDetails] = useState(null);

  useEffect(() => {
    const apiKey = "936af801afc98e81ee8d785b94b8e3a8";
    const apiUrl = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`;

    axios
      .get(apiUrl)
      .then((response) => {
        setTVShowDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching TV show details:", error);
      });
  }, [id]);

  if (!tvShowDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container CL_container pb-5 my-5">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            className="img-fluid rounded-start"
            src={`https://image.tmdb.org/t/p/w500${tvShowDetails.poster_path}`}
            alt={`${tvShowDetails.name} Poster`}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body position-relative rounded-end card_CL text-center">
            <h1 className="card-title py-5">
              <span className="span_detail_CL">{tvShowDetails.name}</span>
            </h1>
            <p className="card-text position-absolute top-50 start-50 translate-middle">
              {tvShowDetails.overview}
            </p>
            <div className="position-absolute bottom-0 start-50 translate-middle-x">
              <p className="card-text">
                First Air Date: {tvShowDetails.first_air_date}
              </p>
              <p className="card-text mb-5">Rating: {tvShowDetails.vote_average}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVShowDetails;

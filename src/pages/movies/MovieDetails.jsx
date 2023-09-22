import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

const MovieDetails = () => {
  const { id } = useParams();
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
    <div className="container CL_container pb-4 my-5">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            className="img-fluid rounded-start"
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body position-relative rounded-end card_CL text-center">
            <h1 className="card-title py-5">
              <span className="span_detail_CL">{movieDetails.title}</span>
            </h1>
            <p className="card-text position-absolute top-50 start-50 translate-middle">
              {movieDetails.overview}
            </p>
            <div className="position-absolute bottom-0 start-50 translate-middle-x">
              <p className="card-text">
                Release Date: {movieDetails.release_date}
              </p>
              <p className="card-text mb-5">
                Rating: {movieDetails.vote_average}
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mt-4">
        <Link to={"/"} style={{ color: "#132328", textDecoration: "none" }}>
          <FontAwesomeIcon icon={faArrowCircleLeft} />
          Back To All Movies{" "}
        </Link>
      </p>
    </div>
  );
};

export default MovieDetails;

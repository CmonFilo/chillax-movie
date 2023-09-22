import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

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
    <div className="details">
      <h1
        style={{ textAlign: "center", margin: "30px 0", fontWeight: "bolder" }}>
        {movieDetails.title}
      </h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
        style={{
          width: "300px",
          height: "480px",
          marginLeft: "15%",
          borderRadius: "5%",
        }}
      />
      <div
        className="detailsData"
        style={{
          width: "50%",
          left: "40%",
          position: "absolute",
          top: "300px",
          textAlign: "justify",
          right: "30px",
        }}>
        <div>{movieDetails.overview}</div> <br />
        <br />
        <div>Release Date: {movieDetails.release_date}</div>
        <div>Rating: {movieDetails.vote_average}</div>
      </div>
      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
          margin: "25px",
          fontSize: "20px",
        }}>
        Back To All Movies{" "}
        <Link to={"/"} style={{ textDecoration: "none" }}>
          "CLICK ME"
        </Link>
      </p>
    </div>
  );
};

export default MovieDetails;

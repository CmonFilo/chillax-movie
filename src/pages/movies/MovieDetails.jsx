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

    try {
      axios.get(apiUrl).then((response) => {
        setMovieDetails(response.data);
      });
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    // <div className="details">
    //   <h1
    //     style={{ textAlign: "center", margin: "30px 0", fontWeight: "bolder" }}>
    //     {movieDetails.title}
    //   </h1>
    //   <img
    //     src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
    //     alt={movieDetails.title}
    //     style={{
    //       width: "300px",
    //       height: "480px",
    //       marginLeft: "15%",
    //       borderRadius: "5%",
    //     }}
    //   />
    //   <div
    //     className="detailsData"
    //     style={{
    //       width: "50%",
    //       left: "40%",
    //       position: "absolute",
    //       top: "300px",
    //       textAlign: "justify",
    //       right: "30px",
    //     }}>
    //     <div>{movieDetails.overview}</div> <br />
    //     <br />
    // <div>Release Date: {movieDetails.release_date}</div>
    // <div>Rating: {movieDetails.vote_average}</div>
    //   </div>

    // </div>
    <div className="container CL_container pb-3 my-3 my-md-4">
      <div className="row g-0 position-relative">
        <div className="col-md-4">
          <img
            className="img-fluid rounded"
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
            style={{ width: "100%", height: "600px" }}
          />
        </div>
        <div className="col-md-8" style={{ height: "600px" }}>
          <div className="card-body position-relative rounded card_CL text-center">
            <h1 className="card-title py-5">
              <span className="span_detail_CL">{movieDetails.title}</span>
            </h1>
            <p className="card-text p-2">{movieDetails.overview}</p>
            <div className="position-absolute bottom-0 start-50 translate-middle-x">
              <p className="card-text pt-2">
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
          <FontAwesomeIcon icon={faArrowCircleLeft} className="me-2" />
          Back To All Movies{" "}
        </Link>
      </p>
    </div>
  );
};

export default MovieDetails;

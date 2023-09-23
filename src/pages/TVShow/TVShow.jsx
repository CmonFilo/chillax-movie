import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

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
    <div className="container CL_container pb-3 my-3 my-md-4">
      <div className="row g-0 position-relative">
        <div className="col-md-4">
          <img
            className="img-fluid rounded"
            src={`https://image.tmdb.org/t/p/w500${tvShowDetails.poster_path}`}
            alt={`${tvShowDetails.name} Poster`}
            style={{ width: "100%", height: "500px" }}
          />
        </div>
        <div className="col-md-8" style={{ height: "500px" }}>
          <div className="card-body position-relative rounded card_CL text-center">
            <h1 className="card-title py-5">
              <span className="span_detail_CL">{tvShowDetails.name}</span>
            </h1>
            <p className="card-text p-2">
              {tvShowDetails.overview}
            </p>
            <div className="position-absolute bottom-0 start-50 translate-middle-x">
              <p className="card-text pt-2">
                First Air Date: {tvShowDetails.first_air_date}
              </p>
              <p className="card-text mb-5">
                Rating: {tvShowDetails.vote_average}
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mt-4">
        <Link
          to={"/shows"}
          style={{ color: "#132328", textDecoration: "none" }}
        >
          <FontAwesomeIcon icon={faArrowCircleLeft} className="me-2"/>
          Back To All TV Shows{" "}
        </Link>
      </p>
    </div>
  );
};

export default TVShowDetails;

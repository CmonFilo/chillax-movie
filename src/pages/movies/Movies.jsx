import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Pagination } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery]=useState('');

  useEffect(() => {

    const apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=936af801afc98e81ee8d785b94b8e3a8&page=${currentPage}`;
    

    axios
      .get(apiUrl)
      .then((response) => {
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, [currentPage]);

  const handleSearch = (query) => {
    axios.get(`${searchUrl}?q=${query}`)
      .then(response => setSearchResults(response.data))
      .catch(error => console.error('Error searching for movies:', error));
  };

  const basePosterUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="container CL_container">
      <h1 className="header_CL mt-2">
        <span className="ms-2 fw-bold">All Movies</span>
      </h1>
      <div className="row">
        {movies.map((movie) => (
          <div className="col-4 col-md-2 text-center" key={movie.id}>
            <Link to={`${movie.id}`}>
              <figure className="figure">
                <img
                  src={`${basePosterUrl}${movie.poster_path}`}
                  alt={movie.title}
                  className="figure-img img-fluid rounded"
                />
                <figcaption className="figure-caption fs-6 fs-md-5">
                  <span>{movie.title}</span>
                </figcaption>
              </figure>
            </Link>
          </div>
        ))}
      </div>
      <Pagination
        className="mb-3"
        defaultCurrent={1}
        total={150}
        onChange={(currentPage) => setCurrentPage(currentPage)}
        disabled={currentPage === totalPages}
        style={{ textAlign: "center" }}
      />
    </div>
  );
};

export default Movies;

// https://api.themoviedb.org/3/tv/popular?&api_key=936af801afc98e81ee8d785b94b8e3a8&page=1

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const apiUrl =
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=936af801afc98e81ee8d785b94b8e3a8&page=${currentPage}`;

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

  const basePosterUrl = "https://image.tmdb.org/t/p/w500";

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div>
      <h1>Movie Lists</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/${movie.id}`}>
            <h2>{movie.title}</h2>
            <img
              src={`${basePosterUrl}${movie.poster_path}`}
              alt={movie.title}
            />
            </Link>
          </li>
        ))}
      </ul>

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}>
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Movies;


// https://api.themoviedb.org/3/tv/popular?&api_key=936af801afc98e81ee8d785b94b8e3a8&page=1
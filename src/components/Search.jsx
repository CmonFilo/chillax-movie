import React, { useState, useEffect } from "react";
import Movies from "../pages/movies/Movies";
import MovieDetails from "../pages/movies/MovieDetails";
import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  if (location.pathname === "/aboutus") {
    return null;
  }
  const apiKey = "936af801afc98e81ee8d785b94b8e3a8";
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query`;
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `${searchUrl}=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className="d-block d-md-none d-lg-block" style={{ width: "425px" }}>
        <form
          className="d-flex"
          role="search"
          onSubmit={searchMovie}
          name="query"
          value={query}
          onChange={changeHandler}
        >
          <input
            className="form-control me-2 fw-bold"
            type="search"
            placeholder="Search movies & shows"
          />
          <button className="search_btn rounded p-1 fw-bold" type="submit">
            Search
          </button>
        </form>
      </div>
      {/* <ul>
    {movies.map((movie) => (
      <li key={movie.id}>
        <h3 style={{color: 'white'}}>{movie.title}</h3>
      </li>
    ))}
  </ul> */}
    </>
  );
};

export default Search;

import React from "react";

const Search = () => {
  return (
    <form className="d-flex" role="search">
      <input
        className="form-control me-2 fw-bold"
        type="search"
        placeholder="Search movies"
      />
      <button className="btn search_btn fw-bold" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;

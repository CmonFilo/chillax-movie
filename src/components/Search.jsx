import React from "react";

const Search = () => {
  return (
    <form className="d-flex" role="search">
      <input
        className="form-control me-2 fw-bold"
        type="search"
        placeholder="Search movies & shows"
      />
      <button className="search_btn rounded p-1 fw-bold" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;

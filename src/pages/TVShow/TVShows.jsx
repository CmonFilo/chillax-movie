import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Pagination } from "antd";

const TVShows = () => {
  const [shows, setShows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/tv/popular?&api_key=936af801afc98e81ee8d785b94b8e3a8&page=${currentPage}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setShows(response.data.results);
        setTotalPages(response.data.total_pages);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, [currentPage]);

  const basePosterUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="container">
      <h1 className="header_CL mt-2">
        <span className="ms-2 fw-bold">TV Shows</span>
      </h1>
      <div className="row">
        {shows.map((show) => (
            <div className="col-4 col-md-3 text-center" key={show.id}>
              <Link to={`/shows/${show.id}`}>
              <figure className="figure">
                <img
                  src={`${basePosterUrl}${show.poster_path}`}
                  alt={show.name}
                  style={{ width: "320px", height: "500px" }}
                  className="figure-img img-fluid rounded"
                />
                <figcaption className="figure-caption" style={{fontSize:'20px'}}>{show.name}</figcaption>
              </figure>
          </Link>
            </div>
        ))}
      </div>

      <Pagination
          defaultCurrent={1}
          total={150}
          onChange={(currentPage) => setCurrentPage(currentPage)}
          disabled={currentPage === totalPages}
          style={{textAlign: 'center'}}
        />
    </div>
  );
};

export default TVShows;

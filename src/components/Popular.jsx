import React from "react";

const Popular = () => {
  return (
    <div className="row flex-column flex-md-row m-2">
      <div className="col-12 col-md-6 mt-3">
        <table className="table_CL rounded" style={{ width: "100%" }}>
          <tr>
            <th colspan="4">
              <h2
                class="fw-bold reward_head rounded-top text-center g-0"
                style={{ width: "100%" }}
              >
                Popular Movies
              </h2>
            </th>
          </tr>
          <tr>
            <th></th>
            <th>Movie Name</th>
            <th>Viewer</th>
            <th>Release Date</th>
          </tr>
          <tr>
            <td>1.</td>
            <td>Oppenheimer</td>
            <td>40k</td>
            <td>19/07/2023</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>Barbie</td>
            <td>38k</td>
            <td>19/07/2023</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>The Nun II</td>
            <td>37k</td>
            <td>06/09/2023</td>
          </tr>
          <tr>
            <td>4.</td>
            <td>Suzume</td>
            <td>35k</td>
            <td>11/11/2022</td>
          </tr>
          <tr>
            <td>5.</td>
            <td>Sisu</td>
            <td>31k</td>
            <td>27/01/2023</td>
          </tr>
        </table>
      </div>
      <div className="col-12 col-md-6 mt-3">
        <table className="table_CL rounded" style={{ width: "100%" }}>
          <tr>
            <th colspan="4">
              <h2
                class="fw-bold reward_head rounded-top text-center g-0"
                style={{ width: "100%" }}
              >
                Popular TV Shows
              </h2>
            </th>
          </tr>
          <tr>
            <th></th>
            <th>TV Show Name</th>
            <th>Viewer</th>
            <th>First Air Date</th>
          </tr>
          <tr>
            <td>1.</td>
            <td>In Our Splendid Time</td>
            <td>20k</td>
            <td>30/08/2023</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>Pira-Pirasong Paraiso</td>
            <td>18k</td>
            <td>25/07/2023</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>Fuzuê</td>
            <td>17k</td>
            <td>14/08/2023</td>
          </tr>
          <tr>
            <td>4.</td>
            <td>Bhagya Lakshmi</td>
            <td>10k</td>
            <td>03/08/2021</td>
          </tr>
          <tr>
            <td>5.</td>
            <td>Star Wars: The Clone Wars</td>
            <td>8k</td>
            <td>03/10/2008</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Popular;

import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router-dom";

export const MoviePage = () => {
  let match = useRouteMatch();

  const [movieDetail, setMovieDetail] = useState([
    {
      movieDetail: [
        {
          Poster: "",
          Title: "",
          Year: "",
          imdbID: "",
          Genre: "",
          Director: "",
          Runtime: "",
          Rating: "",
        },
      ],
    },
  ]);

  useEffect(() => {
    axios
      .get(
        `http://www.omdbapi.com?apikey=faf7e5bb&i=${match.params.imdbID}&plot=full`
      )
      .then((res) => {
        setMovieDetail(res.data);
      });
  }, []);

  return (
    <table>
      <tr>
        <td rowSpan={2}>
          <img src={movieDetail.Poster} alt="Poster" width="200px" />
        </td>
        <td>
          Title:
          <br />
          {movieDetail.Title}
          <br />
          {movieDetail.Year}
        </td>
      </tr>
      <tr>
        <td>
          Plot:
          <br />
          {movieDetail.Plot}
        </td>
      </tr>
      <tr>
        <td>
          Directed by:
          <br />
          {movieDetail.Director}
        </td>
      </tr>
    </table>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <MoviePage />
  </BrowserRouter>,
  document.getElementById("root")
);

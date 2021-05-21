import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, useHistory } from "react-router-dom";

export const MoviesList = () => {
  let history = useHistory();
  const [movies, setMovies] = useState([
    { movies: [{ Poster: "", Title: "", Year: "", imdbID: "" }] },
  ]);

  useEffect(() => {
    axios.get(`http://www.omdbapi.com?apikey=faf7e5bb&s=Batman`).then((res) => {
      setMovies(res.data.Search);
    });
  }, []);

  const handleClick = (imdbID) => {
    history.push("/details?imdbID=" + imdbID);
  };

  return (
    <table>
      <tr>
        <th>Poster</th>
        <th>Title</th>
        <th>Year</th>
        <th>-</th>
      </tr>
      {movies.map((movie) => (
        <tr>
          <td>
            <img src={movie.Poster} alt="Poster" width="50px" />
          </td>
          <td>{movie.Title}</td>
          <td>{movie.Year}</td>
          <td>
            <button onClick={() => handleClick(movie.imdbID)}>
              See Movie Details
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <MoviesList />
  </BrowserRouter>,
  document.getElementById("root")
);

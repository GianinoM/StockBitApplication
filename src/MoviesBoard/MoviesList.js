import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, useHistory } from "react-router-dom";
import Modal from "react-modal";
import "./MoviesBoard.css";

export const MoviesList = () => {
  let history = useHistory();
  const [imageUrl, setImageUrl] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [movies, setMovies] = useState([
    { movies: [{ Poster: "", Title: "", Year: "", imdbID: "" }] },
  ]);

  useEffect(() => {
    axios.get(`http://www.omdbapi.com?apikey=faf7e5bb&s=Batman`).then((res) => {
      setMovies(res.data.Search);
    });
  }, []);

  const handleClick = (imdbID) => {
    history.push("/movies/" + imdbID);
  };

  const handleImageClick = (imageUrl) => {
    setImageUrl(imageUrl);
    handleShowDialog();
  };

  const handleShowDialog = () => {
    setShowDialog(!showDialog);
  };

  return (
    <>
      <table>
        <tr>
          <td colSpan="3">
            <label>Input Keyword:</label>
            <input type="text" />
          </td>
          <td colSpan="2">
            <button style={{ width: 100 }}>Search</button>
          </td>
        </tr>
        <tr>
          <th>Poster</th>
          <th>Title</th>
          <th>Year</th>
          <th>-</th>
        </tr>
        {movies.map((movie) => (
          <tr>
            <td>
              <img
                src={movie.Poster}
                alt="Poster"
                width="50px"
                onClick={() => handleImageClick(movie.Poster)}
              />
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
        {showDialog && (
          <Modal
            isOpen={showDialog}
            onRequestClose={showDialog}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            className="PosterOverlay"
          >
            <img src={imageUrl ? imageUrl : ""} alt="Poster" width="100%"></img>
            <button onClick={() => handleShowDialog()}>close </button>
          </Modal>
        )}
      </table>
    </>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <MoviesList />
  </BrowserRouter>,
  document.getElementById("root")
);

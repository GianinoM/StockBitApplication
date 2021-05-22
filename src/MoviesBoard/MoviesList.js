import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, useHistory } from "react-router-dom";
import Modal from "react-modal";
import "./MoviesBoard.css";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "./store/actions/moviesActions";

import { Provider } from "react-redux";
import store from "./store";

export const MoviesList = () => {
  let history = useHistory();
  const [imageUrl, setImageUrl] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies.Search);

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

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearch = () => {
    dispatch(searchMovies(keyword));
  };

  return (
    <>
      <table>
        <tr>
          <td colSpan="3">
            <label>Input Keyword: </label>
            <input type="text" name="keyword" onChange={handleInputChange} />
          </td>
          <td colSpan="2">
            <button style={{ width: 100 }} onClick={() => handleSearch()}>
              Search
            </button>
          </td>
        </tr>
        <tr>
          <th>Poster</th>
          <th>Title</th>
          <th>Year</th>
          <th>-</th>
        </tr>
        {movies &&
          movies.length &&
          movies.map((movie) => (
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
    <Provider store={store}>
      <MoviesList />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

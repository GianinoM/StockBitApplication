import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, useHistory } from "react-router-dom";
import Modal from "react-modal";
import "./MoviesBoard.css";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies, searchMoreMovies } from "./store/actions/moviesActions";

import { Provider } from "react-redux";
import store from "./store";

export const MoviesList = () => {
  let history = useHistory();

  const [imageUrl, setImageUrl] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies.Search);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!loading) {
      return;
    }
    handleSearchMoreMovies();
  }, [loading]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      setLoading(true);
  };

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
    setPage(page + 1);
  };

  const handleSearchMoreMovies = () => {
    setTimeout(() => {
      dispatch(searchMoreMovies(keyword, page));
      setPage(page + 1);
      setLoading(false);
    }, 3000);
  };

  let displayMovies = [];
  if (movies && movies.length) {
    for (let mv in movies) {
      displayMovies.push(
        <tr>
          <td>
            <img
              src={movies[mv].Poster}
              alt="Poster"
              width="50px"
              onClick={() => handleImageClick(movies[mv].Poster)}
            />
          </td>
          <td>{movies[mv].Title}</td>
          <td>{movies[mv].Year}</td>
          <td>
            <button onClick={() => handleClick(movies[mv].imdbID)}>
              See Movie Details
            </button>
          </td>
        </tr>
      );
    }
  }

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
        {displayMovies}
        {loading && "Loading..."}
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

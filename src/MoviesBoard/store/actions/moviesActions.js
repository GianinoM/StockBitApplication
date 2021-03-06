import axios from "axios";
import {
  SEARCH_MOVIES,
  SEARCH_ERROR,
  SEARCH_MORE_MOVIES,
} from "../../constants";

export const searchMovies = (keyword) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://www.omdbapi.com?apikey=faf7e5bb&s=${keyword}`
    );
    dispatch({
      type: SEARCH_MOVIES,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: SEARCH_ERROR,
      payload: console.log(e),
    });
  }
};

export const searchMoreMovies = (keyword, page) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://www.omdbapi.com?apikey=faf7e5bb&s=${keyword}&Page=${page}`
    );
    dispatch({
      type: SEARCH_MORE_MOVIES,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: SEARCH_ERROR,
      payload: console.log(e),
    });
  }
};

import { SEARCH_MORE_MOVIES, SEARCH_MOVIES } from "../../constants";

const initialState = {
  movies: [],
  keyword: "",
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        keyword: "",
        loading: false,
      };

    case SEARCH_MORE_MOVIES:
      return {
        ...state,
        movies: {
          ...action.payload,
          Search: [...state.movies.Search, ...action.payload.Search],
        },
      };
    default:
      return state;
  }
}

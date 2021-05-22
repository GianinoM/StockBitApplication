import { SEARCH_MOVIES } from "../../constants";

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
    default:
      return state;
  }
}

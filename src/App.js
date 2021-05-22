import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Anagram } from "./Anagram/Anagram";
import { MoviePage } from "./MoviesBoard/MoviePage";
import { MoviesList } from "./MoviesBoard/MoviesList";
import store from "./MoviesBoard/store";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/anagram">Anagram</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>

        <div>
          Please use the corresponding navigation at the top bar for each
          answers
        </div>
        <hr />

        <Switch>
          <Route exact path="/anagram">
            <AnagramBoard />
          </Route>
          <Route exact={true} path="/movies">
            <Provider store={store}>
              <MoviesList />
            </Provider>
          </Route>
          <Route path="/movies/:imdbID">
            <MoviePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function AnagramBoard() {
  return (
    <div>
      <h2> this is my work regarding the first question</h2>
      <Anagram />
    </div>
  );
}

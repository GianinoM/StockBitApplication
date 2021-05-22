import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Anagram } from "./Anagram/Anagram";
import { MoviePage } from "./MoviesBoard/MoviePage";
import { MoviesList } from "./MoviesBoard/MoviesList";
import store from "./MoviesBoard/store";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
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

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
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

// You can think of these components as "pages"
// in your app.

function AnagramBoard() {
  return (
    <div>
      <h2> this is my work regarding the first question</h2>
      <Anagram />
    </div>
  );
}

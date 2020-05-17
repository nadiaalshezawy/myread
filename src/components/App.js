import React from "react";
import { Route, Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./App.css";
import * as BooksAPI from "../apis/BooksAPI";

class BooksApp extends React.Component {
  state = { books: [] };
  constructor() {
    super();

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.state = {
      books,
    };
  }
  //Take the term and return the search result
  onSearchSubmit(term) {
    console.log(term);
    BooksAPI.search(term)
      .then((response) => {
        console.log(response[1]);
        response.map();
        //this.setState({ books: response });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });

    //  console.log(response);
  }
  render() {
    //the main app have two route main page or search
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books-title">
              <h1>MyReads</h1>
              <div className="open-search">
                <Link to="/search">
                  <button type="button">add book</button>
                </Link>
              </div>
            </div>
          )}
        />
        <Route
          path="/search"
          render={() => <SearchBar onTermSubmit={this.onSearchSubmit} />}
        />
      </div>
    );
  }
}

export default BooksApp;

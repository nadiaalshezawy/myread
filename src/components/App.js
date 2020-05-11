import React from "react";
import { Route } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./App.css";

class BooksApp extends React.Component {
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books-title">
              <h1>MyReads</h1>
              <div className="open-search">
                <button>Add a book</button>
              </div>
            </div>
          )}
        />
        <Route path="/search" render={() => <SearchBar />} />
      </div>
    );
  }
}

export default BooksApp;

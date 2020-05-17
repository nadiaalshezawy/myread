import React from "react";
import { Route, Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./App.css";
import * as BooksAPI from "../apis/BooksAPI";

class BooksApp extends React.Component {
  /*

  //how to get the result another way
    ///.then((response) => {
    ///console.log(response.data.results);
    /// });

  fetch('https://api.mydomain.com')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
   onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
    .then(data => data.books)
  
  
  export const search = (query) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
    .then(data => data.books)
*/

  onSearchSubmit(term) {
    console.log(term);
    BooksAPI.search(term)
      .then((response) => {
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
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

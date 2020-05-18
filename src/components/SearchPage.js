import React from "react";
import SearchBar from "./SearchBar";
import "./App.css";
import BooksList from "./BooksList";
import * as BooksAPI from "../apis/BooksAPI";

class SearchPage extends React.Component {
  state = { books: [] };
  constructor(props) {
    super(props);
    // this.state = {
    //  books: [],
    //};

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }
  //Take the term and return the search result
  onSearchSubmit = async (term) => {
    console.log(term);
    await BooksAPI.search(term)
      .then((response) => {
        this.setState({ books: response });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
    console.log("from search sumbit");
    console.log(this.state.books);
    //   <BooksList books={this.state.books} />
  };
  render() {
    return (
      <div>
        <SearchBar onTermSubmit={this.onSearchSubmit} />
        <BooksList books={this.state.books} />
      </div>
    );
  }
}

export default SearchPage;

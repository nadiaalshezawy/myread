import React from "react";
import SearchBar from "./SearchBar";
import "./App.css";
import BooksList from "./BooksList";
import * as BooksAPI from "../apis/BooksAPI";

class SearchPage extends React.Component {
  state = { books: [], message: "data" };
  constructor(props) {
    super(props);

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onOptionSubmit = this.onOptionSubmit.bind(this);
  }

  //Take the term and return the search result
  onSearchSubmit = (term) => {
    console.log(term);
    BooksAPI.search(term)
      .then((response) => {
        this.setState({ books: response });
        if (response.length > 0) this.setState({ message: "data" });
        else this.setState({ message: "0 result found" });
        // console.log(this.state.message);
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  onOptionSubmit = (Book, option) => {
    BooksAPI.update(Book, option)
      .then((response) => {
        if (option !== "none") {
          alert("The book have been added to your shelf");
        } else alert("The book have been removed from your shelf");
        // console.log(response);
      })
      .catch((error) => {
        alert("Their was an error while add a book to your shelf");
        // console.log("error shelfing book");
      });
    console.log("from search page");
  };

  render() {
    return (
      <div className="search-books">
        <SearchBar onTermSubmit={this.onSearchSubmit} />
        {this.state.message === "data" ? (
          <div>
            <div className="container"></div>
            <div className="search-books-results">
              <ol className="books-grid">
                <BooksList
                  books={this.state.books}
                  onOptionSubmit={this.onOptionSubmit}
                />
              </ol>
            </div>
          </div>
        ) : (
          <div>
            <br />
            <br />
            <h2>{this.state.message}</h2>
          </div>
        )}
      </div>
    );
  }
}

export default SearchPage;

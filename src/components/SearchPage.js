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
    this.onOptionSubmit = this.onOptionSubmit.bind(this);
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

  onOptionSubmit = (Book, option) => {
    BooksAPI.update(Book, option)
      .then((response) => {
        if (option !== "none") {
          alert("The book have been added to your shelf");
        }
        console.log(response);
      })
      .catch((error) => {
        alert("Their was an error while add a book to your shelf");
        console.log("error shelfing book");
      });
    console.log("from search page");
  };
  render() {
    return (
      <div>
        <div className="search-books">
          <SearchBar onTermSubmit={this.onSearchSubmit} />
        </div>

        <div className="search-books-results">
          <BooksList
            books={this.state.books}
            onOptionSubmit={this.onOptionSubmit}
          />
        </div>
      </div>
    );
  }
}

export default SearchPage;

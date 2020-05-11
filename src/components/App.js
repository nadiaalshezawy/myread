import React from "react";
import "./App.css";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="list-books-title">
        <h1>MyReads</h1>
        <div className="open-search">
          <button>Add a book</button>
        </div>
      </div>
    );
  }
}

export default BooksApp;

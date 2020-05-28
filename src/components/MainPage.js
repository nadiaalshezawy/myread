import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import BooksList from "./BooksList";
import BookShelfChanger from "./BookShelfChanger";

class MainPage extends React.Component {
  // <BookShelfChanger onwordSubmit={this.onCheckSubmit} />
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <BooksList
                  books={this.props.BooksShelfs.ReadBooks}
                  onOptionSubmit={this.props.onOptionSubmit}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">{/*Want to Read */}</div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books"></div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button type="button">add book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default MainPage;

import React from "react";
import "./App.css";

class BookItem extends React.Component {
  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover">
              <img
                alt={this.props.book.description}
                src={this.props.book.imageLinks.thumbnail}
              />
            </div>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </li>
    );
  }
}

export default BookItem;

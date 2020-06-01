import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import BooksList from "./BooksList";
import BookShelfChanger from "./BookShelfChanger";
import * as BooksAPI from "../apis/BooksAPI";

class MainPage extends React.Component {
  state = {
    optionSelected: "None",
    BookId: "",
    read: [],
    CurrentlyReading: [],
    wantToRead: [],
  };

  constructor(props) {
    super(props);

    this.onOptionSubmit = this.onOptionSubmit.bind(this);
  }

  componentDidMount() {
    this.getShelfs();
  }

  getShelfs() {
    BooksAPI.getAll()
      .then((books) => {
        console.log(books);
        books.map((book) => {
          //console.log(book.shelf);
          switch (book.shelf) {
            case "currentlyReading":
              console.log("currentlyReadin");
              this.setState({
                CurrentlyReading: this.state.CurrentlyReading.concat(book),
              });
              break;
            case "wantToRead":
              console.log("wantToRead");
              this.setState({
                wantToRead: this.state.wantToRead.concat(book),
              });
              break;
            case "read":
              console.log("read");
              this.setState({
                read: this.state.read.concat(book),
              });
              break;
            default:
              break;
          }
        });
      })
      .catch((error) => {
        console.log("error shelfing book");
      });
  }

  onOptionSubmit = (selectValue, id) => {
    this.setState({ optionSelected: selectValue, BookId: id }, () => {});
  };
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
                  books={this.state.CurrentlyReading}
                  onOptionSubmit={this.onOptionSubmit}
                />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <BooksList
                  books={this.state.wantToRead}
                  onOptionSubmit={this.onOptionSubmit}
                />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <BooksList
                  books={this.state.read}
                  onOptionSubmit={this.onOptionSubmit}
                />
              </div>
            </div>
          </div>
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

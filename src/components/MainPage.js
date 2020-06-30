import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import BooksList from "./BooksList";
import * as BooksAPI from "../apis/BooksAPI";

class MainPage extends React.Component {
  state = {
    read: [],
    CurrentlyReading: [],
    wantToRead: [],
  };

  constructor(props) {
    super(props);

    this.onOptionSubmit = this.onOptionSubmit.bind(this);
    this.getShelfs = this.getShelfs.bind(this);
  }

  componentDidMount() {
    this.getShelfs();
  }

  getShelfs = () => {
    this.setState({ read: [], CurrentlyReading: [], wantToRead: [] });
    BooksAPI.getAll()
      .then((books) => {
        console.log(books);
        books.forEach((book) => {
          console.log(book.shelf);
          switch (book.shelf) {
            case "currentlyReading":
              console.log("currentlyReading ");
              this.setState({
                CurrentlyReading: this.state.CurrentlyReading.concat(book),
              });
              // }
              break;
            case "wantToRead":
              this.setState({
                wantToRead: this.state.wantToRead.concat(book),
              });
              //  }
              break;
            case "read":
              console.log("read");
              this.setState({
                read: this.state.read.concat(book),
              });
              break;
            case "none":
              this.setState(this.state);

              break;

            default:
              break;
          }
        });
      })
      .catch((error) => {
        console.log("error shelfing book");
      });
  };
  onOptionSubmit = (Book, option) => {
    BooksAPI.update(Book, option)
      .then((response) => {
        this.getShelfs();
        if (option !== "none") {
          //this.getShelfs();
          alert("The book have been added to your shelf");
        } else {
          // this.getShelfs();
          alert("The book have been removed from your shelf");
        }
        //  console.log(response);
      })
      .catch((error) => {
        alert("Their was an error while add a book to your shelf");
        // console.log("error shelfing book");
      });
    // console.log("from main page");
  };

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
                <ol className="books-grid">
                  <BooksList
                    books={this.state.CurrentlyReading}
                    onOptionSubmit={this.onOptionSubmit}
                    message=" "
                  />
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <BooksList
                    books={this.state.wantToRead}
                    onOptionSubmit={this.onOptionSubmit}
                  />
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <BooksList
                    books={this.state.read}
                    onOptionSubmit={this.onOptionSubmit}
                  />
                </ol>
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

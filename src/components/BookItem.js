import React from "react";
import "./App.css";
import BookShelfChanger from "./BookShelfChanger";
import * as BooksAPI from "../apis/BooksAPI";

class BookItem extends React.Component {
  state = {
    shelf: "",
  };
  constructor(props) {
    super(props);

    this.checkList = this.checkList.bind(this);
  }

  componentDidMount() {
    this.checkList();
  }

  checkList = () => {
    BooksAPI.get(this.props.book.id)
      .then((response) => {
        this.setState({ shelf: response.shelf });
        //  console.log(response);
      })
      .catch((error) => {
        console.log("book is not in list");
        this.setState({ shelf: "none" });
      });
  };

  render() {
    const imageThumb = this.props.book.imageLinks
      ? this.props.book.imageLinks.smallThumbnail
      : null;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${imageThumb})`,
              }}
            ></div>

            <BookShelfChanger
              onOptionSubmit={this.props.onOptionSubmit}
              checkList={this.checkList}
              book={this.props.book}
              shelf={this.state.shelf}
            />
          </div>
        </div>

        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </li>
    );
  }
}

export default BookItem;

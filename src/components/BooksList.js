import React from "react";
import "./App.css";
//<div>{book.title}</div>
//return <img src={book.imageLinks.smallThumbnail} />;
const BooksList = (props) => {
  console.log("frombookslist");
  console.log(props.books);
  if (props.books.length > 0) {
    const books = props.books.map((book) => {
      return <img src={book.imageLinks.smallThumbnail} />;
    });
    return <div>{books}</div>;
  } else return <h1>Loading</h1>;
};

export default BooksList;

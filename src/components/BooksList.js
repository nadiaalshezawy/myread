import React from "react";
import BookItem from "./BookItem";

//<div>{book.title}</div>
//<BookItem key={book.id} />;
//return <img src={book.imageLinks.smallThumbnail} />;
const BooksList = (props) => {
  console.log("frombookslist");
  console.log(props.books);
  if (props && props.books && props.books.length > 0) {
    const books = props.books.map((book) => {
      return <BookItem key={book.id} book={book} />;
    });
    return <div>{books}</div>;
  } else return null;
};

export default BooksList;

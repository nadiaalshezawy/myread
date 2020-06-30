import React from "react";
import BookItem from "./BookItem";

const BooksList = (props) => {
  if (props && props.books && props.books.length > 0) {
    // const onCheckSubmit = props.onCheckSubmit;
    const books = props.books.map((book) => {
      return (
        <BookItem
          book={book}
          onOptionSubmit={props.onOptionSubmit}
          key={book.id}
        />
      );
    });
    return books;
  } else return null;
};

export default BooksList;

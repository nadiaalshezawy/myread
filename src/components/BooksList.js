import React from "react";
import BookItem from "./BookItem";

//<div>{book.title}</div>
//<BookItem key={book.id} />;
//return <img src={book.imageLinks.smallThumbnail} />;
const BooksList = (props) => {
  //console.log("frombookslist");
  // console.log(props.books);

  if (props && props.books && props.books.length > 0) {
    // const onCheckSubmit = props.onCheckSubmit;
    const books = props.books.map((book) => {
      return (
        <ol className="books-grid" key={book.id}>
          <BookItem book={book} onOptionSubmit={props.onOptionSubmit} />
        </ol>
      );
    });
    return books;
  } else return null;
};

export default BooksList;

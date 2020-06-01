import React from "react";
import "./App.css";
import * as BooksAPI from "../apis/BooksAPI";

/*
 constructor(props){
    super(props)
    this.state = {
      result: ''
    };
  }
  
  handleSelectChange = (event) => {
    this.setState({
      result: event.target.value
    })
  }

  render() {
    return (
      <div>
      <select onClick={this.handleSelectChange}>
          <option value="1">Blah</option>
          <option value="2">Blah2</option>
          <option value="3">Blah3</option>
      </select>
      {this.state.result}
      </div>
    );
  }
*/

class BookShelfChanger extends React.Component {
  // state = { ReadBooks: [], CurrentlyReadingBooks: [], WantToReadBooks: [] };
  state = { valueDefault: " " };
  constructor(props) {
    super(props);
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange = (event) => {
    console.log("from shelf change");
    console.log(event.target.value);

    var option = event.target.value;
    var Book = this.props.Book;

    /* 
   BooksAPI.update(this.props.Book, option)
      .then((response) => {
        if (option !== "none") {
          alert("The book have been added to your shelf");
          //  this.setState({ v: option });
        }
        console.log(response);
      })
      .catch((error) => {
        alert("Their was an error while add a book to your shelf");
        console.log("error shelfing book");
      });
      */
    BooksAPI.getAll()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("error shelfing book");
      });

    //this.props.onOptionSubmit(event.target.value);
    this.props.onOptionSubmit(Book, option);
  };

  render() {
    return (
      <div>
        <div className="book-shelf-changer">
          <select
            onChange={this.onValueChange.bind(this)}
            value={this.state.valueDefault}
          >
            <option value="Move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
    );
  }
}

export default BookShelfChanger;

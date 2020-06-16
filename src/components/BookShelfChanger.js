import React from "react";
import "./App.css";

class BookShelfChanger extends React.Component {
  constructor(props) {
    super(props);

    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange = (event) => {
    // console.log("from shelf change");
    //   console.log(event.target.value);

    var option = event.target.value;
    var book = this.props.book;

    this.props.onOptionSubmit(book, option);
    this.props.checkList();
    this.setState(this.state);
  };

  render() {
    return (
      <div>
        <div className="book-shelf-changer">
          <select
            onChange={this.onValueChange.bind(this)}
            value={this.props.shelf}
          >
            <option value="move" disabled>
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

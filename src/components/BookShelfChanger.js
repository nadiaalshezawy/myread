import React from "react";
import "./App.css";

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
  state = { value: "None" };
  constructor(props) {
    super(props);
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange = (event) => {
    console.log("from shelf change");
    console.log(event.target.value);
    //this.props.onOptionSubmit(event.target.value);
    this.props.onOptionSubmit(event.target.value, this.props.BookId);
  };

  render() {
    return (
      <div>
        <div className="book-shelf-changer">
          <select
            onChange={this.onValueChange.bind(this)}
            value={this.state.value}
          >
            <option value="Move">Move to...</option>
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

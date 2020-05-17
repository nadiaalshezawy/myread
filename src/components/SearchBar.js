import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

class SearchBar extends React.Component {
  state = { term: " " };

  //when input change update term value
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
    this.props.onTermSubmit(this.state.term);
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="app">
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/">
              <button className="close-search">Close</button>
            </Link>
            <form onSubmit={this.onFormSubmit}>
              <div className="search-books-input-wrapper">
                <input
                  type="text"
                  placeholder="Search by title or author "
                  onChange={this.onInputChange.bind(this)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;

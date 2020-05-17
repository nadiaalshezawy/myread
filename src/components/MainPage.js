import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

class MainPage extends React.Component {
  render() {
    return (
      <div className="list-books-title">
        <h1>MyReads</h1>
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

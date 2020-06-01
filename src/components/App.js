import React from "react";
import { Route } from "react-router-dom";
import MainPage from "./MainPage";
import SearchPage from "./SearchPage";
import "./App.css";

class BooksApp extends React.Component {
  render() {
    //the main app have two route main page or search
    return (
      <div className="app">
        <Route exact path="/" render={() => <MainPage />} />
        <Route path="/search" render={() => <SearchPage />} />
      </div>
    );
  }
}

export default BooksApp;

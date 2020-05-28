import React from "react";
import { Route } from "react-router-dom";
import MainPage from "./MainPage";
import SearchPage from "./SearchPage";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    optionSelected: "None",
    BookId: "",
    BooksShelfs: {
      ReadBooks: [],
      CurrentlyReadingBooks: [],
      WantToReadBooks: [],
    },
  };

  constructor(props) {
    super(props);

    this.onOptionSubmit = this.onOptionSubmit.bind(this);
  }
  /*
/*this.setState({
          arr: this.state.BooksShelfs.CurrentlyReadingBooks.concat(
            this.state.BookId
          ),
        });
        //console.log(this.state.BooksShelfs.CurrentlyReadingBooks);
        var joined = this.state.BooksShelfs.CurrentlyReadingBooks.concat(
          this.state.BookId
        );
        //this.setState({ BooksShelfs.CurrentlyReadingBooks: [this.state.BooksShelfs.CurrentlyReadingBooks, joined ] }),
        this.setState({ CurrentlyReadingBooks: joined });
        */
  onOptionSubmit = (selectValue, id) => {
    this.setState({ optionSelected: selectValue, BookId: id }, () => {
      if (
        this.state.BookId &&
        this.state.optionSelected === "currentlyReading"
      ) {
        this.setState({
          BooksShelfs: this.state.BooksShelfs.CurrentlyReadingBooks.concat(
            this.state.BookId
          ),
        });
        console.log("condition met");
      }
      // console.log("from app " + { selectValue });
      // console.log(this.state.BookId);
      /// console.log(this.state.optionSelected);
    });
  };
  render() {
    //the main app have two route main page or search
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <MainPage
              onOptionSubmit={this.onOptionSubmit}
              BooksShelfs={this.state.BooksShelfs}
            />
          )}
        />
        <Route
          path="/search"
          render={() => <SearchPage onOptionSubmit={this.onOptionSubmit} />}
        />
      </div>
    );
  }
}

export default BooksApp;

import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

const movies = [
  {
    title: "Matrix",
    poster: ""
  },
  {
    title: "Full Metal Jacket",
    poster: ""
  },
  {
    title: "Oldboy",
    poster: ""
  },
  {
    title: "Star Wars",
    poster: ""
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return (
            <Movie title={movie.title} poster={movie.poster} key={index} />
          );
        })}
      </div>
    );
  }
}
export default App;

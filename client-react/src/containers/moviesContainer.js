import React, { Component } from "react";

class MoviesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return <h3 className="moviesPage">Movies</h3>;
  }
}

export default MoviesContainer;

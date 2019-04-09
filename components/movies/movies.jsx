import React from 'react';
import CardsList from '../cards-list/cards-list';

export default class MoviesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  render() {
    const { movies } = this.props;

    return <CardsList movies={movies} />;
  }
}

import React from 'react';
import { connect } from 'react-redux';
import MoviesContainer from '../movies/movies';
import Header from '../header/header';
import SearchForm from '../search-form/search-form';
import ErrorBoundary from './error-boundary';

class MainComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: 'Movies',
    };
  }

  render() {
    const { movies } = this.props;
    console.log(this.props);
    return (
      <ErrorBoundary>
        <div className="main">
          <Header />
          <SearchForm />
          <MoviesContainer movies={movies} />
        </div>
      </ErrorBoundary>
    );
  }
}

const mapStateToProps = store => ({
  movies: store.movies,
});

export default connect(mapStateToProps)(MainComponent);

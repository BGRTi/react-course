import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MoviesContainer from '../movies/movies';
import Header from '../header/header';
import SearchForm from '../search-form/search-form';
import ErrorBoundary from './error-boundary';

class MainComponent extends React.Component {
  render() {
    const { movies } = this.props;
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

MainComponent.defaultProps = {
  movies: [],
};

MainComponent.propTypes = {
  movies: PropTypes.shape({ movies: PropTypes.array }),
};

const mapStateToProps = store => ({
  movies: store.movies,
});

export default connect(mapStateToProps)(MainComponent);

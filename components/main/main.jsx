import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MoviesContainer from '../movies/movies';
import Header from '../header/header';
import Filters from '../filters/filters';
import SearchForm from '../search-form/search-form';
import ErrorBoundary from './error-boundary';

class MainComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
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
          <Filters />
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

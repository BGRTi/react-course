import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MoviesContainer from '../movies/movies';
import Header from '../header/header';
import SearchForm from '../search-form/search-form';
import searchMovie from '../../actions/movies';
import ErrorBoundary from './error-boundary';

class MainComponent extends React.Component {
  componentWillMount = () => {
    const { match, searchMovieProp } = this.props;
    const query = match.params.id;
    query.split('%20');
    searchMovieProp(query);
  }

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
  searchMovieProp: () => {},
  match: {},
};

MainComponent.propTypes = {
  movies: PropTypes.shape({ movies: PropTypes.array }),
  searchMovieProp: PropTypes.func,
  match: PropTypes.shape({ match: PropTypes.object }),
};

const mapStateToProps = store => ({
  movies: store.movies,
});

const mapDispatchToProps = dispatch => ({
  searchMovieProp: newMovies => dispatch(searchMovie(newMovies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);

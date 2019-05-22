import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MoviesContainer from '../movies/movies';
import Header from '../header/header';
import SearchForm from '../search-form/search-form';
import searchMovie from '../../actions/movies';
import ErrorBoundary from './error-boundary';

// @flow

type Props = {
  movies?: Array<string>,
  searchMovie: void,
  match?: Array<string>,
};

const Main = styled.div`
  height: 100vh;
`;

class MainComponent extends React.Component<Props> {
  static defaultProps = {
    movies: [],
    searchMovieProp: () => {},
    match: {},
  };

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
        <Main>
          <Header />
          <SearchForm />
          <MoviesContainer movies={movies} />
        </Main>
      </ErrorBoundary>
    );
  }
}

const mapStateToProps = store => ({
  movies: store.movies,
});

const mapDispatchToProps = dispatch => ({
  searchMovieProp: newMovies => dispatch(searchMovie(newMovies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);

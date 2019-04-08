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
      someState: 'Movies',
    };
  }
  
  render() {
    const { movies } = this.props;
    return (
      <ErrorBoundary>
        <div className="main">
          <Header />
          <SearchForm />
          <MoviesContainer props={movies} />
        </div>
      </ErrorBoundary>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    movies: store.posts.movies,
  };
};

export default connect(mapStateToProps)(MainComponent);

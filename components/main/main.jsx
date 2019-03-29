import React from 'react';
import MoviesContainer from '../movies/movies';
import Header from '../header/header';
import SearchForm from '../search-form/search-form';
import ErrorBoundary from './error-boundary';

export default class MainComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      someState: 'Movies',
    };
  }

  render() {
    const { someState } = this.state;
    return (
      <ErrorBoundary>
        <div className="main">
          <Header />
          <SearchForm />
          <MoviesContainer props={someState} />
        </div>
      </ErrorBoundary>
    );
  }
}

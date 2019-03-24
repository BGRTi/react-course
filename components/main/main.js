import React from 'react';
import ReactDOM from 'react-dom';
import MoviesContainer from '../movies/movies'
import Header from '../header/header';
import SearchForm from '../search-form/search-form';
import ErrorBoundary from './error-boundary';

export default class MainComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            someState: 'Movies'
        }
    }

    render() {
        return <ErrorBoundary>
            <div className='main'>
                <Header />
                <SearchForm />
                <MoviesContainer props={this.state.someState} />
            </div>
        </ErrorBoundary>
    }
}

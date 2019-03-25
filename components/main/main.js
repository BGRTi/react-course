import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MoviesContainer from '../movies/movies'
import Header from '../header/header';
import SearchForm from '../search-form/search-form';
import ErrorBoundary from './error-boundary';
import MoviePageContainer from '../movie-page/movie-page'

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

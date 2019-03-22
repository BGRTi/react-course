import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../header/header';
import SearchForm from '../search-form/search-form';
import ErrorBoundary from './error-boundary';

export default class MainComponent extends React.Component {
    render() {
        return <ErrorBoundary>
            <div className='main'>
                <Header />
                <SearchForm />
            </div>
        </ErrorBoundary>
    }
}

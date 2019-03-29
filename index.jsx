
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/header/header';
import SearchForm from './components/search-form/search-form';
import MainComponent from './components/main/main';
import MoviePageComponent from './components/movie-page/movie-page';

const AppRouter = () => (
  <Router>
    <div>
      <Link to="/">Home</Link>
      <Link to="/movie/">About</Link>
      <Header />
      <SearchForm />
      <Route path="/" exact component={MainComponent} />
      <Route path="/movie/" component={MoviePageComponent} />
    </div>
  </Router>
);

ReactDOM.render(<AppRouter />, document.getElementById('root'));

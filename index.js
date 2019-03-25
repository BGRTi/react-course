'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainComponent from './components/main/main';
import MoviePageComponent from './components/movie-page/movie-page'

function AppRouter() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movie/">About</Link>
              </li>
            </ul>
          </nav>
  
          <Route path="/" exact component={MainComponent} />
          <Route path="/movie/" component={MoviePageComponent} />
        </div>
      </Router>
    );
}

ReactDOM.render(<MainComponent />, document.getElementById('root'));
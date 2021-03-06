
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/header/header';
import MainComponent from './components/main/main';
import MoviePageComponent from './components/movie-page/movie-page';
import NoMatch from './components/no-match/no-match';

const AppRouter = ({
  Router, store,
}) => (
  <Provider store={store}>
    <Router location={location} context={context}>
      <div>
        <Link to="/">Home</Link>
        <Header />
        <Route path="/" exact component={MainComponent} />
        <Route path="/search/:query" component={MainComponent} />
        <Route path="/movie/:id" component={MoviePageComponent} />
        <Route component={NoMatch} />

        <Switch>
          <Route exact path="/" component={MainComponent} />
          <Route path="/search/:query" component={MainComponent} />
          <Route path="/movie/:id" component={MoviePageComponent} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default AppRouter;

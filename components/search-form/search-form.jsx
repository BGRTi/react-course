import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import searchMovie from '../../actions/movies';

type Props = {
  searchMovieProp: void
}

class SearchForm extends React.Component<Props> {
  static defaultProps = {
    searchMovieProp: () => {},
  }

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      searchBy: 'genres',
      redirect: false,
    };
  }

  searchByGenres = () => {
    this.setState({ searchBy: 'genres' });
  }

  searchByTitle = () => {
    this.setState({ searchBy: 'title' });
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      redirect: true,
    });
  }

  renderRedirect = (event) => {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to={`/search/${event.target.value}`} />;
    }
    return null;
  }

  handleSubmit = (event) => {
    const { searchMovieProp } = this.props;
    const { value, searchBy } = this.state;
    this.setState({ value: searchMovieProp(value, searchBy) });
    event.preventDefault();
  }

  render() {
    const { value } = this.state;

    return (
      <React.Fragment>
        {this.renderRedirect()}
        <form className="main-search" onSubmit={this.handleSubmit}>
          <label htmlFor="search">
            <input className="main-search--input" type="text" placeholder="Enter a film" value={value} onChange={this.handleChange} />
          </label>
          <input className="main-search--button" type="submit" value="Submit" />
        </form>
        <input className="movies-container--button" type="submit" value="Title" onSubmit={this.searchBytitle} />
        <input className="movies-container--button" type="submit" value="Genre" onSubmit={this.searchByGenres} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  value: state.value || [],
});

const mapDispatchToProps = dispatch => ({
  searchMovieProp: newMovies => dispatch(searchMovie(newMovies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);

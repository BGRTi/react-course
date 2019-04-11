import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import searchMovie from '../../actions/movies';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    const { searchMovieProp } = this.props;
    const { value } = this.state;
    this.setState({ value: searchMovieProp(value) });
    event.preventDefault();
  }

  render() {
    const { value } = this.state;

    return (
      <form className="main-search" onSubmit={this.handleSubmit}>
        <label htmlFor="search">
          <input className="main-search--input" type="text" placeholder="Enter a film" value={value} onChange={this.handleChange} />
        </label>
        <input className="main-search--button" type="submit" value="Submit" />
      </form>
    );
  }
}

SearchForm.defaultProps = {
  searchMovieProp: () => {},
};

SearchForm.propTypes = {
  searchMovieProp: PropTypes.shape({ searchMovieProp: PropTypes.func }),
};

const mapStateToProps = state => ({
  value: state.value || [],
});

const mapDispatchToProps = dispatch => ({
  searchMovieProp: newMovies => dispatch(searchMovie(newMovies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);

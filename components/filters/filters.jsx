import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getSearchBy from '../../actions/filters';

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
  }

  handleSubmit = (serachBy) => {
    const { getSearchByProp } = this.props;
    const { value } = this.state;
    this.setState({ value: getSearchByProp(serachBy) });
  }

  render() {
    const genres = 'genres';
    const title = 'title';

    return (
      <React.Fragment>
        <input className="movies-container--button" type="submit" value="Title" onSubmit={this.handleSubmit(title)} />
        <input className="movies-container--button" type="submit" value="Genre" onSubmit={this.handleSubmit(genres)} />
      </React.Fragment>
    );
  }
}

Filters.defaultProps = {
  getSearchByProp: () => {},
};

Filters.propTypes = {
  getSearchByProp: PropTypes.shape({ getSearchByProp: PropTypes.func }),
};

const mapDispatchToProps = dispatch => ({
  getSearchByProp: ({ filteredMovies }) => dispatch(getSearchBy(filteredMovies)),
});

export default connect(null, mapDispatchToProps)(Filters);

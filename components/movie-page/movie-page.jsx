import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import searchMovieById from '../../actions/movie';
import CardsList from '../cards-list/cards-list';

class MoviePageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [
        {
          id: 1,
          name: 'first',
          year: '1991',
          duration: '151',
          description: 'Some text about film',
          genres: ['drama', 'ne drama'],
        },
      ],
    };
  }

  componentDidMount = () => {
    this.loadMovie();
  }

  loadMovie = () => {
    const { match, searchMovieByIdProp } = this.props;
    console.log(match.params.id);
    searchMovieByIdProp(match.params.id);
  }

  render() {
    const { movie } = this.props;
    console.log(this.props);
    return (
      <React.Fragment>
        <div className="movie-page" />
        <CardsList films={movie} />
      </React.Fragment>
    );
  }
}


MoviePageContainer.defaultProps = {
  movie: [],
};

MoviePageContainer.propTypes = {
  movie: PropTypes.shape({ movies: PropTypes.array }),
};

const mapStateToProps = store => ({
  movie: store.movie,
});
const mapDispatchToProps = dispatch => ({
  searchMovieByIdProp: movieId => dispatch(searchMovieById(movieId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePageContainer);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import searchMovieById from '../../actions/movie';

class MoviePageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      films: {},
    };
  }

  componentDidMount = () => {
    console.log(2);
    this.loadMovie();
  }

  loadMovie = () => {
    const { match, searchMovieByIdProp } = this.props;
    searchMovieByIdProp(match.params.id);
  }

  render() {
    const { movie } = this.props;
    console.log(this.props);
    return (
      <React.Fragment>
        { movie.status === 'STATUS_DONE'
          ? (
            <div className="movie-card">
              <img src={movie.movie.poster_path} alt="img" height="300px" />
              <div>{movie.movie.title}</div>
              <div>
                Release date:
                {movie.movie.release_date}
              </div>
            </div>
          )
          : 'Nothing to show'}
      </React.Fragment>
    );
  }
}


MoviePageContainer.defaultProps = {
  movie: {},
  searchMovieByIdProp: () => {},
};

MoviePageContainer.propTypes = {
  movie: PropTypes.shape({ movie: PropTypes.array }),
  searchMovieByIdProp: PropTypes.func,
};

const mapStateToProps = store => ({
  movie: store.movie,
});
const mapDispatchToProps = dispatch => ({
  searchMovieByIdProp: movieId => dispatch(searchMovieById(movieId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePageContainer);

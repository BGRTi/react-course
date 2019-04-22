import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import searchMovieById from '../../actions/movie';
import CardList from '../cards-list/cards-list';

class MoviePageContainer extends React.Component {
  componentDidMount = () => {
    this.loadMovie();
  }

  loadMovie = () => {
    const { match, searchMovieByIdProp } = this.props;
    searchMovieByIdProp(match.params.id);
  }

  render() {
    const { movie, movies } = this.props;
    return (
      <React.Fragment>
        {
          movie.status === 'STATUS_DONE'
            ? (
              <div className="movie-page">
                <div className="movie-card">
                  <img src={movie.movie.poster_path} alt="img" height="300px" />
                  <div>{movie.movie.title}</div>
                  <div>
                    Release date:
                    {movie.movie.release_date}
                  </div>
                  <div>
                    <b>{movie.movie.overview}</b>
                  </div>
                </div>
                <div className="movie-page--card-list">
                  <CardList movies={movies} />
                </div>
              </div>
            )
            : 'Something went wrong'
        }
      </React.Fragment>
    );
  }
}


MoviePageContainer.defaultProps = {
  movie: {},
  searchMovieByIdProp: () => {},
  match: {},
  movies: {},
};

MoviePageContainer.propTypes = {
  movie: PropTypes.shape({ movie: PropTypes.array }),
  movies: PropTypes.shape({ movie: PropTypes.array }),
  searchMovieByIdProp: PropTypes.func,
  match: PropTypes.shape({ match: PropTypes.object }),
};

const mapStateToProps = store => ({
  movie: store.movie,
  movies: store.movies,
});
const mapDispatchToProps = dispatch => ({
  searchMovieByIdProp: movieId => dispatch(searchMovieById(movieId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePageContainer);

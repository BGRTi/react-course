import React from 'react';
import CardsList from '../cards-list/cards-list';

export default class MoviePageContainer extends React.Component {
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

  render() {
    const { films } = this.state;
    return (
      <React.Fragment>
        <div className="movie-page" />
        <CardsList films={films} />
      </React.Fragment>
    );
  }
}

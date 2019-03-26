import React from 'react';
import CardsList from '../cards-list/cards-list';

export default class MoviesContainer extends React.Component {
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
        {
          id: 2,
          name: 'second',
          year: '1992',
          duration: '152',
          description: 'Some text about film',
          genres: ['drama'],
        },
        {
          id: 3,
          name: 'third',
          year: '1993',
          duration: '153',
          description: 'Some text about film',
          genres: ['drama', 'ne drama'],
        },
      ],
    };
  }

  render() {
    const { films } = this.state;
    return <CardsList films={films} />;
  }
}

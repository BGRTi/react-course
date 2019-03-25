import React from 'react';

export default class MoviesContainer extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            films: [
                {
                    id: 1,
                    name: 'first',
                    year: '1991',
                    duration: '151',
                    description: 'Some text about film',
                    genres: ['drama', 'ne drama']
                },
                {
                    id: 2,
                    name: 'second',
                    year: '1992',
                    duration: '152',
                    description: 'Some text about film',
                    genres: ['drama']
                },
                {
                    id: 3,
                    name: 'third',
                    year: '1993',
                    duration: '153',
                    description: 'Some text about film',
                    genres: ['drama', 'ne drama']
                }
            ],
        }
    }

    render() {
        return <React.Fragment>
            <div className='movies-container'>    
                { this.state.films.length != 0 ? this.state.films.map((film) => {
                    return <div className='movie-card' key={film.id}>
                        <img src='https://via.placeholder.com/150' />
                        <div>{film.name}</div>
                    </div>
                }) : 'Films not found'}
            </div>
        </React.Fragment>
    }
}
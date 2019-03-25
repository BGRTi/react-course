import React from 'react';

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
                    genres: ['drama', 'ne drama']
                }
            ],
        }
    }

    render() {
        return <React.Fragment>
            <div className='movie-page'></div>
            <div className='movie-page--other'>    
                { this.state.films.length != 0 ? this.state.films.map((film) => {
                    return <div className='movie-card' key={film.id}>
                        <img src='https://via.placeholder.com/150' />
                        <div>{film.name}</div>
                    </div>
                }) : ''}
            </div>
        </React.Fragment>
    }
}
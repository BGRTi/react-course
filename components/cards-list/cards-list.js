import React from 'react';

export default class CardsList extends React.Component {
    render() {
        const { films } = this.props;
        return (
            <React.Fragment>
                <div className='movies-container'>    
                    { films.length != 0 ? films.map((film) => {
                        return <div className='movie-card' key={film.id}>
                            <img src='https://via.placeholder.com/150' />
                            <div>{film.name}</div>
                        </div>
                    }) : 'Films not found'}
                </div>
            </React.Fragment>
        )
    }
}
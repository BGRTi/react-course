import React from 'react';

export default class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        console.info('A film was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return <React.Fragment> 
            <form className="main-search" onSubmit={this.handleSubmit}>
                <label>
                    <input className="main-search--input" type="text" placeholder='Enter a film' value={this.state.value} onChange={this.handleChange} />
                </label>
                <input className="main-search--button" type="submit" value="Submit" />
            </form>
            <input className="movies-container--button" type="submit" value="Title" />
            <input className="movies-container--button" type="submit" value="Genre" />
        </React.Fragment>
    }
}
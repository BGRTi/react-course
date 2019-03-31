import React from 'react';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit =(event) => {
    event.preventDefault();
  }

  render() {
    const { value } = this.state;
    return (
      <React.Fragment>
        <form className="main-search" onSubmit={this.handleSubmit}>
          <label htmlFor="search">
            <input className="main-search--input" type="text" placeholder="Enter a film" value={value} onChange={this.handleChange} />
          </label>
          <input className="main-search--button" type="submit" value="Submit" />
        </form>
        <input className="movies-container--button" type="submit" value="Title" />
        <input className="movies-container--button" type="submit" value="Genre" />
      </React.Fragment>
    );
  }
}

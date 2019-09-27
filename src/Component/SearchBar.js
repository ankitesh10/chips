import React from "react";

import './SearchBar.css';

class SearchBar extends React.Component {

  onFormSubmit = e => {
    e.preventDefault();
  };

  onInputClick = value => {
    this.props.onInputClick(value);
  }

  onTermChange = term => {
    this.props.onTermChange(term);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          className="SearchBar__input"
          value={this.props.term}
          onFocus = {() => this.onInputClick(1)}
          onChange={e => this.onTermChange(e.target.value)}
          type="text"
          placeholder="Enter text here..."
        />
      </form>
    );
  }
}

export default SearchBar;

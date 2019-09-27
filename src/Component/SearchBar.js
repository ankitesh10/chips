import React from "react";

import "./SearchBar.css";

class SearchBar extends React.Component {
  onFormSubmit = e => {
    e.preventDefault();
  };

  onBackEnter = e => {
    this.props.onBackEnter(e)
  }

  onInputClick = (value, e) => {
    e.stopPropagation(); 
    this.props.onInputClick(value);
  };

  onTermChange = term => {
    this.props.onTermChange(term);

  };

  render() {
    return (
      <form onSelect={e => e.stopPropagation()} onSubmit={this.onFormSubmit}>
        <input
          className="SearchBar__input"
          onKeyUp={e => this.onBackEnter(e)}
          value={this.props.term}
          onFocus={(e) => this.onInputClick(1, e)}
          onChange={e => this.onTermChange(e.target.value)}
          type="text"
          placeholder="Enter text here..."
        />
      </form>
    );
  }
}

export default SearchBar;

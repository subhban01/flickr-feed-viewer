import React, { Component } from 'react';
import './SearchBar.scss';
import PropTypes from 'prop-types';


export default class SearchBar extends Component {
    constructor() {
        super();
        this.state = {};
    }

  handleSearch = () => {
      const { handleSearch } = this.props;
      handleSearch(this.searchValue);
  }

  onKeyPress = (event) => {
      if (event.key === 'Enter') {
          this.handleSearch();
      }
  }

  updateInputValue(evt) {
      this.searchValue = evt.target.value;
  }

  render() {
      return (
          <div className="searchbar">
              <input
                  type="text"
                  placeholder="Search for something..."
                  className="search-field"
                  onChange={evt => this.updateInputValue(evt)}
                  onKeyPress={this.onKeyPress}
              />
              <input type="button" value="Search" className="search-button" onClick={this.handleSearch} />
              <div className="info">
                  [ Currently only searchable for &quot;beach&quot; and &quot;flowers&quot; due to CORS limitation ]
              </div>
          </div>
      );
  }
}

SearchBar.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};

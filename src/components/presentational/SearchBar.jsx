import React, { Component } from "react";
import styles from './SearchBar.scss';


export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  updateInputValue(evt) {
    this.searchValue = evt.target.value;
  }

  handleSearch = () => {
    this.props.handleSearch(this.searchValue);
  }
  
  render() {
    return (
      <div className="searchbar">
          <input type="text" placeholder="Search for something..."
           className='search-field' onChange={evt => this.updateInputValue(evt)}></input>
          <input type="button" value='Search' className='search-button' onClick={this.handleSearch}></input>
          <div className='info'>[ Currently only searchable for "beach" and "flowers" due to CORS limitation]</div>
      </div>
    );
  }
}
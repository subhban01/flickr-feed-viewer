import React, { Component } from "react";
import styles from './SearchBar.scss';


export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    return (
      <div className="searchbar">
          <input type="text" placeholder="Search for something..." className='search-field'></input>
          <input type="button" value='Search' className='search-button' onClick={this.props.handleSearch}></input>
          <div className='info'>[ Currently only searchable for "beach", "sunset" and "park" ]</div>
      </div>
    );
  }
}
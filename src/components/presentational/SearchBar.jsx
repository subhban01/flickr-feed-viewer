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
          <input type="text" placeholder="Search..." className='search-field'></input>
          <input type="button" value='Search' className='search-button'></input>
      </div>
    );
  }
}
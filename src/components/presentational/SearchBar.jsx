import React, { Component } from "react";


export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    return (
      <div>
          <input type="text" placeholder="good"></input>
          <input type="button" value='Search'></input>
      </div>
    );
  }
}
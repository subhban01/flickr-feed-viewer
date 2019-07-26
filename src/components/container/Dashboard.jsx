import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from '../presentational/SearchBar';
import GridView from './GridView';
import styles from './Dashboard.scss';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    return (
      <div className='container'>
        <header>Flickr Feed Viewer</header>
        <SearchBar />
        <GridView />
      </div>
    );
  }
}

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Dashboard />, wrapper) : false;
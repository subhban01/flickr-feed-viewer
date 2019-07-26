import React, { Component } from "react";
import styles from './Tile.scss';


export default class Tile extends Component {
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
      let {item} = this.props;
    return (
      <div className='tile'>
          <img src={item.media.m} alt="Image"/>
      </div>
    );
  }
}
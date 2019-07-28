import React, { Component } from "react";
import styles from './GridView.scss';
import Tile from './Tile';


export default class GridView extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let {publicFeed} = this.props;
    return (
      <div className='gridview-container'>
        {
          publicFeed.length > 0 &&
          publicFeed.map((item, index) => {
            return(
              <Tile
              key={'tile_' + index}
              item={item}
              />
            )
          })
        }
      </div>
    );
  }
}
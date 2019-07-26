import React, { Component } from "react";
import {getPublicFeed} from '../../repos/FlickrRepo';
import styles from './GridView.scss';
import Tile from '../presentational/Tile';


export default class GridView extends Component {
  constructor() {
    super();
    this.state = {
      publicFeed: []
    };
  }

  componentDidMount(){
    getPublicFeed()
    .then((response) => {
      this.setState({
        publicFeed: response.data.items,
      })
    })
    .catch((err) => {
      console.log('Flickr feed: failed to load data', err);
    });
  }
  
  render() {
    let {publicFeed} = this.state;
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
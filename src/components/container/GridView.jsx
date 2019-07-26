import React, { Component } from "react";
import {getPublicFeed} from '../../repos/FlickrRepo';


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
    return (
      <div>GridView</div>
    );
  }
}
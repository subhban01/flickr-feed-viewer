import React, { Component } from 'react';
import './GridView.scss';
import PropTypes from 'prop-types';
import Tile from './Tile';


export default class GridView extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const { publicFeed } = this.props;
        return (
            <div className="gridview-container">
                { publicFeed &&
                    (publicFeed.length > 0)
          && publicFeed.map((item, index) => (
              <Tile
                  key={`tile_${index.author_id}`}
                  item={item}
              />
          ))
                }
            </div>
        );
    }
}

GridView.propTypes = {
    publicFeed: PropTypes.array.isRequired,
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Tile.scss';


export default class Tile extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const { item } = this.props;
        return (
            <div className="tile">
                <img src={item.media.m} alt="" />
            </div>
        );
    }
}

Tile.propTypes = {
    item: PropTypes.object.isRequired,
};

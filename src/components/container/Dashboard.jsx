import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../presentational/SearchBar';
import GridView from '../presentational/GridView';
import './Dashboard.scss';
import { getPublicFeed, searchBeach, searchFlowers } from '../../repos/FlickrRepo';

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            publicFeed: [],
        };
    }

    componentDidMount() {
        getPublicFeed()
            .then((response) => {
                this.setState({
                    publicFeed: response.data.items,
                });
            })
            .catch((err) => {
                console.error('Flickr feed: failed to load data', err);
            });
    }

    handleSearch = (searchValue) => {
        if (searchValue.trim().toUpperCase() === 'BEACH') {
            searchBeach()
                .then((response) => {
                    this.setState({
                        publicFeed: response.data.items,
                    });
                })
                .catch((err) => {
                    console.error('Search: failed to load data.', err);
                });
        } else if (searchValue.trim().toUpperCase() === 'FLOWERS') {
            searchFlowers()
                .then((response) => {
                    this.setState({
                        publicFeed: response.data.items,
                    });
                })
                .catch((err) => {
                    console.error('Search: failed to load data.', err);
                });
        }
    }

    render() {
        const { publicFeed } = this.state;
        return (
            <div className="container">
                <header>Flickr Feed Viewer</header>
                <SearchBar handleSearch={this.handleSearch} />
                <GridView publicFeed={publicFeed} />
            </div>
        );
    }
}

const wrapper = document.getElementById('app');
ReactDOM.render(<Dashboard />, wrapper);

import React, { Component } from 'react';
import "./index.scss"

class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <div className="bar-loaction">
                    <div className="loaction loaction-icon"></div>
                    <div className="loaction loaction-text">萨达</div>
                </div>
                <div className="search-btn">
                </div>
            </div>
        );
    }
}

export default SearchBar;
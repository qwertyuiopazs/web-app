import React, { Component } from 'react';
import './Header.scss'
import SearchBar from '../SearchBar'

class Header extends Component {
    render() {
        return (
            <div className="main-header">
                <SearchBar />
                <img className="banner-img" src="//xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg" />
            </div>
        );
    }
}

export default Header;
import React, { Component } from 'react';
import {hot} from 'react-hot-loader'
class Container extends Component {
    render() {
        return (
            <div>
                {
                    this.props.children
                }
            </div>
        );
    }
}

export default hot(module)(Container);

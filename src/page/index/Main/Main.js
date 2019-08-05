import React, { Component } from 'react';
import {connect} from 'react-redux'
import BottomBar from '../BottomBar/index'
// import Home from '../Home'
// import Order from '../Order/Order'
// import Mine from '../Mine/Mine'

class TM_FILENAME_BASE extends Component {
  render() {
    return (
      <div>
        {/* <Home /> */}
        {/* <Mine /> */}
        {this.props.children}
        <BottomBar />
      </div>
    );
  }
}

export default connect(null, null)(TM_FILENAME_BASE);

import React, { Component } from 'react';
import {connect} from 'react-redux'
import BottomBar from '../BottomBar/index'
import Home from '../Home'

class TM_FILENAME_BASE extends Component {
  render() {
    return (
      <div>
        <Home />
        <BottomBar />
      </div>
    );
  }
}

export default connect(null, null)(TM_FILENAME_BASE);

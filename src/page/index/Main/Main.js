import React, { Component } from 'react';
import {connect} from 'react-redux'
import BottomBar from '../BottomBar/index'

class TM_FILENAME_BASE extends Component {
  render() {
    return (
      <div>
        <BottomBar />
      </div>
    );
  }
}

export default connect(null, null)(TM_FILENAME_BASE);

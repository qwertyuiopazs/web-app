import React, { Component } from 'react';
import './Loading.scss';

class Loading extends Component {  
  render() {
    return (
      <div className="main-loading">
        <div className="loading">{!this.props.isEnd ? '加载中' : '已完成'}</div>
      </div>
    );
  }
}

export default Loading;

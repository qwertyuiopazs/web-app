import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {switchTabs} from '../actions/tabAction';
import './index.scss'

/**
 * @description 底部导航栏
 */

class BottomBar extends Component {

  renderItems = () => {
    return this.props.tabs.map((item,index) => {
      let cls = 'btn-item ' + item.key

      return (
                <div onClick={()=>{this.switchTabs(item.key)}} key={index} className={cls}>
                  <NavLink to={'/'+item.key} activeClassName="selected">
                    <div className="btn-icon"></div>
                    <div className="btn-name">{item.name}</div>
                  </NavLink>
                </div>
              )
      })
  }

  switchTabs = (key) => {
    this.props.dispatch(switchTabs(key))
  }


  render() {
    return (
      <div className="main-bottom-bar">
        {
          this.renderItems()
        }
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    tabs: state.tabReducer.tabs,
    activeKey: state.tabReducer.activeKey
  }
}

export default connect(mapState, null)(BottomBar);

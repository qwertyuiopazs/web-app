import React, { Component } from 'react';
import { connect } from 'react-redux';
import {changTab} from '../actions/headerAction'
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div className="cate-header">
        <div className="header-top">{this.renderTTabs()}</div>
      </div>
    );
  }

  /**
   * 渲染tabs
   */
  renderTTabs = () => {
    let { tabs, activeKey } = this.props;
    let array = [];
    for (let key in tabs) {
      let item = tabs[key];
      let cls = item.key + ' item';
      if (item.key === activeKey) {
        cls += ' current';
      }
      array.push(
        <div
          className={cls}
          key={key}
          onClick={() => {
            this.handleTabClick(item);
          }}
        >
          {item.text}
        </div>
      );
    }
    return array;
  };

  /**
   * 点击tab
   */
  handleTabClick = (item) => {
    this.props.dispatch(changTab(item.key))
  };
}

const mapState = state => ({
  tabs: state.headerReducer.tabs,
  activeKey: state.headerReducer.activeKey
});

export default connect(
  mapState,
  null
)(Header);

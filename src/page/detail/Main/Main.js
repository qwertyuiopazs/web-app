import React, { Component } from 'react';
import { connect } from 'react-redux'
import NavHeader from 'components/NavHeader'
import {NavLink} from 'react-router-dom';
import './Main.scss'
class TM_FILENAME_BASE extends Component {
  render() {
    return (
      <div className="detail-wrapper">
        <NavHeader title="详情页面" />
        <div className="tab-bar">
          {
            this.renderTabs()
          }
        </div>
        {
          this.props.children
        }
      </div>
    );
  }
  renderTabs = () => {
    let {tabs} = this.props
    return tabs.map((item,index)=> {
      return(
          <NavLink activeClassName="active" className="tab-item" key={index} to={'/'+item.key}>{item.name}</NavLink>
      )
    })
  }
}

const mapState = (state) => ({
  tabs: state.tabReducer.tabs
})

export default connect(mapState, null)(TM_FILENAME_BASE);

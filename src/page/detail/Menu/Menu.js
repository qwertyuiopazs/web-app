import React, { Component } from 'react';
import { getLeftBarList, itemClick } from '../actions/menuAction';
import { connect } from 'react-redux';
import './Menu.scss';
import MenuItem from './MenuItem/MenuItem'
class Menu extends Component {
  render() {
    return (
      <div className="menu-wrapper">
        <div className="left-bar">
          <div className="left-bar-inner">{this.renderLeftBar()}</div>
        </div>
        <div className="right-content">{this.renderRight()}</div>
      </div>
    );
  }

  /**
   * 右边列表
   */
  renderRight = () => {
    let currentLeftIndex = this.props.currentLeftIndex;
    let array = this.props.listData.food_spu_tags || [];

    let currentItem = array[currentLeftIndex];
    if (currentItem) {
      let title = (
        <p key={1} className="right-title">
          {currentItem.name}
        </p>
      );
      return [
        title,
        <div className="right-list" key={2}>
          <div className="right-list-inner">{this.renderRightList(currentItem.spus)}</div>
        </div>
      ];
    }else{
        return null
    }
  };
  /**
   * 渲染右侧列表
   */
  renderRightList = (arr) => {
    let _arr = arr || []
    return _arr.map((item,index)=>{
        if(!item.chooseCount) {
            // 给每个选择的项 强制加个标志
            item.chooseCount = 0
        }
        return (
            <MenuItem item={item} key={index} _index={index}>{item.name}</MenuItem>
        )
    })
  }

  /**
   * 左侧导航
   */
  renderLeftBar = () => {
    let food_spu_tags = this.props.listData.food_spu_tags || [];
    return food_spu_tags.map((item, index) => {
      let cls =
        this.props.currentLeftIndex === index
          ? 'left-bar-item active'
          : 'left-bar-item';
      return (
        <div
          onClick={() => this.handleItemClick(index)}
          key={index}
          className={cls}
        >
          <div className="item-text">
            {item.icon ? <img src={item.icon} /> : null}
            {item.name}
          </div>
        </div>
      );
    });
  };

  /**
   * 左侧导航点击
   */
  handleItemClick = index => {
    this.props.dispatch(
      itemClick({
        currentLeftIndex: index
      })
    );
  };
  componentDidMount() {
    this.props.dispatch(getLeftBarList());
  }
}

const mapState = state => ({
  listData: state.menuReducer.listData,
  currentLeftIndex: state.menuReducer.currentLeftIndex
});

export default connect(
  mapState,
  null
)(Menu);

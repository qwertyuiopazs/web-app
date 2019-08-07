import React, { Component } from 'react';
import { addSelectedItem, minusSelectedItem } from '../../actions/menuAction';
import { connect } from 'react-redux';
import './MenuItem.scss';

class MenuItem extends Component {
  render() {
    let { item } = this.props;
    return (
      <div className="right-menu-item">
        <img className="img" src={item.picture} alt="" />
        <div className="right-menu-item-right">
          <p className="item-title">{item.name}</p>
          <p className="item-desc two-line">{item.description}</p>
          <p className="item-zan">{item.praise_content}</p>
          <p className="item-price">
            ￥{item.min_price} <span className="unit">/{item.unit}</span>
          </p>
        </div>
        <div className="select-content">
          {item.chooseCount > 0 ? (
            <div className="plus minus" onClick={this.minusSelectedItem}></div>
          ) : null}
          {item.chooseCount > 0 ? (
            <div className="count">{item.chooseCount}</div>
          ) : null}
          <div className="plus" onClick={this.handleAddSelectItem}></div>
        </div>
      </div>
    );
  }
  /**
   * 添加菜品
   */
  handleAddSelectItem = () => {
    this.props.dispatch(
      addSelectedItem({
        index: this.props._index
      })
    );
  };

  /**
   * 减少
   */
  minusSelectedItem = () => {
    this.props.dispatch(
      minusSelectedItem({
        index: this.props._index
      })
    );
  };
}

export default connect()(MenuItem);

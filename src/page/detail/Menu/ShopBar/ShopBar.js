import React, { Component } from "react";
import { connect } from "react-redux";
import {
  showChoose,
  addSelectedItem,
  minusSelectedItem,
  clearChoose
} from "../../actions/menuAction";
import "./ShopBar.scss";

class ShopBar extends Component {
  render() {
    let shipping_fee = this.props.listData.poi_info
      ? this.props.listData.poi_info.shipping_fee
      : 0;
    //  过滤所有的已选择项
    let data = this.getTotalPrice();
    return (
      <div className="shop-bar">
        {/* // 商品列表 */}
        {this.props.showChooseContent ? (
          <div className="content-top">
            <div className="content-top-wrapper">
              <div className="clear-top">
                <div className="clear-car">
                  <button onClick={this.handleClearShop}>清空购物车</button>
                </div>
              </div>
              {this.renderShopItem(data)}
            </div>
          </div>
        ) : null}

        {/* 购物车 */}
        <div className="shop-content">
          <div onClick={this.showChooseContentState} className="shop-icon">
            {data.dotNum > 0 ? (
              <div className="dot-num">{data.dotNum}</div>
            ) : null}
          </div>
          <div className="price-content">
            <p className="total-price">{data.totalPrice}</p>
            <p className="other-price">另需配送 ￥{shipping_fee}</p>
          </div>
          <div className="submit-btn">去结算</div>
        </div>
      </div>
    );
  }
  /**
   *清空购物车
   *
   * @memberof ShopBar
   */
  handleClearShop = ()=>{
      this.props.dispatch(clearChoose())
  }

  /**
   * 添加菜品
   */
  handleAddSelectItem = item => {
    this.props.dispatch(
      addSelectedItem({
        index: item._index,
        outIndex: item._outIndex
      })
    );
  };

  /**
   * 减少
   */
  minusSelectedItem = item => {
    this.props.dispatch(
      minusSelectedItem({
        index: item._index,
        outIndex: item._outIndex
      })
    );
  };

  // 切换已选详情
  showChooseContentState = () => {
    let flag = this.props.showChooseContent;
    this.props.dispatch(
      showChoose({
        showChooseContent: !flag
      })
    );
  };

  /**
   * 购物车内
   *
   * @memberof ShopBar
   */
  renderShopItem = data => {
    let array = data.chooseList || [];
    return array.map((item) => {
      return (
        <div className="chooseItem" key={item.id}>
          <div className="item-name">{item.name}</div>
          <div className="price">￥{item.min_price * item.chooseCount}</div>
          <div className="select-content">
            <div
              className="plus"
              onClick={() => {
                this.handleAddSelectItem(item);
              }}
            />
            <div className="count">{item.chooseCount}</div>
            <div
              className="plus minus"
              onClick={() => {
                this.minusSelectedItem(item);
              }}
            />
          </div>
        </div>
      );
    });
  };

  /**
   * 获取总价，即找到所有 chooseCount>0 的项
   *
   * @memberof ShopBar
   */
  getTotalPrice = () => {
    let listData = this.props.listData.food_spu_tags || [];
    let totalPrice = 0;
    let dotNum = 0;
    // 获取所有选择的项
    let chooseList = [];

    for (let index = 0; index < listData.length; index++) {
      let spus = listData[index].spus || [];
      for (let j = 0; j < spus.length; j++) {
        let chooseCount = spus[j].chooseCount;

        if (chooseCount > 0) {
          dotNum += chooseCount;
          totalPrice += spus[j].min_price * chooseCount;
          chooseList.push(spus[j]);
          // 当前集合的索引
          spus[j]._index = j;
          // 当前左边导航的索引
          spus[j]._outIndex = index;
        }

      }
    }
    return {
      dotNum,
      totalPrice,
      chooseList
    };
  };
}

function mapStateToProps(state) {
  return {
    showChooseContent: state.menuReducer.showChooseContent,
    listData: state.menuReducer.listData,
    currentLeftIndex: state.menuReducer.currentLeftIndex
  };
}

export default connect(mapStateToProps)(ShopBar);

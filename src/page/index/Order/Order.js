import React, { Component } from "react";
import { getOrderListAction } from "../actions/orderAction";
import { connect } from "react-redux";
import ListItem from "./ListItem/ListItem";
import ScrollView from "components/ScrollView/ScrollView";
import "./Order.scss";

class Order extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isEnd: false
    };
    this.curretPage = 0;
  }

  render() {
    return (
      <div className="index-order">
        <div className="header">订单</div>
        <ScrollView loadCallback={this.onLoadPage} isEnd={this.state.isEnd}>
          <div className="order-wrap">{this.renderOrderList()}</div>
        </ScrollView>
      </div>
    );
  }
  componentDidMount() {
    this.getOrderList(0);
  }
  getOrderList(curretPage) {
    this.props.dispatch(getOrderListAction(curretPage));
  }
  renderOrderList() {
    return this.props.orderList.map((item, index) => {
      return <ListItem item={item} className="order-item" key={index} />;
    });
  }

  onLoadPage = () => {
    // 最多滚动三次
    if (this.curretPage > 2) {
      this.setState({
        isEnd: true
      });
    } else {
      this.getOrderList(this.curretPage);
    }
    this.curretPage++;
  };
}

const mapState = state => ({
  orderList: state.orderReducer.list
});

export default connect(
  mapState,
  null
)(Order);

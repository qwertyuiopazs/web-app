import React, { Component } from 'react';
import {getOrderListAction} from '../actions/orderAction'
import {connect} from 'react-redux'
import ListItem from './ListItem/ListItem'
import './Order.scss';

class Order extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isEnd: false
    }
    this.curretPage = 0
  }
  
  render() {
    return (
      <div className="index-order">
        <div className="header">订单</div>
        <div className="order-wrap">
          {
            this.renderOrderList()
          }
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.getOrderList(0);
    this.onLoadPage();

  }
  getOrderList(curretPage) {
    this.props.dispatch(getOrderListAction(curretPage))
  }
  renderOrderList() {
    window.console.log(this.props.orderList)
    return this.props.orderList.map((item,index)=>{
      return (<ListItem item={item} className="order-item" key={index}></ListItem>)
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll',()=> {});
  }
  onLoadPage = () => {
    window.addEventListener('scroll', () => {
      // 屏幕可视区域高度
      let clientHeight = document.documentElement.clientHeight;
      // 滚动的距离
      let scrollTop = document.documentElement.scrollTop;
      // 滚动区域的总高度
      let scrollHeight = document.body.scrollHeight;
      // 触发临界高度
      let proLoaDis = 50;
      if (clientHeight + scrollTop >= scrollHeight - proLoaDis) {
        // 最多滚动三次
        if(this.curretPage>2) {
            this.setState({
                isEnd: true
            })
        }else{
            this.getOrderList(this.curretPage);
        }
        this.curretPage++
      }
    });
  };


}

const mapState = (state) => ({
  orderList: state.orderReducer.list
})

export default connect(mapState, null)(Order);

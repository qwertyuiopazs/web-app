import React, { Component } from 'react';
import './ListItem.scss';

class ListItem extends Component {
  render() {
    const {item} = this.props
    
    return (
      <div className="order-item">
        <div className="order-item-inner">
          <img src={item.poi_pic} className="item-img" alt=""/>
          <div className="item-right">
            <div className="item-top">
              <div className="order-name one-line">{item.poi_name}</div>
              <div className="arrow"></div>
              <div className="order-state">{item.status_description}</div>
            </div>
            <div className="item-bottom">
              {this.renderProduct(item)}
            </div>
          </div>
        </div>
        {
          this.renderRemark(item.is_comment)
        }
        
      </div>
    );
  }
  renderProduct (item) {
    let list = item.product_list
    list.push({type: 'more'})
    return list.map((listItem,index)=>{
      if(listItem.type==='more') {
        return (
          <div className="product_item" key={index}>
            <span>...</span>
            <div className="p-total-count">
              总计{item.product_count}个菜，实付￥
              <span className="total-price">{item.total}</span>
            </div>
          </div>
        )
      }

      return <div className="product_item" key={index}>{listItem.product_name} <div className="p-count">x{listItem.product_count}</div></div>
    })
  }
  renderRemark (is_comment) {
    let evalution = !is_comment;
    if(evalution) {
      return (<div className="remark clearfix"><div className="btn">评价</div></div>)
    }
    return null
  }
}

export default ListItem;

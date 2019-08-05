import React, { Component } from "react";
import Loading from '../Loading/Loading'

/**
 *<ScrollView   isEnd={isEnd} loadCallback={loadCallback} />
 * @class ScrollView
 * @extends {Component}
 */
class ScrollView extends Component {
  render() {
    return (
        <div className="scroll-view">
            {this.props.children}
            <Loading isEnd={this.props.isEnd} />
        </div>
    )
  }
  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandle);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandle);
  }
  // 滚动的回调
  scrollHandle = () => {
    // 屏幕可视区域高度
    let clientHeight = document.documentElement.clientHeight;
    // 滚动的距离
    let scrollTop = document.documentElement.scrollTop;
    // 滚动区域的总高度
    let scrollHeight = document.body.scrollHeight;
    // 触发临界高度
    let proLoaDis = 30;
    if (clientHeight + scrollTop >= scrollHeight - proLoaDis) {
        if(!this.props.isEnd) {
            this.props.loadCallback && this.props.loadCallback()
        }
    }
  };
}

export default ScrollView;

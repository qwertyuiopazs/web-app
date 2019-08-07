import React, { Component } from "react";
import NavHeader from "../../../components/NavHeader";
import "./evalution.scss";

class Evalution extends Component {
  constructor(props, context) {
    super(props, context);
    // 最多可輸入的字数
    this.maxCount = 140;
    // 创建一个 ref 来存储 textInput 的 DOM 元素
    this.commentInput = React.createRef();

    this.state = {
      count: this.maxCount,
      // 当前星星数量
      starNum: 0
    };
  }

  render() {
    return (
      <div className="evalution-content">
        <NavHeader title="评价" />
        <div className="ave-content">
          <div className="ave-wrapper">
            <div className="star-area">{this.renderStart()}</div>
            <div className="comment">
              <textarea
                ref={this.commentInput}
                onChange={e => this.onInput(e.target.value)}
                placeholder="好不好吃，服务咋样?"
                maxLength="140"
                className="comment-area"
                name=""
                id=""
                cols="30"
                rows="10"
              />
              <span className="count">{this.state.count}</span>
            </div>
            <p className="one-line pro-name">狗屎</p>
          </div>
        </div>
        <div className="submit">提交评价</div>
      </div>
    );
  }

  componentDidMount() {
    // compositionstart事件触发于一段文字的输入之前（类似于 keydown 事件，但是该事件仅在若干可见字符的输入之前，而这些可见字符的输入可能需要一连串的键盘操作、语音识别或者点击输入法的备选词）。
    this.commentInput.current.addEventListener("compositionstart", () => {
      this.chineseInputing = true;
    });
    this.commentInput.current.addEventListener("compositionend", e => {
      this.chineseInputing = false;
      this.onInput(e.target.value);
    });
  }

  /**
   *输入事件
   *
   * @memberof Evalution
   */
  onInput = value => {
    let num = value.length;
    if (!this.chineseInputing) {
      this.setState({
        count: this.maxCount - num
      });
    }
  };

  /**
   * 渲染星星
   *
   * @memberof Evalution
   */
  renderStart = () => {
    let array = [];
    for (let index = 1; index <= 5; index++) {
      let cls = index <= this.state.starNum ? "star-item light" : "star-item";
      array.push(
        <div
          key={index}
          className={cls}
          onClick={() => {
            this.handleClick(index);
          }}
        />
      );
    }
    return array;
  };
  /**
   * 点击评分
   *
   * @memberof Evalution
   */
  handleClick = index => {
    this.setState({
      starNum: index
    });
  };
}

export default Evalution;

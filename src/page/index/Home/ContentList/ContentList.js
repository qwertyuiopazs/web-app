import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContentListAction } from '../../actions/contentListAction';
import ListItem from './ListItem/ListItem';
import Loading from 'components/Loading/Loading';
import './ContentList.scss';

class ContentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEnd: false
    };
    this.page = 0
  }

  render() {
    return (
      <div className="main-content">
        <h4 className="list-title">
          <span className="title-line"></span>
          <span>附近商家</span>
          <span className="title-line"></span>
        </h4>
        <div className="list-wrap">{this.renderItems()}</div>
        <Loading isEnd={this.state.isEnd} />
      </div>
    );
  }
  renderItems = () => {
    if (!this.props.poilist) return;

    return this.props.poilist.map((item, index) => (
      <ListItem item={item} key={index} />
    ));
  };
  componentDidMount() {
    this.getContentList(0);
    this.onLoadPage();
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
        if(this.page>2) {
            this.setState({
                isEnd: true
            })
        }else{
            this.getContentList(this.page);
        }
        this.page++
      }
    });
  };

  getContentList = (page = 0) => {
    this.props.dispatch(getContentListAction(page));
  };
}

const mapState = state => ({
  contentList: state.contentListReducer.contentList,
  poilist: state.contentListReducer.poilist
});

export default connect(
  mapState,
  null
)(ContentList);

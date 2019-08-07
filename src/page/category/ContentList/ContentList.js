import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContentListAction } from '../actions/contentListAction';
import ListItem from 'components/ListItem/ListItem';
import ScrollView from 'components/ScrollView/ScrollView';
import './ContentList.scss';

class ContentList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-content">
        <ScrollView loadCallback={this.onLoadPage} isEnd={this.props.isEnd}>
            {this.renderItems()}
        </ScrollView>
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
    this.getContentList({});
  }
  onLoadPage = () => {
    // 最多滚动三次
    if(this.props.page<2) {
        this.getContentList({});
    }
  };

  getContentList = () => {
    this.props.dispatch(getContentListAction({}));
  };
}

const mapState = state => ({
  poilist: state.contentListReducer.poilist,
  page: state.contentListReducer.page,
  isEnd: state.contentListReducer.isEnd
});

export default connect(
  mapState,
  null
)(ContentList);

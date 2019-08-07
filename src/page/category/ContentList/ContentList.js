import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContentListAction } from '../actions/contentListAction';
import ListItem from 'components/ListItem/ListItem';
import ScrollView from 'components/ScrollView/ScrollView';
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
        <ScrollView loadCallback={this.onLoadPage} isEnd={this.state.isEnd}>
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
    this.getContentList(0);
  }
  onLoadPage = () => {
    // 最多滚动三次
    if(this.page>2) {
        this.setState({
            isEnd: true
        })
    }else{
        this.getContentList(this.page);
    }
    this.page++
  };

  getContentList = (page = 0) => {
    this.props.dispatch(getContentListAction(page));
  };
}

const mapState = state => ({
  poilist: state.contentListReducer.poilist
});

export default connect(
  mapState,
  null
)(ContentList);

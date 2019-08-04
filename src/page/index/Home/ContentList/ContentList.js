import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getContentListAction} from '../../actions/contentListAction'
import ListItem from './ListItem/ListItem'
import "./ContentList.scss"

class ContentList extends Component {
    render() {
        return (
            <div className="main-content">
                <h4 className="list-title">
                    <span className="title-line"></span>
                    <span>附近商家</span>
                    <span className="title-line"></span>
                </h4>
                <div className="list-wrap">
                    {
                        this.renderItems()
                    }
                </div>
            </div>
        );
    }
    renderItems = () => {
        if(!this.props.contentList.poilist) return;

        return this.props.contentList.poilist.map((item,index) => (
            <ListItem item={item} key={index} />
        ))
    }
    componentDidMount() {
        this.getContentList()
    }
    getContentList = () => {
        this.props.dispatch(getContentListAction())
    }
}

const mapState = (state) => ({
    contentList: state.contentListReducer.contentList,
    poilist: state.contentListReducer.contentList.poilist
})

export default connect(mapState,null)(ContentList);

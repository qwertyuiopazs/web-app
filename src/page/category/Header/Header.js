import React, { Component } from 'react';
import { connect } from 'react-redux';
import {TABKEY} from '../config'
import {changTab, getFilterData, changFilter} from '../actions/headerAction'
import {getContentListAction} from '../actions/contentListAction';
import './Header.scss';

class Header extends Component {
  render() {
    let cls = 'panel'
    if(!this.props.closePanel) {
      cls += ' show'
    }else{
      cls = 'panel'
    }
    return (
      <div className="cate-header">
        <div className="header-top">{this.renderTabs()}</div>
        <div className={cls}>
          <div className="panel-inner">
            {this.renderContent()}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.fetchData()
  }



  fetchData = () => {
    this.props.dispatch(getFilterData())
  }

  /**
   * 下拉面板
   *
   * @memberof Header
   */
  renderContent = () => {
    let { tabs, activeKey } = this.props;
    let array = [];

    for (let key in tabs) {
      let item = tabs[key];
      let cls = item.key + '-panel';
      if (item.key === activeKey) {
        cls += ' current';
      }

      if(item.key === TABKEY.cate) {
        array.push(
          <ul key={item.key} className={cls}>
            {
              this.renderCateContent()
            }
          </ul>
        )
      }else if(item.key === TABKEY.type) {
        array.push(
          <ul key={item.key} className={cls}>
            {
              this.renderTypeContent()
            }
          </ul>
        )
      }else if(item.key === TABKEY.filter) {
        array.push(
          <ul key={item.key} className={cls}>
            {
              this.renderFilterContent()
            }
          </ul>
        )
      }
    }

    return array

  }


  /**
   * 筛选内部 类目
   */
  renderFilterInnerContent =(item,filterList) =>{
    let items = item.items;
    return items.map((item,index)=>{
      let cls=item.icon ? "cate-box-inner has-icon" : "cate-box-inner";
      if(item.active) {
        cls += ' active'
      }
      return (
        <div onClick={()=>{this.changeDoFilter(item, TABKEY.filter,filterList)}} key={index} className="cate-box">
          <div className={cls}>
            {item.icon ? <img src={item.icon}/> : null}{item.name}
          </div>
        </div>
      )
    })
  }

  /**
   * 筛选外部 类目
   *
   * @memberof Header
   */
  renderFilterContent= () => {
    let filterList = this.props.filterData.activity_filter_list || [];
    return filterList.map((item,index) => {
      return (
        <li className="filter-item" key={index}>
          <p className="filter-title">{item.group_title}</p>
          <div className="item-content clearfix">
            {this.renderFilterInnerContent(item,filterList)}
          </div>
        </li>
      )
    })
  }

/**
   * 排序
   *
   * @memberof Header
   */
  renderTypeContent=()=>{
    let typeList = this.props.filterData.sort_type_list || [];
    return typeList.map((item,index) => {
      let cls = item.active ? "type-item active" : "type-item";
      return (
        <li onClick={()=>{this.changeDoFilter(item, TABKEY.type, typeList)}} key={index} className={cls}>
          {item.name}
        </li>
      )
    })
  }

/**
   * 全部分类 内类目
   *
   * @memberof Header
   */
  renderCateInnerContent=(items, cateList) =>{
    return items.sub_category_list.map((item,index)=>{
      let cls = item.active ? 'cate-box-inner active' : 'cate-box-inner'
      return (
        <div onClick={()=>{this.changeDoFilter(item, TABKEY.cate, cateList)}} className="cate-box" key={index}>
          <div className={cls}>
            {item.name}({item.quantity})
          </div>
        </div>
      )
    })
  }
  /**
   * 全部分类 外类目
   *
   * @memberof Header
   */
  renderCateContent=()=>{
    let cateList = this.props.filterData.category_filter_list || []
    return cateList.map((item,index)=>{
      return (
        <li key={index} className="cate-item">
          <p className="item-title">{item.name} <span>{item.quantity}</span></p>
          <div className="item-content clearfix">
            {
              this.renderCateInnerContent(item, cateList)
            }
          </div>
        </li>
      )
    })
  }

  /**
   * 重置active
   *
   * @memberof Header
   */
  revertActive=(key, dataList)=>{
    if(key===TABKEY.cate) {
      for (let index = 0; index < dataList.length; index++) {
        for (let j = 0; j < dataList[index].sub_category_list.length; j++) {
          dataList[index].sub_category_list[j].active = false
        }
      }
    }else if(key===TABKEY.type) {
      for (let index = 0; index < dataList.length; index++) {
        dataList[index].active = false
      }
    }else if(key===TABKEY.filter) {
      for (let index = 0; index < dataList.length; index++) {
        for (let j = 0; j < dataList[index].items.length; j++) {
          dataList[index].items[j].active = false
        }
      }
    }
  }

  /**
   *  点击选择
   *
   * @memberof Header
   */
  changeDoFilter=(item, key,dataList)=>{
    // 重置active
    this.revertActive(key,dataList)
    // item 是对象的引用，这里修改之后，也对原数据修改
    item.active=true
    
    this.props.dispatch(changFilter({item, key}));

    // 更新数据
    this.props.dispatch(getContentListAction({
      filterData: item,
      toFirstPage: true
    }))
    
  }


  /**
   * 渲染tabs
   */
  renderTabs = () => {
    let { tabs, activeKey } = this.props;
    let array = [];
    for (let key in tabs) {
      let item = tabs[key];
      let cls = item.key + ' item';
      if (item.key === activeKey && !this.props.closePanel) {
        cls += ' current';
      }
      array.push(
        <div
          className={cls}
          key={key}
          onClick={() => {
            this.handleTabClick(item);
          }}
        >
          {item.text}
        </div>
      );
    }
    return array;
  };

  /**
   * 点击tab
   */
  handleTabClick = (item) => {
    let closePanel = false;
    if(this.props.activeKey === item.key && !this.props.closePanel) {
      // 点击当前tab并且 目前是开启状态， 关闭panel
      closePanel = true
    }
    this.props.dispatch(changTab({
      activeKey: item.key,
      closePanel
    }))
  };
}

const mapState = state => ({
  tabs: state.headerReducer.tabs,
  activeKey: state.headerReducer.activeKey,
  closePanel: state.headerReducer.closePanel,
  filterData: state.headerReducer.filterData
});

export default connect(
  mapState,
  null
)(Header);

import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategory } from "../../actions/category";
import "./Category.scss";

class Category extends Component {
  render() {
    return (
      <div className="category-wrap clearfix">
        {
            this.renderCategoryList()
        }
      </div>
    );
  }

  renderCategoryList = () => {
    let list = this.props.categoryList.slice(0,8)
    return list.map((item, index) => (
        <div key={index} className="category-item">
          <img className="item-icon" src={item.url} alt=""/>
          <p>{item.name}</p>
        </div>
    ));
  };

  componentDidMount() {
    this.fentchData();
  }

  fentchData = () => {
    this.props.dispatch(getCategory())
  };
}

const mapState = state => ({
  categoryList: state.categoryReducer.categoryList
});

export default connect(
  mapState,
  null
)(Category);

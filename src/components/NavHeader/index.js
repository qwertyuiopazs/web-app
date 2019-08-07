import React, { Component } from "react";
import "./index.scss";

class NavHeader extends Component {
  render() {
    return (
      <div className="NavHeaderWrapper">
        <div className="NavHeader">
          <div className="back-icon" />
          <h4 className="title">{this.props.title ? this.props.title : ""}</h4>
        </div>
      </div>
    );
  }
}

export default NavHeader;

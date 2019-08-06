import React, { Component } from 'react';
import NavHeader from 'components/NavHeader'
import Header from '../Header/Header'
import ContentList from '../ContentList/ContentList'

class TM_FILENAME_BASE extends Component {
  render() {
    return (
      <div>
        <NavHeader title="分类"/>
        <Header />
        <ContentList />
      </div>
    );
  }
}

export default TM_FILENAME_BASE;

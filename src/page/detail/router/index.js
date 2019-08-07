import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
// 入口组件
import Container from "../Main/Container";

// 首页入口
import Main from '../Main/Main'

// 点菜
import Menu from '../Menu/Menu'
// 评价
import Comment from '../Comment/Comment'
import Restanurant from '../Restanurant/Restanurant'


class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Container>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/menu" />} />
            <Route
              path="/"
              render={() => (
                <Main>
                  <Switch>
                    <Route path="/menu" component={Menu} />
                    <Route path="/comment" component={Comment} />
                    <Route path="/restanurant" component={Restanurant} />
                  </Switch>
                </Main>
              )}
            />
          </Switch>
        </Container>
      </HashRouter>
    );
  }
}

export default Router;

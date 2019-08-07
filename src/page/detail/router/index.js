import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// 入口组件
import Container from "../Main/Container";

// 首页入口
import Main from '../Main/Main'

// 点菜
import Menu from '../Menu/Menu'


class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/menu" />} />
            <Route
              path="/"
              render={() => (
                <Main>
                  <Switch>
                    <Route path="/menu" component={Menu} />
                    {/* <Route path="/order" component={Order} />
                    <Route path="/mine" component={Mine} /> */}
                  </Switch>
                </Main>
              )}
            />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}

export default Router;

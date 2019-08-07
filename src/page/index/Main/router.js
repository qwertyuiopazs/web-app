import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
// 引入入口组件，可接受不同组件
import Container from './Container';

// Main入口组件
import Main from './Main';

// 首页
import Home from '../Home/index';
import Order from '../Order/Order';
import Mine from '../Mine/Mine';
// 评价
import Evalution from "../evalution/evalution";

// 404 
import NoMatch from '../404';
class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Container>
          <Switch>
            {/* <Route path="/home" component={Home} /> */}
            <Route exact path="/evalution" component={Evalution}/>
            <Route exact path="/" render={() =>( <Redirect to="/home" /> )} />
            <Route
              path="/"
              render={() =>(
                <Main>
                  <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/order" component={Order} />
                    <Route path="/mine" component={Mine} />
                    <Route component={NoMatch}/>
                  </Switch>
                </Main>
              )}
            />
            <Route component={NoMatch}/>
          </Switch>
        </Container>
      </HashRouter>
    );
  }
}

export default Router;

import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
// 引入入口组件，可接受不同组件
import Container from "./Container";

// Main入口组件
import Main from './Main'

// 首页
import Home from './Main'

class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Container>
          <Switch>

            <Route path="/" render={()=>{
                <Main>
                    <Switch>
                        <Route path="/home" component={Home} />
                    </Switch>
                </Main>
            }} />

            {/* <Route path="/home" component={Home} /> */}
            {/* <Route
            path="/admin"
            render={() => (
              <Admin>
                <Switch>
                  <Route path="/admin/ui/buttons" component={Buttons} />
                  <Route path="/admin/ui/modals" component={Modals} />
                  <Route path="/admin/ui/loadings" component={Loading} />
                  <Route path="/admin/form/login" component={FormLogin} />
                  <Route path="/admin/form/reg" component={FormRegister} />
                  <Route path="/admin/table/basic" component={Table} />
                  <Route path="/admin/table/high" component={HighTable} />
                  <Route path="/admin/city" component={City} />
                  <Route path="/admin/order" component={Order} />

                  <Route path="/admin/permission" component={Permission} />
                  <Route component={NoMatch} />
                </Switch>
              </Admin>
            )}
          /> */}
          </Switch>
        </Container>
      </HashRouter>
    );
  }
}

export default Router;

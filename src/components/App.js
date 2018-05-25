import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import routers      from '../routers-config';
import NavMenuLeft  from './NavMenuLeft';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="page-header">
            <h1>Project 05 - Bug Reporting <small>React Redux Router Firebase</small></h1>
          </div>
          <div className="row">
            <NavMenuLeft />
            { this.getContentPage(routers) }
          </div>
        </div>
      </Router>
    );
  }

  getContentPage(routers) {
    return routers.map((item, index) => {
      return (
        <Route key={ index} exact={ item.exact } path={ item.path } component={ item.main } />
      );
    });
  }
}

export default App;

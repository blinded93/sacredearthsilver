import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Nav from './containers/Nav'
import Home from './containers/Home'
import Items from './containers/Items'
import Login from './containers/Login'

class App extends Component {

  render() {
    return (
      <Router>
        <Fragment>
          <Nav />
      {/* <Route exact path='/' component={Home} /> */}
          {/* <Route path='/admin' component={Login} /> */}
          <Route path='/items' component={Items} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
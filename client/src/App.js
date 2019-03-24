import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import NavBar from './containers/NavBar'
import Home from './containers/Home'
import Items from './containers/Items'

class App extends Component {

  render() {
    return (
      <Router>
        <Fragment>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route path='/items' component={Items} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
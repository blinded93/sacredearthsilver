import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';
import App from './App'
import Login from './containers/Login'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/index'

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Fragment>
        <Switch>
          <Route exact path='/admin' component={Login} />
          <Route path='/' component={App} />
        </Switch>
      </Fragment>
    </Router>
    {/* <App /> */}
  </Provider>,
  document.getElementById('root')
)
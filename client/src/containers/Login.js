import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Login = props => {
  return (
    <Fragment>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path='/admin/items' component={Login} />
          </Switch>
        </Fragment>
      </Router>
    </Fragment>
  )
}

export default Login
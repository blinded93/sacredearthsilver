import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import Home from './containers/Home'
import NavBar from './containers/navigation/NavBar'
import { Grid } from 'semantic-ui-react'
class App extends Component {

  render() {
    return (
      <Router>
        <Fragment>
          <Container fluid>
            <NavBar />

            {/* <Grid padded stackable columns={3}>
              <Grid.Row>
                <Grid.Column>Grid1</Grid.Column>
                <Grid.Column>Grid2</Grid.Column>
                <Grid.Column>Grid3</Grid.Column>
              </Grid.Row>
            </Grid> */}

          </Container>
          <Route exact path="/" component={Home} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
import React, { Component, Fragment } from 'react'
import { Navbar, Nav, Container, Badge } from 'react-bootstrap'
import logo from '../images/bee-logo.png'
import Cart from './Cart'
import '../App.css'

export default class MenuBar extends Component {
  state = {
    sidebar:"",
    overlay:""
  }

  handleCartClick = e => {
    const name = e.target.id === "dismiss" ? "" : "active"

    this.setState({ sidebar: name })
  }

  render() {
    const {sidebar, overlay } = this.state

    return (
      <Navbar fixed='top' bg='white' expand='md'>
        <Container>
          <Navbar.Brand>
            <img id='navbar-brand' src={logo} alt='brand-logo' />
            {' Sacred Earth Silver'}
          </Navbar.Brand>
          <div className="d-flex flex-row order-2 order-md-4">
            <Nav as='ul' className='flex-row'>
              <Nav.Link as='li'>
                <i
                  style={{ color: 'black' }}
                  className='fas fa-shopping-cart'
                  onClick={this.handleCartClick} /><Badge pill variant='white'>0</Badge>
              </Nav.Link>
            </Nav>
          <Navbar.Toggle className='ml-auto mr-2' aria-controls='navbar-menu' />
          </div>
          <Navbar.Collapse className='order-2 order-lg-3' id='navbar-menu'>
            <Nav className='ml-auto'>
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>About</Nav.Link>
              <Nav.Link>Shop</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          
          {/* <Cart sidebar={sidebar}/> */}
        </Container>
      </Navbar>
    )
  }
}

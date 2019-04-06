import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
import { Navbar, Nav, Container, Badge } from 'react-bootstrap'
// import logo from '../images/bee-logo.png'
import Cart from './Cart'
import '../App.css'

export default class MenuBar extends Component {
  state = {
    cartShow: false
  }

  openCart = e =>  this.setState({ cartShow: true })

  closeCart = e => this.setState({ cartShow: false })

  render() {
    return (
      <Fragment>
        <Navbar
          fixed='top'
          className='silver'
          expand='md'>
          <Container>
            <Navbar.Brand>
              {/* <Image src={logo} rounded /> */}
              {' Sacred Earth Silver'}
            </Navbar.Brand>
            <div className="d-flex flex-row order-2 order-md-4">
              <Nav
                as='ul'
                className='flex-row'>
                <Nav.Link 
                  style={{ cursor: 'pointer' }}
                  as='li'
                  onClick={this.openCart}>
                  <i
                    style={{ color: 'black'}}
                    className='fas fa-shopping-cart'  /><Badge pill variant='white'>0</Badge>
                </Nav.Link>
              </Nav>
            <Navbar.Toggle
              className='ml-auto mr-2'
              aria-controls='navbar-menu' />
            </div>
            <Navbar.Collapse
              className='order-2 order-lg-3'
              id='navbar-menu'>
              <Nav className='ml-auto'>
                {/* <Nav.Link className='pl-3'> */}
                  <Link className='pl-3 nav-link' to='/'>Home</Link>
                {/* </Nav.Link> */}
                {/* <Nav.Link className='pl-3'> */}
                  <Link className='pl-3 nav-link' to='/about'>About</Link>
                {/* </Nav.Link> */}
                {/* <Nav.Link className='pl-3'> */}
                  <Link className='pl-3 nav-link' to='/items'>Shop</Link>
                {/* </Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
            
            <Cart 
              show={this.state.cartShow}
              onHide={this.closeCart} />
          </Container>
        </Navbar>
      </Fragment>
    )
  }
}

// const mapStateToProps = state => ({ items: state.items })

// export default connect(mapStateToProps)(MenuBar)
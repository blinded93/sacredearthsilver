import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'

export default class Cart extends Component {
  state = { itemCount: 0, items: [] }
  
  render() {
    return (
      <Fragment>
        <Modal
          {...this.props}
          size="lg"
          className='right'
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Cart ({this.state.itemCount})
          </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col>Photo</Col><Col>Item 1</Col><Col>Price</Col>
              </Row>
              <Row>
                <Col>Photo</Col><Col>Item 2</Col><Col>Price</Col>
              </Row>
              <Row>
                <Col>Photo</Col><Col>Item 3</Col><Col>Price</Col>
              </Row>
              <Row>
                <Col></Col><Col></Col><Col>Total Price</Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='outline-dark' onClick={this.props.onHide}>Checkout</Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    )
  }
}

// const mapStateToProps = state = ({ cartItems:  })
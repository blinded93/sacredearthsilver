import React, { Component } from 'react'
import { Modal, Row, Col, Button } from 'react-bootstrap'
import ItemCarousel from '../containers/ItemCarousel'
import ItemDetails from '../components/ItemDetails'
import { formattedPrice } from '../helpers'

class ItemModalBody extends Component {
  state = {
    showDetails: false,
    caret: 'down',
    action: 'Show'
  }

  handleToggleDetails = e => {
    e.preventDefault()
    if (this.state.showDetails) {
      this.setState({
        showDetails: false,
        caret: 'down',
        action: 'Show'
      })
    } else {
      this.setState({
        showDetails: true,
        caret: 'up',
        action: 'Hide'
      })
    }
    const detailsVisibility = this.state.showDetails ? false : true

    this.setState({showDetails: detailsVisibility})
  }
  
  

  render() {
    const { item, addItem } = this.props
    const { caret, action } = this.state

    return (
      <Modal.Body>
        <Row>
          <Col className='image-col' sm='12' md='8'>
            <ItemCarousel
              item={item} />
          </Col>
          <Col className='details-col' sm='12' md='4'>
            <h4>
              {item.name}
            </h4>
            <p className='muted'>
              ${formattedPrice(item.price)}
            </p>
            <p>
              {item.description}
            </p>
            <ItemDetails
              item={item}
              toggleDetails={this.handleToggleDetails}
              caret={caret}
              action={action} />
            <br />            
            <Button
              variant='outline-dark'
              onClick={e => addItem(item)}>
              Add To Cart
            </Button>
          </Col>
        </Row>
        
      </Modal.Body>
    )
  }
}

export default ItemModalBody
import React, { Fragment } from 'react'
import { Modal, Container, CardColumns } from 'react-bootstrap'
import Item from '../containers/Item'

const CartModalBody = props => {
  const { cartItems, removeItem } = props

  return (
    <Fragment>
      <Modal.Body>
        <Container>
          <CardColumns
            className='cart'>
            {
              cartItems.map(item => <Item
                                      isCartItem={true}
                                      removeItem={removeItem}
                                      item={item}
                                      key={item.id} />)
            }
          </CardColumns>
        </Container>
      </Modal.Body>
    </Fragment>
  )
}

export default CartModalBody
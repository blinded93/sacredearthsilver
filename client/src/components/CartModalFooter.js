import React, { Fragment } from 'react'
import { Modal, Button } from 'react-bootstrap'

const CardModalFooter = props => {
  const { subtotal, onHide } = props

  return (
    <Fragment>
      <Modal.Footer
        className='justify-content-between'>
        <span>Total: <strong>${subtotal}</strong></span>
        <Button variant='outline-dark' onClick={onHide}>Checkout</Button>
      </Modal.Footer>
    </Fragment>
  )
}

export default CardModalFooter
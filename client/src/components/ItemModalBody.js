import React from 'react'
import { Modal } from 'react-bootstrap'
import ItemCarousel from '../containers/ItemCarousel'

const ItemModalBody = props => {
  const { item } = props

  return (
    <Modal.Body>
      <ItemCarousel item={item} />
      <p>
        {item.description}
      </p>
    </Modal.Body>
  )
}

export default ItemModalBody
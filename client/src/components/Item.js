import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'

const Item = props => {
  const { img, name, price } = props

  return (
    <Fragment>
      <Card className='col-lg-4'>
        <Card.Img variant='top'src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className='text-muted'>{price}</Card.Text>
        </Card.Body>
      </Card>
    </Fragment>
  )
}

export default Item
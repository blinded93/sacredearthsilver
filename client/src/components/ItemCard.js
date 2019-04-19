import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'

const ItemCard = props => {
  const { id, item, openModal } = props
  const formattedPrice = (item.price / 100).toFixed(2)

  return (
    <Fragment>
      <Card
        className='pl-0 pr-0'>
        <Card.Img
          variant='top'
          onClick={openModal}
          className='link-cursor'
          src={'data:image/svg+xml;charset=UTF-8,<svg%20width%3D"286"%20height%3D"180"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20viewBox%3D"0%200%20286%20180"%20preserveAspectRatio%3D"none"><defs><style%20type%3D"text%2Fcss">%23holder_169f5b45c4d%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20<%2Fstyle><%2Fdefs><g%20id%3D"holder_169f5b45c4d"><rect%20width%3D"286"%20height%3D"180"%20fill%3D"%23373940"><%2Frect><g><text%20x%3D"106.3984375"%20y%3D"96.3">286x180<%2Ftext><%2Fg><%2Fg><%2Fsvg>'} />
        <Card.Body>
          <Card.Title
            onClick={openModal}
            className='link-cursor'>
              {item.name}
          </Card.Title>
          <Card.Text
            className='text-muted'>
            <small className='align-text-bottom'>
              $</small>{formattedPrice}</Card.Text>
        </Card.Body>
      </Card>
    </Fragment>
  )
}

export default ItemCard
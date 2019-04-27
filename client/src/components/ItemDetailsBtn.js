import React, { Fragment, Component } from 'react'
import { Button } from 'react-bootstrap'

class ItemDetailsBtn extends Component {
  
  render() {
    const { caret, action, toggleDetails } = this.props

    return (
      <Fragment>
        <Button
          className='show-details'
          variant='link'
          onClick={toggleDetails}>
          <i className={`fas fa-caret-${caret}`} /> {action} Details
        </Button>
      </Fragment>
    )
  }
}

export default ItemDetailsBtn
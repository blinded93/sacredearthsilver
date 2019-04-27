import React, { Fragment } from 'react'
import { Button, Spinner } from 'react-bootstrap'

const Loading = props => {
  return (
    <Fragment>
      <Button variant="outline-dark" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true" />
        Loading...
      </Button>
    </Fragment>
  )
}

export default Loading
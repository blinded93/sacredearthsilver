import React, { Fragment, Component } from 'react'
import { withRouter } from 'react-router'
import { Image } from 'react-bootstrap'

const BrandLogo = props => {
  const isActive = props.location.pathname === '/' ? '' : 'active '

  return (
    <Fragment>
      <Image
        id='logo-img'
        src={require('../images/bee-logo.png')}
        className={isActive + 'pr-3'}
        rounded />
    </Fragment>
  )
}

export default withRouter(BrandLogo)
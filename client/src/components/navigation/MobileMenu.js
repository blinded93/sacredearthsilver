import React, { Fragment } from 'react'
import { Header, Dropdown, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import logo from '../../images/bee-logo.png'

const ComboMenu = props => {
  const { menuItems, activeItem, handleItemClick } = props
  const trigger = (
    <Header
      size='small'>
      <Image
        avatar
        size='large'
        src={logo} /> 
        <span>Sacred Earth Silver</span>
    </Header>
  )

  return (
    <Fragment>
      <Dropdown
        trigger={trigger}
        icon={null}
        direction='right'>
        <Dropdown.Menu>
          {
            menuItems.map((item, i) => (
              <Dropdown.Item
                text={item}
                name={item}
                active={activeItem === item}
                onClick={handleItemClick}
                key={i} />
            ))
          }
        </Dropdown.Menu>
      </Dropdown>
          
    </Fragment>
  )
}

export default ComboMenu
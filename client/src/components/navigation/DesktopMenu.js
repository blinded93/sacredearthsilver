import React, { Fragment } from 'react'
import { Responsive, Image, Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import logo from '../../images/bee-logo.png'

const MainMenu = props => {
  const { menuItems, activeItem, handleItemClick } = props

  return (
    <Fragment>
      <Responsive>
        <Menu
          vertical
          icon
          secondary>
          <Menu.Item>
            <Image
              src={logo} />
          </Menu.Item>
          {
            menuItems.map((item, i) => (
              <Menu.Item 
                name={item}
                active={activeItem === item}
                onClick={handleItemClick}
                key={i} />
            ))
          }
        </Menu>
      </Responsive>
    </Fragment>
  )
}

export default MainMenu
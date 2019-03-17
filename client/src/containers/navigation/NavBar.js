import React, { Fragment, Component } from 'react'
import DesktopMenu from '../../components/navigation/DesktopMenu'
import MobileMenu from '../../components/navigation/MobileMenu'
import { Responsive } from 'semantic-ui-react'
import { connect } from 'react-redux'

class NavBar extends Component {
  state = {
    activeItem: 'home',
    menuItems: [
      'home',
      'about',
      'shop',
      'cart'
    ],
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  ifLoggedIn = menu => this.props.currentUser ? menu : menu

  render() {
    const { menuItems, activeItem } = this.state
    
    return (
      <Fragment>
        <Responsive
           minWidth={Responsive.onlyTablet.minWidth}>
          <DesktopMenu
            handleItemClick={this.handleItemClick}
            activeItem={activeItem}
            menuItems={menuItems}
            ifLoggedIn={this.ifLoggedIn} />
        </Responsive>
        <Responsive
          {...Responsive.onlyMobile}>
          <MobileMenu
            handleItemClick={this.handleItemClick}
            activeItem={activeItem}
            menuItems={menuItems}
            ifLoggedIn={this.ifLoggedIn} />
        </Responsive>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  
}

export default connect(mapStateToProps)(NavBar)
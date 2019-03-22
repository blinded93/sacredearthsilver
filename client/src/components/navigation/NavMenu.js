import React, { Component, Fragment } from "react";
import logo from '../../images/bee-logo.png'
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive
} from "semantic-ui-react";

const NavBarMobile = ({ menuItems, activeItem, handleItemClick, visible, onPusherClick, onToggle, children }) => (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        vertical
        visible={visible}
        size='large'
        width='thin'
      >
      {
        menuItems.map((item, i) => (
          <Menu.Item
            name={item}
            active={activeItem === item}
            onClick={handleItemClick}
            key={i} />
        ))
      }
      </Sidebar>
      <Sidebar.Pusher
        dimmed={visible}
        onClick={onPusherClick}
        style={{ minHeight: "100vh" }}
      >
        <Menu
          secondary
          fixed='top'
          size='large'>
          <Menu.Item>
            <Image
              src={logo} />
          </Menu.Item>
          <Menu.Item position='right' onClick={onToggle}>
            <Icon name='sidebar' />
          </Menu.Item>
          <Menu.Item>
            <Icon name='shopping cart'/>
          </Menu.Item>
        </Menu>
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );

const NavBarDesktop = props => (
  <div className='max-width nav'>
    <Menu 
      secondary
      fixed='top'
      size='large'
      className='max-width nav'>
      <Menu.Item>
        <Image
          src={logo} />
      </Menu.Item>
      {
        props.menuItems.map((item, i) => (
          <Menu.Item
            name={item}
            active={props.activeItem === item}
            onClick={props.handleItemClick}
            key={i} />
        ))
      }
      <Menu.Item position='right'>
        <Icon name='shopping cart' />
      </Menu.Item>
    </Menu>
    {props.children}
  </div>
);

const NavBarChildren = ({ children }) => (
  <Container style={{ marginTop: "7em" }}>{children}</Container>
);

export default class NavMenu extends Component {
  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children, activeItem, menuItems } = this.props;
    const { visible } = this.state;

    return (
      <div className='max-width nav'>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            visible={visible}
            handleItemClick={this.handleItemClick}
            activeItem={activeItem}
            menuItems={menuItems}
            ifLoggedIn={this.ifLoggedIn}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            visible={visible}
            handleItemClick={this.handleItemClick}
            activeItem={activeItem}
            menuItems={menuItems}
            ifLoggedIn={this.ifLoggedIn}
          >
          <NavBarChildren>{children}</NavBarChildren>
          </NavBarDesktop>
        </Responsive>
      </div>
    );
  }
}

// import React, { Component } from 'react'
// import { Button, Header, Image, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
// import '../../css/hamburger.css'

// export default class SidebarExampleMultiple extends Component {
//   state = { visible: false }

//   handleHideClick = () => this.setState({ visible: false })
//   handleShowClick = () => this.setState({ visible: true })
//   handleSidebarHide = () => this.setState({ visible: false })

//   render() {
//     const { visible } = this.state

//     return (
//       <div>
//         <Icon name="sidebar" />
//         <Button.Group>
//           <Button disabled={visible} onClick={this.handleShowClick}>
//             Show sidebars
//           </Button>
//         </Button.Group>

//         <Sidebar.Pushable as={Segment}>
//           <Sidebar
//             as={Menu}
//             animation='slidealong'
//             direction='left'
//             icon='labeled'

//             onHide={this.handleSidebarHide}
//             vertical
//             visible={visible}
//             width='thin' >
//             <Menu.Item as='a'>
//               Home
//             </Menu.Item>
//             <Menu.Item as='a'>
//               Games
//             </Menu.Item>
//             <Menu.Item as='a'>
//               Channels
//             </Menu.Item>
//           </Sidebar>

//           <Sidebar
//             as={Menu}
//             animation='slidealong'
//             direction='right'
//             vertical
//             visible={visible}
//             width='wide' >
//             <Menu.Item as='a' header>
//               File Permissions
//             </Menu.Item>
//             <Menu.Item as='a'>Share on Social</Menu.Item>
//             <Menu.Item as='a'>Share by E-mail</Menu.Item>
//             <Menu.Item as='a'>Edit Permissions</Menu.Item>
//             <Menu.Item as='a'>Delete Permanently</Menu.Item>
//           </Sidebar>

//           <Sidebar.Pusher>
//             <Segment basic>
//               <Header as='h3'>Application Content</Header>
//               <Image src='/images/wireframe/paragraph.png' />
//             </Segment>
//           </Sidebar.Pusher>
//         </Sidebar.Pushable>
//       </div>
//     )
//   }
// }

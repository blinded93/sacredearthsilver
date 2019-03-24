import React, { Component, Fragment } from 'react'

export default class Cart extends Component {
  state = { items: 0 }
  
  render() {
    debugger;
    return (
      <nav className={this.props.sidebar} id="sidebar">
        <div id="dismiss">
          <i class="fas fa-arrow-left"></i>
        </div>

        <div class="sidebar-header">
          <h3>Cart</h3>
        </div>

        <ul class="list-unstyled components">
          <p>Dummy Heading</p>
          <li class="active">
            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a>
            <ul class="collapse list-unstyled" id="homeSubmenu">
              <li>
                <a href="#">Home 1</a>
              </li>
              <li>
                <a href="#">Home 2</a>
              </li>
              <li>
                <a href="#">Home 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">About</a>
            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
            <ul class="collapse list-unstyled" id="pageSubmenu">
              <li>
                <a href="#">Page 1</a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
              <li>
                <a href="#">Page 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    )
  }
}


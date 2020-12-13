// Import React
import React from 'react'

// Import Libraries
import { Navbar } from 'rbx'
import PropTypes from 'prop-types'

const Header = (props) => {

  return (
    <Navbar>
      {/* Logo */}
      <Navbar.Brand>
        <Navbar.Burger />
      </Navbar.Brand>

      {/* Navbar Items */}
      <Navbar.Menu>
        <Navbar.Segment align={`end`}>
          <Navbar.Item>
            Item One
          </Navbar.Item>
        </Navbar.Segment>
      </Navbar.Menu>
    </Navbar>
  )
}

export default Header

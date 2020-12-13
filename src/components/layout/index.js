// Import React
import React from 'react'

// Import Components
import {
  Header,
} from 'components'

// Import Libraries
import PropTypes from 'prop-types'

const Layout = (props) => {
  const { children } = props

  return (
    <>
      <Header />
      {
        children
      }
    </>
  )
}

Layout.defaultProps = {
  children: null,
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout

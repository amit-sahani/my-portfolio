import React, { ComponentType } from 'react'
import { Link } from 'gatsby'

const withLayout = (WrappedElement: ComponentType) => {
  
  const Layout = () => {
    return <WrappedElement />
  }

  return Layout
}

export default withLayout;
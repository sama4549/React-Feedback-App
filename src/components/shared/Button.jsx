import PropTypes from 'prop-types'
import React from 'react'

function Button({children, type, version, isDisabled}) {
  return (
    <Button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </Button>
  )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    version: PropTypes.string,
    isDisabled: PropTypes.bool 
}

export default Button
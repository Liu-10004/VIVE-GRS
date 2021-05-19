
import React from 'react'
import PropTypes from 'prop-types'

const SVGIcon = ({ name, fill = 'currentColor', className, ...rest }) => {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const Icon = require(`icons/${name}.svg`).default

  return <Icon {...rest} fill={fill} className={className} data-name={name} />
}

SVGIcon.propTypes = {
  /**
   * filename without file extension and full path
   */
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  fill: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  className: PropTypes.string,
}

export default SVGIcon

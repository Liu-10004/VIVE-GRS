/**
 * @see https://github.com/vivedu/VIVEDU-Homepage/issues/91
 */

import React from 'react'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import SVGIcon from 'components/SVGIcon'
import styles from './Logo.scss'

const Logo = ({
  className,
  color: { icon, text },
  size: { width, height },
}) => (
  // @see https://github.com/vivedu/VIVEDU-Homepage/issues/136
  <Link className={cx(styles.root, className)} style={{ width, height }} to="/">
    <SVGIcon
      name="vivedu-logo-icon"
      fill={icon}
      // NOTE: logo 占整体宽度的 0.26
      width={width * 0.26}
      height={height}
    />
    <SVGIcon
      name="vivedu-logo-text"
      fill={text}
      width={width * 0.64}
      height={height}
    />
  </Link>
)

export default Logo

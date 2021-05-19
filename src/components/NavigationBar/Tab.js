/**
 * @see https://github.com/vivedu/VIVEDU-Homepage/issues/60
 */

import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import cx from 'classnames'
import styles from './Tab.scss'

export const RawTab = ({ children, active, link, ...rest }) => (
  <Link
    className={cx(styles.root, {
      [styles.active]: active,
    })}
    to={link}
    {...rest}
  >
    {children}
  </Link>
)

export default withRouter(RawTab)

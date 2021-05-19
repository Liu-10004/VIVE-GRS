/**
 * @seem https://github.com/vivedu/VIVEDU-Homepage/issues/82
 */

import React from 'react'
import cx from 'classnames'
import styles from './Banner.scss'

const Banner = ({ className, children, background }) => (
  <div
    className={cx(styles.root, className)}
    style={{ backgroundImage: background ? `url(${background})` : '' }}
  >
    {children && <div className="container">{children}</div>}
  </div >
)

export default Banner

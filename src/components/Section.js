/**
 * @see https://github.com/vivedu/VIVEDU-Store/issues/396
 */

import React from 'react'
import cx from 'classnames'
import styles from './Section.scss'

export default ({
  className,
  title,
  textColor,
  children,
}) => (
  <div className={cx(styles.root, className)}>
    <div className={cx('container', styles.content)}>
      <span className={cx(styles.text)} style={{ color: textColor }}>{title}</span>
      {children}
    </div>
  </div>
)

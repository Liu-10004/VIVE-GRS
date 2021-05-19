/**
 * @see https://github.com/vivedu/VIVEDU-Store/issues/406
 */

import React from 'react'
import { createPortal } from 'react-dom'
import cx from 'classnames'
import SVGIcon from 'components/SVGIcon'
import Button from 'components/Button'
import styles from './Modal.scss'

class Modal extends React.Component {
  constructor(props) {
    super(props)

    this.node = document.createElement('div')
  }

  componentDidMount() {
    document.body.appendChild(this.node)
  }

  componentWillUnmount() {
    document.body.removeChild(this.node)
  }

  render() {
    const { className, children, onCloseModal } = this.props

    return createPortal(
      <div className={styles.root}>
        <div className={cx(className, styles.content)}>
          <Button className={styles.close} onClick={onCloseModal}>
            <SVGIcon className={styles.icon} name="close" />
          </Button>
          {children}
        </div>
      </div>,
      this.node
    )
  }
}

export default Modal

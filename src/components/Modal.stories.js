import React from 'react'
import { storiesOf } from '@storybook/react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions'
import Modal from './Modal'

storiesOf('Modal', module).add('close', () => (
  <Modal onClose={action('close')}>
    <div>children</div>
  </Modal>
))

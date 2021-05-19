import React from 'react'
import { storiesOf } from '@storybook/react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions'
import Button from './Button'
import styles from './Button.stories.scss'

storiesOf('Button', module)
  .add('Click', () => (
    <Button className={styles.button} onClick={action('click')}>
      单击
    </Button>
  ))
  .add('Double Click', () => (
    <Button className={styles.button} onDoubleClick={action('double click')}>
      双击
    </Button>
  ))

import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-router'
import { RawTab } from './Tab'
import NavigationBar from './NavigationBar'
import styles from './NavigationBar.stories.scss'

const location = { pathname: '/active' }

storiesOf('NavigationBar', module)
  // @see https://github.com/vivedu/VIVEDU-Homepage/issues/103
  .addDecorator(StoryRouter())
  .add('Tab', () => (
    <div className={styles.tab}>
      <RawTab link="/active" location={location}>
        active tab
      </RawTab>
      <RawTab link="/normal" location={location}>
        normal tab
      </RawTab>
    </div>
  ))
  .add('NavigationBar', () => (
    <div>
      <div style={{ backgroundColor: 'red', height: 300 }}>
        <NavigationBar />
      </div>
      <h1>translucent</h1>
      <div style={{ backgroundColor: 'red', height: 300 }}>
        <NavigationBar translucent />
      </div>
    </div>
  ))

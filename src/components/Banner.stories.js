import React from 'react'
import { storiesOf } from '@storybook/react'
import Banner from 'components/Banner'
import styles from './Banner.stories.scss'

storiesOf('Banner', module).add('Banner', () => (
  <Banner background="http://static-oss.vivedu.com/home/banner/design.min.jpg">
    <div className={styles.content}>Banner1</div>
  </Banner>
))

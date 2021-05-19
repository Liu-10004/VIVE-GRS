import React from 'react'
import { storiesOf } from '@storybook/react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions'
import Countdown from './Countdown'

storiesOf('Countdown', module).add('duration is 10s', () => (
  <div>
    倒计时：<Countdown duration={10} onTimeout={action('click')} />
  </div>
))

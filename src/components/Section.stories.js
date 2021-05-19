import React from 'react'
import { storiesOf } from '@storybook/react'
import Section from './Section'

storiesOf('Section', module)
  .add('Section with default line', () => (
    <Section title="居中不渐变">
      section has a title, and the title with default line
    </Section>
  ))
  .add('Section with gradient line', () => (
    <Section title="底部渐变线" line={{ type: 'gradient', position: 'bottom' }}>
      section has a title, and the title with gradient line
    </Section>
  ))

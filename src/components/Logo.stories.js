import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-router'
import Logo from 'components/Logo'

storiesOf('Logo', module)
  .addDecorator(StoryRouter())
  .add('Logo', () => (
    <div style={{ backgroundColor: '#ccc' }}>
      <h1 style={{ marginTop: 30, marginBottom: 20 }}>蓝 + 白</h1>
      <Logo
        color={{ icon: '#00b3e6', text: '#fff' }}
        size={{ width: 191, height: 45 }}
      />
      <h1 style={{ marginTop: 30, marginBottom: 20 }}>蓝 + 黑</h1>
      <Logo
        color={{ icon: '#00b3e6', text: '#000' }}
        size={{ width: 140, height: 37 }}
      />
      <h1 style={{ marginTop: 30, marginBottom: 20 }}>白</h1>
      <Logo
        color={{ icon: '#fff', text: '#fff' }}
        size={{ width: 140, height: 37 }}
      />
    </div>
  ))

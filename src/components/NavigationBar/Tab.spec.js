import React from 'react'
import { StaticRouter } from 'react-router'
import { shallow } from 'enzyme'
import Tab from './Tab'

describe('<Tab /> with <NavigationBar />', () => {
  const context = {}

  it('should match old snapshot', () => {
    const wrapper = shallow(
      <StaticRouter context={context}>
        <Tab location={{ pathname: '' }} link="/about">
          About us
        </Tab>
      </StaticRouter>
    )

    expect(wrapper).toMatchSnapshot()
  })
})

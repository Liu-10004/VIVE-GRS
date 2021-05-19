import React from 'react'
import { mount } from 'enzyme'
import sinon from 'sinon'
import Button from './Button'

describe('<Button />', () => {

  it('should call onClick event once', () => {
    // mock 点击事件
    const onClick = sinon.spy()
    // 组件中使用了 ref 时，需要使用 mount
    // @see https://gist.github.com/fokusferit/e4558d384e4e9cab95d04e5f35d4f913
    const wrapper = mount(
      <Button onClick={onClick} disabled={false}>
        Click
      </Button>
    )

    // 模拟 "单击" 动作
    wrapper.simulate('click')

    expect(onClick.calledOnce).toEqual(true)
  })

  it('should call onDoubleClick event once', () => {
    // mock 点击事件
    const onDoubleClick = sinon.spy()
    // 组件中使用了 ref 时，需要使用 mount
    // @see https://gist.github.com/fokusferit/e4558d384e4e9cab95d04e5f35d4f913
    const wrapper = mount(
      <Button onDoubleClick={onDoubleClick} disabled={false}>
        doubleClick
      </Button>
    )

    // 模拟 "双击" 动作
    wrapper.find('button').simulate('doubleclick')

    expect(onDoubleClick.calledOnce).toEqual(true)
  })
})
